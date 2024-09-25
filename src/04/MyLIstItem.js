import { useState } from "react";
export default function MyLIstItem({ title, content, imgUrl }) {
  const [n, setN] = useState(0);
  const handleHclick = ()=> {
    setN(n+1);
    console.log(n);
  }
  return (
    <div className='w-full h-full
                      border border-gray-300
                        flex justify-center items-center'>
      <div className=' w-1/3  flex justify-center items-start'>
        <img src={imgUrl} alt="img" className="w-2/3" />
      </div>
      <div className='w-2/3 h-full flex flex-col justify-start items-center bg-orange-100'>
        <div className="flex flex-col h-3/4">
          <div className=" text-2xl mb-2 font-bold">
            {title}
          </div>
          <div>
            {content}
          </div>
        </div>
        <div className="flex h-1/4 w-full justify-end items-end">
          <span className="cursor-pointer"
                           onClick={handleHclick}>
            ❤️
            </span>
          <span className="mx-2">좋아요</span>
          <span>{n}</span>
        </div>
      </div>

    </div>



  )
}

