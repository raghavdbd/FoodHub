import { useState ,useEffect } from "react";
import { Resapi } from "../Constant";
const useRestaurent=(resid)=>{

    const [restaurent,setrestaurent]=useState({});
   
   useEffect(()=>{
       getRestaurentinfo()

   },[])

   async function getRestaurentinfo(){

    const data= await fetch(Resapi+resid);
      const json= await data.json();
      console.log(json.data)
      setrestaurent(json?.data?.cards[0]?.card?.card?.info)
   }
   
  return restaurent


}
export default useRestaurent