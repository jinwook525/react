import { useEffect, useState } from "react"
import TailButton from "../UI/TailButton"
export default function BoxOffice() {

  const [cnt, setCnt] = useState(0);
  const handleUp = () => {
    setCnt(cnt+1)
  }
  const handleDown = () =>{
    setCnt(cnt-1)
  }
  //맨처음 한번 실행
  useEffect(() => {
    console.log("useEffect []");
    setCnt(100);
  }, []);
// state 변수 cnt 가 변경이 될때 
  useEffect(() => {
    console.log('useEffect[cnt]', cnt)
  }, [cnt]);
// 변경이 일어날때마다 실행
useEffect(() => {
  console.log('useEffect')
});
//[] 디펜더시 array가 있는가, 안에 변수가 있는가, 아예 없는가 에 따라 다르게 실행됨
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className=" flex justify-center items-center text-3xl m-5">
        {cnt}
      </div>
      <div>
        <TailButton caption="증가"
          color="blue"
          handleClick={handleUp} />
        <TailButton caption="다운"
          color="blue"
          handleClick={handleDown} />
        
      </div>
    </div>
  )
}
