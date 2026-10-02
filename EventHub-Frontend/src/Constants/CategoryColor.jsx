export const CATEGORY_COLORS={
   Technology: "linear-gradient(135deg, var(--primary-text), var(--primary-border))",
  Music: "linear-gradient(135deg, var(--purple-text), var(--purple-border))",
  Business: "linear-gradient(135deg, var(--cyan-text), var(--cyan-border))",
  Sports: "linear-gradient(135deg,var(--success-text),var(--success-border))",
  "Arts & Culture": "linear-gradient(135deg,var(--gold), var(--gold-border))",
  "Food & Drink": "linear-gradient(135deg, var(--pink), var(--pink-border))",
}

export const DEFAULT_CATEGORY_COLOR = "linear-gradient(135deg, var(--text-terniary), var(--border))";

export function getCategoryColor(category) {
  return CATEGORY_COLORS[category] || DEFAULT_CATEGORY_COLOR;
}

