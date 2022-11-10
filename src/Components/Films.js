import React, { useState, useEffect } from "react";

const Films = () => {
  const [movieData, setMovieData] = useState([]);
  const [MovieTitle, setMovieTitle] = useState();
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      const URL = `http://www.omdbapi.com/?s=${MovieTitle}&apikey=f75e2101`;
      const response = await fetch(URL);
      const final_Data = await response.json();
      console.log(final_Data.Search);
      setMovieData(final_Data.Search);
    };
    fetchMovies();
    // eslint-disable-next-line
  }, [isClicked]);
  return (
    <>
      <div>
        <div className="header">
          <h2>Hooked</h2>
        </div>
        <div className="body">
          <input
            type="text"
            name="search"
            placeholder="Movies , Series, Bio"
            onChange={(e) => {
              setMovieTitle(e.target.value);
            }}
          />
          <button
            onClick={() => {
              setIsClicked((prevState) => !prevState);
            }}
            className="searchBtn"
          >
            Search
          </button>
        </div>
        <div className="body-container">
          <p>Sharing a few of our favourite movies</p>
        </div>
        <div className="display">
          {movieData.map((item, i) => {
            return (
              <div key={i} className="display-cards">
                <img src={item.Poster} className="picture" alt="poster" />
                <h4>{item.Title}</h4>
                <p>Year- {item.Year}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Films;