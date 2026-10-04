import { describe, expect, it } from "vitest";
import { projects } from "../data/portfolio.js";
import {
  BREAKPOINTS,
  clampViewportWidth,
  filterProjects,
  metadataDensity,
  navigationMode,
  navigationReducer,
  normalizeFocusFilters,
  projectColumns,
  shouldCollapseNavigation,
  viewportMode
} from "./responsivePolicy.js";

describe("REFLOW responsive policy", () => {
  it("classifies a phone-width viewport as compact", () => {
    expect(viewportMode(390)).toBe("compact");
  });

  it("keeps the compact boundary inclusive", () => {
    expect(viewportMode(BREAKPOINTS.compactMax)).toBe("compact");
  });

  it("classifies 640px as comfortable", () => {
    expect(viewportMode(640)).toBe("comfortable");
  });

  it("keeps the comfortable boundary inclusive", () => {
    expect(viewportMode(BREAKPOINTS.comfortableMax)).toBe("comfortable");
  });

  it("classifies 960px as wide", () => {
    expect(viewportMode(960)).toBe("wide");
  });

  it("normalizes invalid viewport width to compact", () => {
    expect(viewportMode(Number.NaN)).toBe("compact");
  });

  it("uses one project column in compact mode", () => {
    expect(projectColumns(480)).toBe(1);
  });

  it("uses two project columns in comfortable mode", () => {
    expect(projectColumns(800)).toBe(2);
  });

  it("uses three project columns in wide mode", () => {
    expect(projectColumns(1280)).toBe(3);
  });

  it("uses disclosure navigation only in compact mode", () => {
    expect(navigationMode(500)).toBe("disclosure");
    expect(navigationMode(800)).toBe("inline");
  });

  it("reports collapse policy consistently", () => {
    expect(shouldCollapseNavigation(600)).toBe(true);
    expect(shouldCollapseNavigation(700)).toBe(false);
  });

  it("reduces metadata density on compact screens", () => {
    expect(metadataDensity(420)).toBe("essential");
    expect(metadataDensity(760)).toBe("balanced");
    expect(metadataDensity(1200)).toBe("expanded");
  });

  it("clamps negative viewport widths", () => {
    expect(clampViewportWidth(-10)).toBe(0);
  });

  it("caps extremely large viewport widths", () => {
    expect(clampViewportWidth(50000)).toBe(10000);
  });

  it("normalizes filter values against allowed focus tags", () => {
    expect(
      normalizeFocusFilters(
        ["frontend", "frontend", "missing", "state"],
        ["frontend", "state", "scss"]
      )
    ).toEqual(["frontend", "state"]);
  });

  it("returns all projects when no focus is selected", () => {
    expect(filterProjects(projects, [])).toHaveLength(projects.length);
  });

  it("filters projects using AND semantics", () => {
    expect(
      filterProjects(projects, ["frontend", "state"]).map((item) => item.id)
    ).toEqual(["signal", "atelier", "meridian"]);
  });

  it("toggles mobile navigation state", () => {
    expect(navigationReducer({ open: false }, { type: "TOGGLE" }).open).toBe(true);
  });

  it("closes navigation for Escape and wide viewport transitions", () => {
    expect(navigationReducer({ open: true }, { type: "ESCAPE" }).open).toBe(false);
    expect(navigationReducer({ open: true }, { type: "WIDE_VIEWPORT" }).open).toBe(false);
  });
});
