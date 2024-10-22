import MyDiv2 from "./MyDiv2"

export default function MyDiv1() {

  return (
    // <div className= " w-10/12 h-5/6 flex flex-col justify-center items-cente bg-lime-800 text-white font-bold text-start">
    <div className="w-10/12 h-5/6 flex flex-col
                    justify-center items-cente
                    bg-lime-800 text-white font-bold text-start">
      <div className="w-full h-10 
                        p-5 flex justify-start items-center "> 
      MyDiv1
      </div>
      <MyDiv2  
              />
    </div>
  )
}
