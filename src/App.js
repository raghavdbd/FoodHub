import { Children, useState } from "react";
import ReactDOM,{createRoot} from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { RouterProvider, createBrowserRouter,Outlet } from "react-router-dom";
import Contact from "./Components/Contact"
import About from "./Components/About"
import Error from "./Components/Error"
import Cart from "./Components/Cart"

import { Outlet } from "react-router-dom";
import RestaurentMenu from "./Components/RestaurentMenu";
import { Provider } from "react-redux";
import store from "./util/store";



// SPA => Single Page Application

//  store is props 

const Applayout=()=>{
    return(

        <>
        <Provider store={store} >
   <Header />
   {/*  in outlet all the children will fill according to router */}
  {/* <Body /> */}
  <Outlet />
   <Footer />
   </Provider>
   

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


},
{
  path:'/cart',
  element:<Cart />
}

]

}





  ])





const root= ReactDOM.createRoot(document.getElementById("root"));


root.render(<RouterProvider router={appRouter} />);

