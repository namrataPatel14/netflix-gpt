import { useState, useRef } from "react";
import Header from "./Header";
import { CheckValidData } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/UserSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    //validate the form data
    const message = CheckValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://lh3.googleusercontent.com/ogw/AGvuzYZXaiD_A6eVIXoyCy7uQgLBOTKagPByHgtOHDg63ys=s32-c-mo",
          })
            .then(() => {
              const { email, uid, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div
        className="px-12 py-4 bg-blend-multiply bg-black bg-opacity-50 flex items-center justify-center bg-cover bg-center h-screen 
      bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/4f0437a7-333c-42f9-801e-dce7a032c30c/CA-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg')]"
      >
        <div className="w-1/4 bg-black px-16 py-12 bg-opacity-70 rounded">
          <h1 className="text-3xl text-white font-medium mb-8">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col">
            <p className="text-red-600 text-sm font-medium mb-3">
              {errorMessage}
            </p>
            {!isSignInForm && (
              <input
                ref={name}
                type="text"
                placeholder="Full Name"
                className="mb-8 px-4 py-3 rounded focus:outline-none"
              />
            )}
            <input
              ref={email}
              type="text"
              placeholder="Email Address"
              className="mb-8 px-4 py-3 rounded focus:outline-none"
            />
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="mb-8 px-4 py-3 rounded focus:outline-none"
            />

            <button
              onClick={handleButtonClick}
              className=" bg-red-600 text-white px-4 py-3 rounded font-medium text-base"
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
          </form>
          <p
            className="text-white font-normal text-xs mt-2 cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm
              ? "New to Netflix? Sign up now."
              : "Already Registerd? Sign In"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
