import MyDiv3 from "./MyDiv3"


export default function MyDiv2({dn1, dn2, dn3}) {
 
  return (
    <div className= "w-10/12 h-5/6 flex flex-col justify-center items-center bg-lime-700 text-white font-bold">
      
      <div className=" w-full h-10 p-5 flex justify-start items-center ">
       MyDiv2
      </div>
     <MyDiv3 />
          </div>
  )
}
