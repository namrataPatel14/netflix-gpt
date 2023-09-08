import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/MoviesSlices";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constant";

const usePopularMovies = () =>{
    const dispatch = useDispatch();

  const getPopularMovie = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
    const json = await data.json();
  
    dispatch(addPopularMovies(json.results));
  }
  useEffect(() => {
    getPopularMovie();
  }, [])
}

export default usePopularMovies;