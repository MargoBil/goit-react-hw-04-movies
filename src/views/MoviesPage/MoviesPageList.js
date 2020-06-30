import React from 'react';
import {Link} from 'react-router-dom';


const MoviesPageList = ({movies, match, context}) => {
  return (
    <ul>
    {movies.map (movie => (
      <li key={movie.id}>
        <Link
          to={{
            pathname: `${match.url}/${movie.id}`,
            state: {from: context.props.location},
          }}
        >
          {movie.title}
        </Link>
      </li>
    ))}
  </ul>
  )
}

export default MoviesPageList;