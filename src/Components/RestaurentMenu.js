import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Shimmer from './Shimmer'
import {IMG_CDN_URL1} from '../Constant'

const RestaurentMenu = () => {
  //  how to read a dynamic url
   const {id}=useParams();
   const [restaurent,setrestaurent]=useState({});
   
   useEffect(()=>{
getRestaurentinfo()

   },[])
   async function getRestaurentinfo(){

    const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId="+id+"&catalog_qa=undefined&submitAction=ENTER");
      const json= await data.json();
      console.log(json.data)
      setrestaurent(json?.data?.cards[0]?.card?.card?.info)
   }if(!restaurent){
    return <Shimmer.js />
   }

  return (
    <div>
      <img  className ="h-20 w-20 p-1 m-1"src={IMG_CDN_URL1+restaurent.cloudinaryImageId}  alt="" />
      <h2>{restaurent.name}</h2>
      <h3>{restaurent.avgRating}</h3>
      <h3>{restaurent.city}</h3>
      <h4>{restaurent.costForTwoMessage}</h4>
<h5>{restaurent.cuisines?.join(",")}</h5>
    </div>
  )
}

export default RestaurentMenu
