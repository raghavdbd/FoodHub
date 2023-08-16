import React from 'react'
import {IMG_CDN_URL1,MENU_ITEM_IMAGE} from '../Constant'

const Fooditem = ({name,price,imageId,rating}) => {
  return (
    <div className='p-3 m-3  shadow-lg bg-white-200'>
        <img  className ='h-30w-30'src= {MENU_ITEM_IMAGE+ imageId } alt="" />
        <h1>{name}</h1>
        <h1> Rs.{price/100}</h1>
        {/* <h2>{rating?.aggregatedRating?.rating}</h2> */}
      
    </div>
  )
}

export default Fooditem
