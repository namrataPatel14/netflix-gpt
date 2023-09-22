import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);

  if (!movieNames) return null;
  return (
    <div className="bg-black bg-opacity-90 fixed h-screen w-full overflow-y-scroll top-0  text-white p-8 z-50">
      <div>
      <span className=" absolute right-2 top-2 p-5 text-3xl cursor-pointer">×</span>
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
