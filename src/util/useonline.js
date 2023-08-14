import { useEffect, useState } from "react";

const useonline = () => {
   const [status, setStatus] = useState(true);

   useEffect(() => {
      window.addEventListener("online", () => {
         setStatus(true);
      });
      window.addEventListener("offline", () => {
         setStatus(false);
      });
   }, []);

   return status; // return true or false
};

export default useonline;
