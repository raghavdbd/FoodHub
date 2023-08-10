import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Shimmer from './Shimmer'
import {IMG_CDN_URL1} from '../Constant'
import useRestaurent from '../util/useRestaurent'


// this functional component will be for restaurent menu 

const RestaurentMenu = () => {
  //  how to read a dynamic url
   const {id}=useParams();
   // here we have create a custom hook
   const restaurent=useRestaurent(id);
   
   if(!restaurent){
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
