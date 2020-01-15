import React from "react";
import "./SearchResult.css";

function SearchResult({ name, description, link, updateDescription }) {
  return (
    <div className="result-box">
      <h3
        className="result-header"
        onClick={() => updateDescription(description)}
      >
        {name}
      </h3>
      <a href={link}>
        <div>Go to WikiPedia Page</div>
      </a>
    </div>
  );
}

export default SearchResult;
