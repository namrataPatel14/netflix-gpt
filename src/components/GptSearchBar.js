import React, { useRef } from "react";
import { API_OPTIONS, bg_url } from "../utils/Constant";
import { lang } from "../utils/Language";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/Openai";
import { addGptMovieResult } from "../utils/GptSlice";
import { loaderVisibility } from "../utils/LoaderSlice";

const GptSearchBar = () => {
  
  const langKey = useSelector((store) => store.config.lang);
  const dispatch = useDispatch()
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    
    return json.results;
  };

  const handleGptSearchClick = async () => {
   dispatch(loaderVisibility({loading:true}))
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movie for the query :" +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gader, Don, Sholey, Golmal, Koi Mil Gaya ";

    const gptResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    const gptMovies = gptResult.choices?.[0]?.message?.content.split(",");

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResult = await Promise.all(promiseArray);
    
    if(tmdbResult){
      dispatch(loaderVisibility({loading:false}))
    }
    dispatch(addGptMovieResult({movieNames:gptMovies, movieResults:tmdbResult}))
    
  };

  return (
    <div
      style={{ backgroundImage: `url(${bg_url})` }}
      className="bg-blend-multiply bg-black bg-opacity-50 h-screen flex justify-center items-center bg-cover bg-center"
    >
      <form
        className="inline-flex max-w-lg w-full xs:max-w-md xs:px-5"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="focus:outline-none px-5 py-3 max-w-sm w-full bg-white rounded-l"
          placeholder={lang[langKey].gptSearchPlaceholder}
        ></input>
        <button
          className=" text-white bg-red-700 px-10 py-3 rounded xs:px-8 xs:text-sm"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
