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

  return (
    <div
      className="absolute z-50 px-8 py-2 bg-gradient-to-b from-black w-full flex justify-between items-center
    "
    >
      <img className="w-48" src={logo} alt="logo" />
      {user && (
        <div className="flex">
          {
            showGptSearch &&
            <select onChange={handleLanguageChange}>
            {SUPPORTED_LANGAUGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
          }
          
          <Link
            onClick={handleGptSearchClick}
            className="pt-2 text-sm font-medium text-white"
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </Link>
          <div className="flex justify-center items-center flex-col">
            <img className="w-8" src={user?.photoURL} alt="profile-icon"></img>
            <Link
              onClick={handleSignOut}
              className="pt-2 text-sm font-medium text-white"
            >
              SignOut
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
