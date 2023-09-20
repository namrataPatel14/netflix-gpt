import React from 'react';
import GptMovieSuggestion from './GptMovieSuggestion'
import GptSearchBar from './GptSearchBar';

const GptSearch = () => {
  return (
    <div className='relative'>
      <GptSearchBar />
      <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch