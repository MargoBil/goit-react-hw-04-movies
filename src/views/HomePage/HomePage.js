import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import getApiFetch from '../../servises/getApiFetch';

class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    getApiFetch.getPopularMovies().then(data => this.setState({movies: data}));
  }

  render() {
    const {movies} = this.state;

    return (
      <React.StrictMode>
        {movies.length > 0 && (
          <ul>
            <h2>Trending today</h2>
            {movies.map(movie => (
              <li key={movie.id}>
                <Link
                  to={{
                    pathname: `movies/${movie.id}`,
                    state: {from: this.props.location},
                  }}
                >
                  {movie.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </React.StrictMode>
    );
  }
}

export default HomePage;
