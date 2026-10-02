import React from "react";
import { getCategoryStatusColor } from "./CategoryStatusColor";
import "../App.css"
function CategoryTag({ category }) {
  const color = getCategoryStatusColor(category);

  return (
    <span
      className="event-category"
      style={{
        backgroundColor: color.bg,
        color: color.text,
        border: `1px solid ${color.border}`,
      }}
    >
      {category}
    </span>
  );
}

export default CategoryTag;