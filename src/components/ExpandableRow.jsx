import { useState } from "react";
import "../assets/expandable-row.scss";

export default function ExpandableRow({ title, children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <div className="expandable-row">
        <legend>{title}</legend>
        <button onClick={() => setIsExpanded(!isExpanded)}>
          <img src="/arrow-icon.svg" alt="" width="30" height="30" />
        </button>
      </div>
      <div className="children">{isExpanded && children}</div>
    </div>
  );
}
