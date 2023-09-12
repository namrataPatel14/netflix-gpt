import React from 'react';
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';


const VideoBackground = ({ movieId }) => {
   
    useMovieTrailer(movieId);
    const trailerVideo = useSelector(store => store.movies?.trailerVideo)
   
    return (
        <div>
            <iframe  
            className=' w-full aspect-video'
            src={"https://www.youtube.com/embed/"+trailerVideo?.key+ "?&autoplay=1&mute=1"} 
            title="YouTube video player"    
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            ></iframe>
        </div>
    )
 
}
export default VideoBackground