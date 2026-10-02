export const CATEGORY_STATUS_COLORS = {
  Technology: {
   bg: "var(--primary-light)",
    text: "var(--primary-text)",
    border: "var(--primary-border)",
  },

  Music: {
     bg:"var(--purple-light)",
      text:"var(--purple-text)",
      border:"var(--purple-border)",
  },

  Business: {
    bg: "var(--cyan-light)",
    text: "var(--cyan-text)",
    border: "var(--cyan-border)",
  },

  Sports: {
      bg:"var(--succes-light)",
      text:"var(--success-text)",
      border:"var(--success-border)",
  },

  "Arts & Culture": {
    bg:"var(--warning-light)",
    text:"var(--warning-text)",
    border:"var(--warning-border)",
  },

  "Food & Drink": {
    bg:"var(--danger-light)",
    text:"var(--danger-text)",
    border:"var(--danger-border)",
   
  },
};

export const DEFAULT_CATEGORY_STATUS_COLOR = {
  bg: "var(--bg-layout",
  text: "var(--text-secondary)",
  border: "var(--border",
};

export function getCategoryStatusColor(category) {
  return CATEGORY_STATUS_COLORS[category] || DEFAULT_CATEGORY_STATUS_COLOR;
}