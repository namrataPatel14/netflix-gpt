import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import Loader from "./Loader";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const showLoader = useSelector((store) => store.loader.showLoader)

  useNowPlayingMovies();
  usePopularMovies();

  return (

    <div>
      {
        showLoader ? <Loader /> : <div> <Header />
          {showGptSearch ? (
            <GptSearch />
          ) : (
            <>
              <MainContainer />
              <SecondaryContainer />
            </>
          )} </div>
      }


      {/* 
         Maincontainer
           - VideoBackground
           - VideoTitle
         SecondaryContainer
           - movielist * n
           - cards * n
       */}
    </div>
  );
};

export default Browse;
