import React, { Component } from "react";

import getApiFetch from "../../servises/getApiFetch";

import s from "./Cast.module.css";

class Cast extends Component {
  state = {
    cast: [],
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    getApiFetch
      .getMoviesCast(movieId)
      .then((data) => this.setState({ cast: data }));
  }

  render() {
    const { cast } = this.state;
    const isCastFull = cast.length > 0;
    return (
      <ul>
        {isCastFull &&
          cast.map((item) => (
            <li key={item.cast_id}>
              {item.profile_path ? (
                <img
                  className={s.img}
                  src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                  alt="profile_photo"
                />
              ) : (
                <div className={s.photo}>
                  <p>No photo</p>
                </div>
              )}
              <p>{item.name}</p>
              <p>Character: {item.character}</p>
            </li>
          ))}
      </ul>
    );
  }
}
export default Cast;
