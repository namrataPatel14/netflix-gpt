import React from "react";
import MovieCard from "./MovieCard";
import Slider from "react-slick";


const MovieList = ({ title, movies }) => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 10,
    initialSlide: 0,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="pb-24">
      <h1 className="mb-4 text-white text-2xl">{title}</h1>
      <Slider {...settings}>
        {movies?.map((movie) => ( movie.poster_path &&
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </Slider>
    </div>
  );
};

export default MovieList;
