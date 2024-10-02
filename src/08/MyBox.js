import { useEffect, useState } from "react"
import MyBoxFlag from "./MyBoxFlag"


export default function MyBox() {
  

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-10/12 grid grid-cols-2 gap-4 justify-center items-center">
      <MyBoxFlag color='blue'/>
      <MyBoxFlag color='orange'/>
      </div>
    </div>
  )
}