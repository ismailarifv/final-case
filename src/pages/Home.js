import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import List from "../components/List/List";
import SearchForm from "../components/SearchForm/SearchForm";
import axios from "axios";

import "./Home.css";

const Home = () => {
  const [starships, setStarships] = useState(null);
  const [url, setUrl] = useState("https://swapi.dev/api/starships/");

  useEffect(() => {
    axios.get(url).then((response) => {
      setStarships(response.data.results);
      setUrl(response.data.next);
    });
  }, []);

  function loadmoreOnclick() {
    axios.get(url).then((response) => {
      setUrl(response.data.next);
      setStarships([...starships, ...response.data.results]);
    });
  }
  function searchShips(query) {
    axios
      .get(`https://swapi.dev/api/starships/?search=${query}`)
      .then((response) => {
        setUrl(response.data.next);
        setStarships([...response.data.results]);
      });
  }

  return (
    <main className="backgrounds">
      <Header />
      <SearchForm search={searchShips} />
      <List starships={starships} />
      {url !== null && (
        <div className="buttonplace">
          <button onClick={loadmoreOnclick}>Load More</button>
        </div>
      )}
    </main>
  );
};

export default Home;
