
const RestaurentCard=({
    name,
    cuisines,
    cloudinaryImageId,
    avgRating
})=>{
    //  destructuring my restaurent
    // doing destructring over fly


    

    return (

        <div className="w-[200px] h-[350px] p-2 m-2 shadow overflow-hidden  bg hover:bg-gray-100 rounded-lg"  >
         <img className="" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="" />
         <h2 className="font-bold">{name}</h2>
         <h3>{cuisines.join(",")}</h3>
         <h4>{avgRating} Stars</h4>

        </div>
    )
}
export default RestaurentCard