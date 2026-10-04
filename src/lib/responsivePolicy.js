export const BREAKPOINTS = Object.freeze({
  compactMax: 639,
  comfortableMax: 959
});

export function viewportMode(width) {
  const safeWidth = Number.isFinite(width) ? Math.max(width, 0) : 0;

  if (safeWidth <= BREAKPOINTS.compactMax) return "compact";
  if (safeWidth <= BREAKPOINTS.comfortableMax) return "comfortable";
  return "wide";
}

export function projectColumns(width) {
  const mode = viewportMode(width);
  if (mode === "compact") return 1;
  if (mode === "comfortable") return 2;
  return 3;
}

export function navigationMode(width) {
  return viewportMode(width) === "compact" ? "disclosure" : "inline";
}

export function metadataDensity(width) {
  const mode = viewportMode(width);
  if (mode === "compact") return "essential";
  if (mode === "comfortable") return "balanced";
  return "expanded";
}

export function shouldCollapseNavigation(width) {
  return navigationMode(width) === "disclosure";
}

export function clampViewportWidth(width) {
  if (!Number.isFinite(width)) return 0;
  return Math.max(0, Math.min(Math.round(width), 10000));
}

export function normalizeFocusFilters(filters, allowed) {
  const source = Array.isArray(filters) ? filters : [];
  const allowedSet = new Set(allowed);
  return [...new Set(source.filter((item) => allowedSet.has(item)))];
}

export function filterProjects(projects, selectedFocus) {
  const selected = Array.isArray(selectedFocus) ? selectedFocus : [];
  if (selected.length === 0) return projects;

  return projects.filter((project) =>
    selected.every((tag) => project.focus.includes(tag))
  );
}

export function navigationReducer(state, event) {
  switch (event?.type) {
    case "TOGGLE":
      return { ...state, open: !state.open };
    case "OPEN":
      return { ...state, open: true };
    case "CLOSE":
    case "ROUTE_CHANGE":
    case "ESCAPE":
    case "WIDE_VIEWPORT":
      return { ...state, open: false };
    default:
      return state;
  }
}
