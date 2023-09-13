import React from "react";
import { bg_url } from "../utils/Constant";
import { lang } from "../utils/Language";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div
      style={{ backgroundImage: `url(${bg_url})` }}
      className="bg-blend-multiply bg-black bg-opacity-50 h-screen flex justify-center items-center bg-cover bg-center"
    >
      <form className="inline-flex max-w-lg w-full">
        <input
          type="text"
          className="focus:outline-none px-5 py-3 max-w-sm w-full bg-white rounded-l"
          placeholder={lang[langKey].gptSearchPlaceholder}
        ></input>
        <button className=" text-white bg-red-700 px-10 py-3 rounded">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
