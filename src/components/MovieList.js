import React from "react";
import MovieCard from "./MovieCard";
import Slider from "react-slick";


const MovieList = ({ title, movies }) => {
 console.log(movies,"movies11")
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 10,
    initialSlide: 2,
    arrows:false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 7,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
    ]
  };
  return (
    <div className="pb-24 xs:pb-16">
      <h1 className="mb-4 text-white text-2xl xs:text-lg xs:mb-3">{title}</h1>
      <Slider {...settings}>
        {movies?.map((movie) => ( movie.poster_path &&
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </Slider>
    </div>
  );
};

export default MovieList;
