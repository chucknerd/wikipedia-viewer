import React, { useState } from "react";
import SearchResult from "./components/SearchResult";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [names, setNames] = useState([]);
  const [descriptions, setDescriptions] = useState([]);
  const [links, setLinks] = useState([]);
  const [currentDescription, setCurrentDescription] = useState("");

  async function makeSearch() {
    const url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${search}&format=json&origin=*`;
    const response = await fetch(url);
    const jsonRes = await response.json();

    setNames(jsonRes[1]);
    setDescriptions(jsonRes[2]);
    setLinks(jsonRes[3]);
  }

  return (
    <div className="box-wrapper">
      <div className="box">
        <h3>React Wikipedia Viewer</h3>
        <div>{currentDescription}</div>
        <input value={search} onChange={e => setSearch(e.target.value)} />
        <button onClick={makeSearch}>Search</button>

        {names.map((value, i) => (
          <SearchResult
            name={value}
            description={descriptions[i]}
            link={links[i]} updateDescription = {setCurrentDescription}
            key={i + value}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
