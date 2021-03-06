import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";

import styles from "./MovieList.module.css";

import routes from "../../routes";

class MovieList extends Component {
  static defaultProps = { movies: [] };

  static propTypes = {
    movies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
        title: PropTypes.string.isRequired,
      })
    ),
  };
  render() {
    const { movies, location } = this.props;
    return (
      <ul className={styles.MovieList}>
        {movies.map(({ id, title, poster_path }) => (
          <li key={id} className={styles.MovieList__item}>
            <Link
              className={styles.MovieList__title}
              to={{
                pathname: `${routes.movies}/${id}`,
                state: { from: location },
              }}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default withRouter(MovieList);
