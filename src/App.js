import { Children, useState } from "react";
import ReactDOM,{createRoot} from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { RouterProvider, createBrowserRouter,Outlet } from "react-router-dom";
import Contact from "./Components/Contact"
import About from "./Components/About"
import Error from "./Components/Error"

import { Outlet } from "react-router-dom";
import RestaurentMenu from "./Components/RestaurentMenu";


// SPA => Single Page Application



const Applayout=()=>{
    return(
        <>
   <Header />
   {/*  in outlet all the children will fill according to router */}
  {/* <Body /> */}
  <Outlet />
   <Footer />

   </>


   )
}
//  wea re creating  a router 
  const appRouter= createBrowserRouter([
    //  now we define routing configuration
{
path:"/",
element:<Applayout />,
errorElement:<Error />,

children:[
  {
    path:"/",
    element:<Body />
  },
  {
    path:"/contact",
    element:<Contact />
   

},
{
    path:"/about",
    element:<About />


},
{
  path:"/restaurent/:id",
  element:<RestaurentMenu />


}

]

}





  ])





const root= ReactDOM.createRoot(document.getElementById("root"));


root.render(<RouterProvider router={appRouter} />);

