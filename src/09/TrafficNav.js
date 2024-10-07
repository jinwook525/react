import TailButton from "../UI/TailButton"
import { useEffect, useState } from "react"

export default function TrafficNav({title, c, sel, setSel}) {

  const handleClick1 = (item) => {
      setSel(item);
   
  }
  const tags = c.map(item => <TailButton key={item} caption={item} color={item == sel ? 'orange' :'blue'} handleClick ={()=> handleClick1(item)}/> )
  useEffect(()=>{
    console.log(sel)
  },[sel])

  return (
    <div className="w-full  p-2 m-2 flex justify-between items-center">
      <div className=" w-1/5 text-2xl font-bold flex justify-center items-center">
        교통사고 {title}
      </div>
      <div className="flex justify-end items-center">
      {tags} 
      </div>
    
    </div>
  )
}
