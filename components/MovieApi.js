export function useMovieApi() {
  const [movies, setMovies] = useState([]);

  const movieArray = async () => {
    const url = "http://localhost:4000/movies";

    try {
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.data);
    } catch (err) {
      console.log.err;
    }
  };
  return { movies, movieArray };
}
