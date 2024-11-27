import TailButton from "../UI/TailButton"
import { useState, useEffect, useRef } from "react"
import { AtomN, AtomN2 } from "./AtomN";
import { useRecoilState } from "recoil";
import userEvent from "@testing-library/user-event";

export default function Recoil3({x3,y3}) {
  const [x,setX] = useState(x3);
  const [y,setY] = useState(y3);
  const inRef = useRef();
  const [n, setN] = useRecoilState(AtomN);
  const [n2, setN2] = useRecoilState(AtomN2);

  const handleUp =()=>{
    // x를 변경하려면 setX로 변경
    setX(x + 1);
    setN(n + 1);
  }
  const handleDown =()=>{
    setX(x - 1);
    setN(n - 1);
  }
  useEffect(()=>{
    setY( x * parseInt(inRef.current.value))
  },[x])
  
  useEffect(()=>{
    if (!localStorage.getItem("x"))
      setX(0);
    else
      setX(parseInt(localStorage.getItem('x')))
  },[])
  
  useEffect(()=>{
    localStorage.setItem('x',x);

  },[x])
  // useEffect(()=>{
  //   setY( x * parseInt(inRef.current.value))
  // },[n])
  useEffect (()=> {

  },[])

  return (
    <div className="w-full h-4/5 flex flex-col bg-lime-400 text-black font-bold mt-10 p-5 ">
      recoil3(x= {x}, y={y})
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-4">
        <input type='number'ref={inRef} defaultValue={2} min = {2} max={5} className="form-input" />
      
        <TailButton caption='증가' 
                    color='blue'
                    handleClick={handleUp}
                    size="w-1/2"
                              />
        <TailButton caption='감소' 
                    color='orange'
                    handleClick={handleDown}
                    size="w-1/2"
                              />
      </div>
    </div>
  )
}
