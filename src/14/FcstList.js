
import { useSearchParams } from "react-router-dom"
import { useState, useEffect, useRef } from "react";
import getcode from "./getcode.json";
export default function FcstList() {
  const [sParams] = useSearchParams();
  const gubun = sParams.get('gubun')
  const dt = sParams.get('dt')
  const x = sParams.get('x')
  const y = sParams.get('y')
  const area = sParams.get('area')
  console.log(gubun, dt, x, y, area)
  const [ops, setOps] = useState(); //메인 목록
  const Date = dt.slice(0, 4) + '-' + dt.slice(4, 6) + '-' + dt.slice(6, 8);
  //전체데이터
  const [tdata,setTdata] = useState();
  //form 값을 참조하기 위한 ref 변수
  const selRef = useRef()

  const apikey = process.env.REACT_APP_API_KEY
 //선택항목 테이블 데이터
const [trs,setTrs] = useState();
 
  //select 가 선택되었을 떄
  const handleSelect = () => {
    console.log(selRef.current.value)
    if (!tdata) return;
    
    const code = getcode.filter(item => item['항목값'] === selRef.current.value)[0]
   
    const tm = tdata.filter(item => item['category'] === selRef.current.value)
                    .map(item => <tr key={item.category + item.fcstDate +item.fcstTime}>
                      <td>{code.항목명}({item.category})</td>
                      <td>{item.fcstDate.slice(0,4)}-{item.fcstDate.slice(4,6)}-{item.fcstDate.slice(6,8)}</td>
                      <td>{item.fcstTime.slice(0,2)}:{item.fcstTime.slice(2,4)}</td>
                      <td>{item.fcstValue}({code.단위})</td>
                    </tr>)

    setTrs(tm)
    
  }
  //데이터 가져오기
  const getfetchData = async(url)=>{
    const resp = await fetch(url)
    const data = await resp.json();
    console.log(data.response.body.items.item) ;
    setTdata(data.response.body.items.item);

   
  }
  //컴포넌트 생성시
  useEffect(() => {
    let tm = getcode.filter(item => item.예보구분 === gubun)
                    .map(item => <option key={item.항목값} value={item.항목값}>
      {item.항목명}({item.항목값})
    </option>)

    console.log('tm=', tm)

    setOps(tm)

    let url = '';
    if (gubun === '단기예보') {
      url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${apikey}&pageNo=1&numOfRows=1000&dataType=json&base_date=${dt}&base_time=0500&nx=${x}&ny=${y}`
    }
    else {
      url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=${apikey}&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${dt}&base_time=0630&nx=${x}&ny=${y}`
    }
    console.log(url)
    getfetchData(url);
  }, [])


  return (
    <div className="w-full flex flex-col justify-start items-center">
      <div className="w-10/12 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 my-5">
        <h1 className=" w-full text-left text-3xl font-bold">
          {area} {gubun} ({Date})
        </h1>
        <select className="form-select " ref={selRef} onChange={handleSelect} >
          <option value=''>----항목을 선택하세요----</option>
          {ops}
        </select>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xl text-gray-700 uppercase bg-gray-100 font-bold ">
              <tr>
                <th scope="col" className="px-6 py-3 rounded-s-lg">
                  항목명
                </th>
                <th scope="col" className="px-6 py-3">
                예측일자
                </th>
                <th scope="col" className="px-6 py-3 rounded-e-lg">
                 예측 시간
                </th>
                <th scope="col" className="px-6 py-3 rounded-e-lg">
                 예측 값
                </th>
              </tr>
            </thead>
            <tbody>
             {trs}
            </tbody>
            <tfoot >
              <tr className=" bg-black text-white w-full text-center h-10 p-2">
                <td colSpan={5}>
             
                </td>
              </tr>
            </tfoot>
          </table>
    </div>
  )
}

