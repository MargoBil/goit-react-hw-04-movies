import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import SearchForm from './../../components/SearchForm/SearchForm';

import getApiFetch from './../../servises/getApiFetch';
import getParseQueryString from './../../utils/parse-query-string';

class MoviesPage extends Component {
  state = {
    movies: []
  }

  componentDidMount () {
    const{location} = this.props;
    const{query} = getParseQueryString(location.search);
    if(query) {
      getApiFetch.getMoviesBySearchName(query)
      .then(data => this.setState({movies: data}))
    }
  }

  componentDidUpdate(prevProps) {
    const {query: prevQuery} = getParseQueryString(prevProps.location.search);
    const {query: nextQuery} = getParseQueryString(this.props.location.search);
    if(prevQuery !== nextQuery) {
      getApiFetch.getMoviesBySearchName(nextQuery)
      .then(data => this.setState({movies: data}))
    }
  }

  handleSearchForm = value => {
      if(value) {
      this.props.history.push({
      ...this.props.location,
      search: `query=${value}`
      })
    }
  }

  render () {
    const{movies} = this.state;
    const{match} = this.props;
    const isMoviesFullList = movies.length > 0;

    return (
     <>
      <SearchForm onSubmit={this.handleSearchForm}/>
      {isMoviesFullList && (
        <ul>
          {movies.map(movie => (<li key={movie.id}><Link to={{pathname: `${match.url}/${movie.id}`, state: {from: this.props.location}}}>{movie.title}</Link></li>))}
        </ul>
       )}
     </>
    )
  }
}

export default MoviesPage;