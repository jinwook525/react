import { useEffect, useState } from "react"

export default function MyBoxFlag({color}) {
  const[Flag, setFlag]= useState(false);
  const colorObj = {
    'blue' : {
      'bg50' : 'bg-blue-50',
      'bg500' :'bg-blue-500',
      'text700' : 'text-blue-700',
      'border600' : 'border-blue-600',

    },
    'orange' : {
      'bg50' : 'bg-orange-50',
      'bg500' :'bg-orange-500',
      'text700' : 'text-orange-700',
      'border600' : 'border-orange-600',

  }
}
  const Obj = colorObj[color]

  const handleClick = () => {
    setFlag(!Flag);
  }
 
  useEffect(()=> {
    console.log('useEffect=', Flag)
  }, [Flag]);
 
  
  return (
    <div className='flex flex-row w-full h-full justify-center items-center'>
      <div className={`w-2/3 ${Flag ? Obj['bg500'] : ''} flex flex-col border border-slate-400`}>
        <h1 className={`flex border border-slate-400 text-3xl bg-white m-5 p-5 justify-center items-center ${Obj['text700']}`}>
          {color}
        </h1>
        <div className={`flex border border-slate-400 text-2xl m-5 p-5 justify-center items-center ${Obj['bg50']}`} onClick={handleClick}>
        {color} toggle
        </div>
      </div>
    </div>
  )
}
