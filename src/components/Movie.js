import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

// img 의 alt 속성 => 이미지를 보여줄 수 없을 때 띄울 텍스트
// Link를 쓰면 페이지의 새로고침 없이 다른 페이지로 이동이 가능함 => React 장점 살릴 수 있음
function Movie({ id, year, coverImag, title, summary, genres }) {
  return (
    <div className={styles.movie}>
      <img src={coverImag} alt={title} className={styles.movie__img} />
      <div>
        <h2 className={styles.movie__title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <h3 className={styles.movie__year}>{year}</h3>
        <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
        <ul className={styles.movie__genre}>
          {genres.map((genre) => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImag: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
