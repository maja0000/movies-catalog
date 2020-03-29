import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";
import "./MoviesList.css";

export default function MoviesList() {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json"
      )
      .then(res => {
        let movies = res.data.movies;

        setMovies(movies);
      });
  }, []);

  const addMovie = newFav => {
    setFavourites([...favourites, newFav]);
  };

  const deleteMovie = clicked => {
    setFavourites(
      favourites.filter(eachitem => {
        return eachitem !== clicked;
      })
    );
  };
  console.log("heretest", favourites);

  return (
    <div>
      <p>Your favourite movies :</p>
      {favourites
        ? favourites.map(item => {
            return <Movie onClick={deleteMovie}></Movie>;
          })
        : "No favourites for now!"}

      <h3>Some of our movies :</h3>

      <div className="box">
        {movies.slice(0, 21).map((element, idx) => (
          <Movie
            key={idx}
            uniqueMovieProps={element}
            onClick={addMovie(element)}
          />
        ))}
      </div>
    </div>
  );
}
