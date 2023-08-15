import { useState ,useEffect } from "react";
import { Resapi } from "../Constant";
const useRestaurent=(resid)=>{

    const [restaurent,setrestaurent]=useState([]);
    const [menuItem, setMenuItem] = useState([]);
   
   useEffect(()=>{
       getRestaurentinfo()

   },[])

   async function getRestaurentinfo(){

    const data= await fetch(Resapi+resid);
      const json= await data.json();
      console.log(json.data)
      setrestaurent(json?.data?.cards[0]?.card?.card?.info)
      const allCardArray =
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      const allItemArray = allCardArray.map((item) =>
      item?.card?.card?.itemCards?.map((oneItem) => oneItem?.card?.info)
    );
       const categoryItem = allItemArray?.map((i) => i?.map((j) => j));
        setMenuItem(categoryItem.flat());
   }
   
  return [restaurent,menuItem]


}
export default useRestaurent