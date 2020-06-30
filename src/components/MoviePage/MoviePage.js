import React from "react";

import s from "./MoviePage.module.css";

const MoviePage = ({ movie, onClick }) => {
  return (
    <div className={s.container}>
      <button className={s.btn} onClick={onClick}>
        &#8592; Go back
      </button>
      <div className={s.box}>
        <div className={s.img}>
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt="profile_photo"
            />
          ) : (
            <p>No poster</p>
          )}
        </div>
        <div className={s.info}>
          <h2>
            {movie.title} ({movie.release_date.slice(0, 4)})
          </h2>
          <span>User score: {Math.round(movie.popularity)}%</span>
          <ul>
            <li>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
            </li>
            <li>
              <h3>Genres</h3>
              <ul className={s.list}>
                {movie.genres.map((genre) => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
