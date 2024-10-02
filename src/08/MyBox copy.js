import { useEffect, useState } from "react"

export default function MyBox() {
  const[BlueFlag, setBlueFlag]= useState(false);
  const[OrangeFlag, setOrangeFlag]= useState(false);
  
  const handleBlue = () => {
    setBlueFlag(!BlueFlag);
  }
  const handleOrange = () => {
    setOrangeFlag(!OrangeFlag);
  }
 
  useEffect(()=> {
    console.log('useEffectBlue=', BlueFlag)
  }, [BlueFlag]);
 
  useEffect(()=> {
    console.log('useEffectOrage=', OrangeFlag)
  }, [OrangeFlag]);

  return (
    <div className='flex flex-row w-full h-full justify-center items-center'>
      <div className={`w-1/3 ${BlueFlag ? 'bg-blue-600' : ''} flex flex-col border border-slate-400`}>
        <h1 className=' flex border border-slate-400 text-3xl text-white m-5 p-5 justify-center items-center  bg-blue-200'>
          blue
        </h1>
        <div className='flex border border-slate-400 text-2xl m-5 p-5 justify-center items-center 'onClick={handleBlue}>
          blue toggle
        </div>
      </div>
      <div className={`w-1/3  ${OrangeFlag ? 'bg-orange-600' : ''} flex flex-col border border-slate-400`}>
        <h1 className='flex border border-slate-400 text-3xl text-white m-5 p-5 justify-center items-center  bg-orange-200'>
          orange
        </h1>
        <div className='flex border border-slate-400 text-2xl m-5 p-5 justify-center items-center'onClick={handleOrange} >
          orange toggle
        </div>
      </div>
    </div>
  )
}
