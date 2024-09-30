import React from 'react'
import fooddata from "./fooddata.json"
import FoodCard from './FoodCard'
import { useState } from 'react'
import TailButton from '../UI/TailButton'


export default function FoodMain() {
  console.log(fooddata)

  const [tags, setTags] = useState();
  //운영주체 분류를 중복 제거(set)하고, 버튼으로 만듬 => <TailButton>
  let tm = fooddata.map(item => item["운영주체 분류"].replace(' ', ''));
  tm = [...new Set(tm)]
  
    
  const bts = tm.map(item => <TailButton
    key={item}
    caption={item}
    color='blue'
    handleClick={()=> handleFood(item)}
  />)
  
  

  const handleFood = (c) => {
        
    let tm = fooddata.filter(item => item["운영주체 분류"].replace(' ', '') === c )

    tm= tm.map( i => <FoodCard obj={i} key={i.사업장명}/>)
    setTags(tm)
     
  }
   
  

  return (
    <div className='w-full flex flex-col justify-start h-screen' >
      <div className='w-full h-20 bg-blue-300 flex justify-center items-center'>
        {bts}
      </div>
      <div className='w-full grid grid-cols-1 xl:grid-cols-2 gap-4 p-2 '>
        {tags}
      </div>
    </div>
  )
}
