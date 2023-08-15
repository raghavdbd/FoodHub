import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Shimmer from './Shimmer'
import {IMG_CDN_URL1,MENU_ITEM_IMAGE} from '../Constant'
import useRestaurent from '../util/useRestaurent'


// this functional component will be for restaurent menu 

const RestaurentMenu = () => {
  //  how to read a dynamic url
   const {id}=useParams();
   // here we have create a custom hook
  
   const [restaurent,menuItem] =useRestaurent(id);
   console.log(menuItem);


   
   
   if(!restaurent){
    return <Shimmer.js />
   }

  return (
    <>
    <div className='p-2 m-2 px-6 flex shadow-lg bg-white-200'  >
      <div className='rounded-md'>
      <img  className ="h-62 w-60 p-1 m-1 rounded-md "src={IMG_CDN_URL1+restaurent.cloudinaryImageId}  alt="" />
      </div>
       <div className='p-5 m-5'>
       <h2 className='text-4xl'>{restaurent.name}</h2>
       <h5 className='text-2xl '>{restaurent.cuisines?.join(",")}</h5>
     
      <p className="text-2xl">
      {restaurent?.locality + ", " + restaurent?.areaName}
    </p>
    <h3 className='text-2xl'>{restaurent.avgRating} ⭐| Total Ratings:{" "}
      {restaurent?.totalRatingsString}</h3>
      <h4 className='text-2xl'>{restaurent.costForTwoMessage}</h4>
     
       </div>

      
    </div>
    <h3 className='text-2xl px-80 '>What would you like to have today:</h3>
    <div className='p-2 m-2 '>
    {menuItem.map((item, i) => {
      return item ? (
        <div className="" key={i}>
          <div className='p-2 m-2 px-6 h-25 w-30 shadow-lg bg-white-200 flex justify-between '>
            <div>
            <p className="item-name">{item?.name}</p>
            <p>
              Rs.{" "}
              {Math.trunc(item?.price / 100)
                ? Math.trunc(item?.price / 100)
                : ""}
            </p>
            <p className="item-rating">
              {item?.ratings?.aggregatedRating?.rating != undefined
                ? item?.ratings?.aggregatedRating?.rating +
                  " | " +
                  item?.ratings?.aggregatedRating?.ratingCount
                : ""}
            </p>
            </div>
            
            <div className="addToCartContainer">
            <img
               className ='h-20 w-25'src={item?.imageId ? MENU_ITEM_IMAGE + item?.imageId : ""}
             
            />
            <button className="p-1 m-1">Add</button>
          </div>
          </div>
         
        </div>
      ) : null;
    })}
  </div>


    <div>




    </div>
    </>

    
     
    );
  };
  
 
  


export default RestaurentMenu
