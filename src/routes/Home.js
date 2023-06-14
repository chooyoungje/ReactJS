import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovie = async () => {
    const json = await (await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")).json();
    console.log(json.data.movies);
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <div>
        {loading ? (
          <div className={styles.loader}>
            <span>Loading...</span>
          </div>
        ) : (
          <div className={styles.movies}>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                coverImag={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
