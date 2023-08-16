import { useSelector } from "react-redux"
import Title from "./Title"
import { Link } from "react-router-dom"
const Header=()=>{

    const cartitem=useSelector(store => store.cart.items)
    console.log(cartitem)
return(
    <div className=" flex justify-between  shadow-lg bg-white-200">
        <div className="">
        <Title />
        </div>
       
       
        <div >
            <ul className="flex px-2 p-2 m-2 ">
              <Link to="/"> <li className="px-8 hover:bg-sky-100">Home</li></Link> 
               <Link to="/about"><li className="px-8 hover:bg-sky-100">About</li></Link> 
               <Link to="/contact"><li className="px-8 hover:bg-sky-100">Contact</li></Link> 
               <Link to="/cart"><li className="px-8 hover:bg-sky-100">Cart{cartitem.length}</li></Link> 
                
              
            </ul>
        </div>
    </div>


)
}
export default Header