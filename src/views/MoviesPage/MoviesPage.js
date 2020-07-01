import React, {Component} from 'react';

import SearchForm from './../../components/SearchForm/SearchForm';

import getApiFetch from './../../servises/getApiFetch';
import getParseQueryString from './../../utils/parse-query-string';
import MoviesPageList from './MoviesPageList';

class MoviesPage extends Component {
  state = {
    movies: [],
    loader: false,
  };

  componentDidMount() {
    const {location} = this.props;
    const {query} = getParseQueryString(location.search);
    if (query) {
      this.setState({loader: true});
      getApiFetch
        .getMoviesBySearchName(query)
        .then(data => this.setState({movies: data}))
        .finally(() => this.setState({loader: false}));
    }
  }

  componentDidUpdate(prevProps) {
    const {query: prevQuery} = getParseQueryString(prevProps.location.search);
    const {query: nextQuery} = getParseQueryString(this.props.location.search);
    if (prevQuery !== nextQuery) {
      this.setState({loader: true});
      getApiFetch
        .getMoviesBySearchName(nextQuery)
        .then(data => this.setState({movies: data}))
        .finally(() => this.setState({loader: false}));
    }
  }

  handleSearchForm = value => {
    if (value) {
      this.props.history.push({
        ...this.props.location,
        search: `query=${value}`,
      });
    }
  };

  render() {
    const {movies, loader} = this.state;
    const {match} = this.props;
    const isMoviesFullList = movies.length > 0;

    return (
      <React.StrictMode>
        <SearchForm onSubmit={this.handleSearchForm} />
        {isMoviesFullList && !loader && (
          <MoviesPageList movies={movies} match={match} context={this} />
        )}
        {loader && <div>Loading...</div>}
      </React.StrictMode>
    );
  }
}

export default MoviesPage;
