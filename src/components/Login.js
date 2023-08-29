
import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const handleClick = () =>{
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div>
      <Header />
      <div className="px-12 py-4 bg-blend-multiply bg-black bg-opacity-50 flex items-center justify-center bg-cover bg-center h-screen 
      bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/4f0437a7-333c-42f9-801e-dce7a032c30c/CA-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg')]">
        <div className="w-1/4 bg-black px-16 py-12 bg-opacity-70 rounded">
          <h1 className="text-3xl text-white font-medium mb-8">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          <form className="flex flex-col">
            {!isSignInForm && <input type="text" placeholder="Full Name" className="mb-8 px-4 py-3 rounded focus:outline-none"/> }
            <input type="text" placeholder="Email Address" className="mb-8 px-4 py-3 rounded focus:outline-none"/>
            <input type="password" placeholder="Password" className="mb-8 px-4 py-3 rounded focus:outline-none"/>
            <button 
            className=" bg-red-600 text-white px-4 py-3 rounded font-medium text-base">{isSignInForm ? "Sign In" : "Sign Up"}</button>
          </form>
          <p className="text-white font-normal text-xs mt-2 cursor-pointer" onClick={handleClick}>
            {isSignInForm ?  "New to Netflix? Sign up now." : "Already Registerd? Sign In"}
            </p>
        </div>
      </div>
      
    </div>
  );
};

export default Login;
