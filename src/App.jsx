import React from "react";

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./componensts/layer/RootLayout";
import Home from "./componensts/page/Home";
import ContactUS from "./componensts/page/ContactUS";
import Service from "./componensts/page/Service";
import About from "./componensts/page/About";




const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<RootLayout/>}
      >
        <Route index element={<Home/>} ></Route>
        <Route path='/service' element={<Service/>} ></Route>
        <Route path='/about-us' element={<About/>} ></Route>
        <Route path='/contact-us' element={<ContactUS/>} ></Route>

      </Route>
    )
  );
  return (
   <>
     <RouterProvider router={router} />
   </>
  )
}

export default App