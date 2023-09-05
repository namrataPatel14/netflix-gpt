import {createBrowserRouter , RouterProvider} from 'react-router-dom';
import Login from './Login';
import Browse from './Browse';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from '../utils/Firebase'
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/UserSlice'

const Body = () => {
  const dispatch = useDispatch();
 
  const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<Login/>,
    },
    {
        path: "/browse",
        element: <Browse/>,
    },
  ])
  
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if(user){
          const {email, uid , displayName, photoURL} = user;
          dispatch(addUser({ uid: uid, email:email, displayName:displayName, photoURL:photoURL}))
          
        }
      } else {
          dispatch(removeUser());
          
      }
    });
  },[])

  return (
    <div>
       
        <RouterProvider router={appRouter}/>
    </div>
  );
};

export default Body;