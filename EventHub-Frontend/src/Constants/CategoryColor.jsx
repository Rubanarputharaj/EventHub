export const CATEGORY_COLORS={
   Technology: "linear-gradient(135deg, #1677ff, #69b1ff)",
  Music: "linear-gradient(135deg, #722ed1, #b37feb)",
  Business: "linear-gradient(135deg, #e91e63, #ffb6d5)",
  Sports: "linear-gradient(135deg, #fa8c16, #ffc069)",
  "Arts & Culture": "linear-gradient(135deg, #13c2c2, #5cdbd3)",
  "Food & Drink": "linear-gradient(135deg, #16a34a, #b7f7c5)",
}

export const DEFAULT_CATEGORY_COLOR = "linear-gradient(135deg, #8c8c8c, #bfbfbf)";

export function getCategoryColor(category) {
  return CATEGORY_COLORS[category] || DEFAULT_CATEGORY_COLOR;
}


import { getCategoryColor } from '../constants/categoryColors';

// backend la irundhu (API call/useEffect vazhi) featuredEvents varும் nu assume pannunga:
// const [featuredEvents, setFeaturedEvents] = useState([]);
// each event object la ippo `color` field irukka தேவை இல்ல — category mattум் podhும்

{featuredEvents.map((event) => (
  <div className="event-card" key={event.title}>
    <div
      className="event-cover"
      style={{ background: getCategoryColor(event.category) }}   {/* ← idhு mattum maathunga */}
    >
      <span>{event.icon}</span>
      <span className="price-chip">{event.price}</span>
    </div>
    {/* rest same */}
  </div>
))}