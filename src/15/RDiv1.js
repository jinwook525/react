import RDiv2 from "./RDiv2" ;
import Rdiv3 from "./Rdiv3";
export default function Rdiv1() {
  const x = 10 ;
  const y = 20 ;

  return (
    <div className="w-4/6 h-4/6 
                    flex flex-col justify-center items-center
                    bg-lime-800 text-white font-bold">
      <div className="w-full h-10 p-5 m-2
                      flex justify-start items-center ">
      RDiv1 : x={x} , y={y}
      </div>
      <div className="w-full grid grid-cols-2 gap-4 place-items-center">
        <RDiv2 x2={x} y2={y} />
        <RDiv2 x2={y} y2={x} />
      </div>  
      <div className="w-full h-1/2 flex justify-center items-center">
        <Rdiv3 x3={x*3} y3={y*3} /> 
      </div>
      
    </div>
  )
}