import { useState ,useEffect } from "react";
const useRestaurent=(resid)=>{

    const [restaurent,setrestaurent]=useState({});
   
   useEffect(()=>{
       getRestaurentinfo()

   },[])

   async function getRestaurentinfo(){

    const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId="+resid+"&catalog_qa=undefined&submitAction=ENTER");
      const json= await data.json();
      console.log(json.data)
      setrestaurent(json?.data?.cards[0]?.card?.card?.info)
   }
   
  return restaurent


}
export default useRestaurent