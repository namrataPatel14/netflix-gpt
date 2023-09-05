import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user)
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div
      className="absolute px-8 py-2 bg-gradient-to-b from-black w-full flex justify-between items-center
    "
    >
      <img
        className="w-48"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && <div className="flex justify-center items-center flex-col">
        <img
          className="w-8"
          src={user?.photoURL}
          alt="profile-icon"
        ></img>
        <Link
          onClick={handleSignOut}
          className="pt-2 text-sm font-medium text-white"
        >
          SignOut
        </Link>
      </div>}
    </div>
  );
};

export default Header;
