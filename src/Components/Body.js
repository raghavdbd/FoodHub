import RestaurentCard from "./RestaurantCard"
import {Restrurentlist} from "../Constant"
import { useState,useEffect } from "react"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useonline from "../util/useonline";
 


function filter(searchtxt,restaurants){
    const filterdata = restaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(searchtxt.toLowerCase())
    );
    return filterdata;

 }
//  using use effect to call Api so that all data will render only first time
 
const Body=()=>{
    const[restaurants,setrestaurent]=useState([])
    const[filterrestaurant,setfilterrestaurent]=useState([]);
    const [searchtxt,setsearchtxt]=useState("");

    useEffect(()=>{

  getRestrurent()

    },[])


    
//   function to call api and 
 async function getRestrurent(){
    let data=await fetch(
    
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
   )

   const json = await data.json();

//    opetional chaining
//   setallrestaurent(json?.data?.cards[0]?.data?.data?.cards);

// setNoOfRestaurant(da?.data?.cards[2]?.data?.data?.totalRestaurants);
// Optional Chaining
setrestaurent(
    json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  );
  setfilterrestaurent(
    json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  );


//     setFilteredrestaurants(json?.data?.cards[2]?.data?.data?.cards);

}
// create a hook for use online
const isonline= useonline();

if(!isonline){
  return   <h1> OOPs check your internet Connection</h1>
}


if(!restaurants) return null;


 

    return  (restaurants.length===0)?<Shimmer /> :(
<>

<div  className="flex">
    <div className="p-2 m-2 border-2 border-black-500 hover:bg-gray-100">
    <input type="text"
          placeholder="Search"
           value={searchtxt}
           onChange={(e)=>{
            setsearchtxt(e.target.value)
            console.log(searchtxt)
           }} />
    </div>
       
        <button className="border-solid border-2 border-black-500 p-2 m-2 rounded-md hover:bg-gray-100" onClick={()=>{
            const data=filter(searchtxt,restaurants);
             setfilterrestaurent(data);
            
            
        }}>Search</button>
</div>
<div className="flex flex-wrap px-5 ">
    {
        filterrestaurant.map(restaurant=>{
        return(
             <Link to={"/restaurent/"+ restaurant?.info?.id }  key={restaurant?.info?.id} >
            < RestaurentCard className="px-10" {...restaurant?.info} /></Link> 

        )})
    }



</div>

</>

    )

};


 export default Body
