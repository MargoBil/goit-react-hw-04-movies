import React, {Component} from 'react';

import getApiFetch from '../../servises/getApiFetch';

import s from './Reviews.module.css';

class Reviews extends Component {
  state = {
    reviews: []
  }

  componentDidMount () {
    const{movieId} = this.props.match.params;
    getApiFetch.getMoviesReviews(movieId).then(data => this.setState({reviews: data})
    )
  }

  render () {
    const{reviews} = this.state;
    const isReviewsFull = reviews.length > 0;
    return (
    <>
      {isReviewsFull ? (
      <ul>
        {reviews.map(item => <li key={item.id}>
          <h3>Author: {item.author}</h3>
          <p className={s.content}>{item.content}</p>
        </li>)
        }
      </ul>):(<p>We don't have any reviews for this movie.</p>)
      }
    </>
    )
  }
}
export default Reviews;