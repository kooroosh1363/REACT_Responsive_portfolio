import { useEffect, useMemo, useReducer, useState } from "react";
import { principles, projects } from "./data/portfolio.js";
import {
  filterProjects,
  metadataDensity,
  navigationReducer,
  normalizeFocusFilters,
  viewportMode
} from "./lib/responsivePolicy.js";

const focusOptions = ["frontend", "state", "accessibility", "navigation", "scss"];

function MenuIcon({ open }) {
  return open ? (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export default function App() {
  const [width, setWidth] = useState(() => window.innerWidth);
  const [navState, dispatch] = useReducer(navigationReducer, { open: false });
  const [selectedFocus, setSelectedFocus] = useState([]);

  const mode = viewportMode(width);
  const density = metadataDensity(width);

  const visibleProjects = useMemo(
    () => filterProjects(projects, selectedFocus),
    [selectedFocus]
  );

  useEffect(() => {
    const onResize = () => {
      const nextWidth = window.innerWidth;
      setWidth(nextWidth);

      if (nextWidth >= 640) {
        dispatch({ type: "WIDE_VIEWPORT" });
      }
    };

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        dispatch({ type: "ESCAPE" });
      }
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  function toggleFocus(tag) {
    setSelectedFocus((current) => {
      const next = current.includes(tag)
        ? current.filter((item) => item !== tag)
        : [...current, tag];

      return normalizeFocusFilters(next, focusOptions);
    });
  }

  return (
    <div className="app-shell" data-viewport-mode={mode} data-density={density}>
      <header className="site-header">
        <div className="layout header-row">
          <a className="brand" href="#top" aria-label="REFLOW home">
            <span className="brand-mark">R</span>
            <span>
              <strong>REFLOW</strong>
              <small>Responsive portfolio layout system</small>
            </span>
          </a>

          <button
            className="menu-button"
            type="button"
            aria-expanded={navState.open}
            aria-controls="primary-navigation"
            onClick={() => dispatch({ type: "TOGGLE" })}
          >
            <MenuIcon open={navState.open} />
            <span>{navState.open ? "Close" : "Menu"}</span>
          </button>

          <nav
            id="primary-navigation"
            className="primary-nav"
            data-open={navState.open}
            aria-label="Primary"
            onClick={() => dispatch({ type: "ROUTE_CHANGE" })}
          >
            <a href="#work">Work</a>
            <a href="#system">System</a>
            <a href="#principles">Principles</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero layout">
          <p className="eyebrow">Responsive engineering portfolio</p>
          <h1>Design the reflow, not just the desktop screenshot.</h1>
          <p className="hero-copy">
            REFLOW turns an old fixed-size portfolio template into a layout system with explicit
            viewport modes, adaptive navigation, fluid typography, content-priority rules, and
            responsive project discovery.
          </p>

          <div className="mode-readout" aria-label="Responsive policy status">
            <div>
              <span>Viewport mode</span>
              <strong>{mode}</strong>
            </div>
            <div>
              <span>Metadata density</span>
              <strong>{density}</strong>
            </div>
            <div>
              <span>Viewport width</span>
              <strong>{width}px</strong>
            </div>
          </div>
        </section>

        <section id="work" className="work-section layout" aria-labelledby="work-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Selected engineering work</p>
              <h2 id="work-title">One dataset. Different compositions.</h2>
            </div>
            <p>{visibleProjects.length} of {projects.length} projects visible</p>
          </div>

          <div className="focus-filter" aria-label="Project focus filters">
            {focusOptions.map((tag) => {
              const pressed = selectedFocus.includes(tag);

              return (
                <button
                  key={tag}
                  type="button"
                  aria-pressed={pressed}
                  onClick={() => toggleFocus(tag)}
                >
                  {tag}
                </button>
              );
            })}
          </div>

          {visibleProjects.length ? (
            <div className="project-grid">
              {visibleProjects.map((project, index) => (
                <article className="project-card" key={project.id}>
                  <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
                  <p className="eyebrow">{project.subtitle}</p>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>

                  <div className="tag-row" aria-label="Project focus">
                    {project.focus.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <a
                    href={project.repository}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Inspect repository →
                  </a>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <strong>No project matches every selected capability.</strong>
              <button type="button" onClick={() => setSelectedFocus([])}>
                Clear filters
              </button>
            </div>
          )}
        </section>

        <section id="system" className="system-section">
          <div className="layout system-grid">
            <div>
              <p className="eyebrow">Responsive contract</p>
              <h2>Three modes, one content model.</h2>
            </div>

            <div className="policy-list">
              <article>
                <span>Compact</span>
                <strong>0–639px</strong>
                <p>Disclosure navigation, one-column projects, essential metadata.</p>
              </article>
              <article>
                <span>Comfortable</span>
                <strong>640–959px</strong>
                <p>Inline navigation, two-column projects, balanced metadata.</p>
              </article>
              <article>
                <span>Wide</span>
                <strong>960px+</strong>
                <p>Expanded composition, three-column project grid, full metadata.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="principles" className="principles-section layout" aria-labelledby="principles-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Layout principles</p>
              <h2 id="principles-title">Responsive means preserving intent.</h2>
            </div>
          </div>

          <div className="principle-grid">
            {principles.map((item, index) => (
              <article key={item.id}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer layout">
        <strong>REFLOW</strong>
        <span>Responsive portfolio layout system · static frontend</span>
      </footer>
    </div>
  );
}
