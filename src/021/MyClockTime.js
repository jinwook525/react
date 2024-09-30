import { useState, useEffect } from "react";

function MyClockTime () {
  const[cTime, setCTime] = useState(new Date());

  useEffect(()=> {
    const tm = setInterval(() => {
      setCTime(new Date())
    }, 1000);

    return ()=> {
      clearInterval(tm)};
  }, []);
  

  return(
    <div className=" w-full flex justify-center items-start text-2xl font-bold">
      {cTime.toLocaleTimeString()}
    </div>

  )
}
export default MyClockTime;