import React, { Component } from "react";

import MoviePage from "../../components/MoviePage/MoviePage";
import AdditionalInfo from "../../components/AdditionalInfo/AdditionalInfo";

import getApiFetch from "./../../servises/getApiFetch";

class MovieDetailsPage extends Component {
  state = {
    movie: null,
  };

  componentDidMount() {
    const { match } = this.props;
    getApiFetch
      .getMovieFullInfo(match.params.movieId)
      .then((info) => this.setState({ movie: info }));
  }

  handleBtnGoBack = () => {
    const { state } = this.props.location;
    const { history } = this.props;

    if (state && state.from) {
      history.push(state.from);
    }
  };

  render() {
    const { movie, visible } = this.state;

    return (
      <div>
        {movie && (
          <React.StrictMode>
            <MoviePage movie={movie} onClick={this.handleBtnGoBack} />
            <AdditionalInfo
              movie={movie}
              props={this.props}
              visible={visible}
            />
          </React.StrictMode>
        )}
      </div>
    );
  }
}

export default MovieDetailsPage;
