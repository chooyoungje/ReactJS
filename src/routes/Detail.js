import { json, useParams } from "react-router-dom";
import { useEffect } from "react";

// useParams를 쓰면 url에 있는 값을 가져올 수 있음
function Detail() {
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    console.log(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return <h1>Detail</h1>;
}

export default Detail;
