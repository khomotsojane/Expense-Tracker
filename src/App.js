import React from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './Home';
import Login from './authentication/Login';
import Registration from './authentication/Registration';


const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home/>}>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/registration" element={<Registration/>}></Route>
      
    </Route>
  )
);
function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;