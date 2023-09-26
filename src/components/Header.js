import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/UserSlice";
import { SUPPORTED_LANGAUGES, logo } from "../utils/Constant";
import { toggleGptSearchView } from "../utils/GptSlice";
import { changeLanguage } from "../utils/ConfigSlice";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user) {
          const { email, uid, displayName, photoURL } = user;
          dispatch(
            addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL,
            })
          );
          navigate("/browse");
        }
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe when component unmount;
    return () => unsubscribe();
  }, []);
  const navigateMain = () =>{
    dispatch(toggleGptSearchView());
  }
  return (
    <div
      className="absolute z-50 px-8 md:px-3 xs:px-3 sm:px-2 py-2 bg-gradient-to-b from-black w-full flex justify-between items-center top-0
    "
    >
     <Link onClick={navigateMain}> <img className="w-48 md:w-32 sm:w-28 xs:w-24" src={logo} alt="logo" /></Link>
      {user && (
        <div className="flex">
          {
            showGptSearch &&
            <select onChange={handleLanguageChange} className="focus:outline-none bg-transparent text-white">
            {SUPPORTED_LANGAUGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
          }
          
          <Link
            onClick={handleGptSearchClick}
            className="bg-white text-black text-sm px-6 py-2 sm:px-4 xs:px-3 sm:text-xs xs:text-xs sm:py-1 xs:py-1
             rounded hover:bg-opacity-50 mr-5 ml-5 sm:mr-4 xs:mr-3"
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </Link>
          <div className="flex justify-center items-center">
            <img className="w-4 sm:w-3 xs:w-2" src={user?.photoURL} alt="profile-icon"></img>
            <Link
              onClick={handleSignOut}
              className="text-sm sm:text-xs xs:text-xs text-white ml-1"
            >
              Sign out
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
