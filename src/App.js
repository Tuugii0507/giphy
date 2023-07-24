import React, { useState, ChangeEvent } from "react";
import { Grid } from "@giphy/react-components";
import { GiphyFetch } from "@giphy/js-fetch-api";

const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const handleChange = (e: ChangeEvent) => {
    setSearchValue(e.target.value);
  };

  const gf = new GiphyFetch("sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh");
  // const fetchGifs = () => gf.related({ limit: 10 });
  const fetchGifs = (searchValue) =>
    gf.search(searchValue, {
      sort: "relevant",
      lang: "es",
      limit: 30,
      type: "gifs",
    });
    
  return (
    <div>
      <input type="text" onChange={handleChange} value={searchValue} />
      <Grid width={800} columns={3} fetchGifs={fetchGifs} />
    </div>
  );
};

export default App;

// https://github.com/Giphy/giphy-js/blob/master/packages/fetch-api/README.md
