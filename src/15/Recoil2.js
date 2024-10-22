import { AtomN } from "./AtomN"
import { useRecoilValue } from "recoil"

// export default function Recoil2(props) {
  export default function Recoil2({y2}) {
const x = 1
const  n= useRecoilValue(AtomN)    
  return (
    <div className="w-1/3 h-4/5 flex flex-col bg-lime-500 text-white font-bold mt-10 mx-2 p-5 ">
      recoil2((x={x}, n= {n}))
    </div>
  )
}
