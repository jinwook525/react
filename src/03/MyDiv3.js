
export default function MyDiv3({dn1, dn2, dn3}) {
  
  return (
    <div  className= "w-10/12 h-5/6 flex flex-col justify-center items-center bg-lime-600 text-white font-bold">
      
    <div className=" w-full h-10 p-5 flex justify-start items-center " >
    {/* {`${probs.d1}> ${probs.d2}> ${probs.d3}`} */}
    {`${dn1}> ${dn2}> ${dn3}`}
      </div>
      
    </div>
  )
}
