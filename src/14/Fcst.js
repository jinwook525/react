import TailButton from "../UI/TailButton";
import getxy from './getxy.json';
import { useNavigate } from "react-router-dom";
import { useRef } from "react";


export default function Fcst() {
  const sido = getxy.map(item => item["1단계"]).map(item => <option key={item} value={item}> {item} </option>)
  console.log(getxy)
  const navigate = useNavigate();

   // 입력 날짜
   const txtDt = useRef();
   //지역 
   const txtArea = useRef();
 
   
  //버튼이 눌러 졌을때
  const handleOk = (gubun) => {
  console.log(txtDt.current.value)
    if (txtDt.current.value === "") {
      alert('날짜를 선택하세요')
      txtDt.current.focus()
      return
    }

    if (txtArea.current.value === "") {
      alert('지역을 선택하세요')
      txtArea.current.focus()
      return
    }
    console.log(gubun)
    const dt = txtDt.current.value.replaceAll('-','')
    const loc = getxy.filter(item => item['1단계']=== txtArea.current.value)[0]
    const x = loc["격자 X"]
    const y = loc["격자 Y"]
    navigate(`/Fcstlist?gubun=${gubun}&dt=${dt}&x=${x}&y=${y}&area=${txtArea.current.value}`) ;
  }
 


  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="w-full text-center text-3xl my-10 font-bold">일기예보</h1>
      <div className="w-10/12 grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <input type="date" ref={txtDt} id="txt1" className="w=1/2 form-input " />
        <select className="form-select " ref={txtArea}>
          <option value=""> --지역을 선택하세요</option>
          {sido}
        </select>
        <TailButton caption='초단기예보'
          color='blue'
          handleClick={() => handleOk('초단기예보')}
          size='w-full' />
        <TailButton caption='단기예보'
          color='blue'
          handleClick={() => handleOk('단기예보')}
          size='w-full' />

      </div>
    </div>
  )
}
