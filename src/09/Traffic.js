import { useState, useEffect } from "react"
import TrafficNav from "./TrafficNav";

export default function Traffic() {
  //전체 데이터 
  const [tdata,setTdata] = useState([])

  //맨처음 한번만
  useEffect(()=>{
    getFetchData();

  }, [])
 

  //data fetch
  const getFetchData = () => {
    let url = `https://api.odcloud.kr/api/15070282/v1/uddi:8449c5d7-8be5-4712-9093-968fc0b2d9fc?`
    url=`${url}page=1&perPage=18&serviceKey=${process.env.REACT_APP_API_KEY}`
    console.log(url)
    
  //data 요청
    fetch(url)
      .then(resp => resp.json())
      .then(data => setTdata(data.data))
      .catch(err => console.log(err))
      ;
  }

  //tdata 가 변경되었을떄
  useEffect(()=> {
    console.log(tdata)
    let tm = tdata.map(item => item["사고유형대분류"])
    tm= [...new Set(tm)]
  console.log(tm)
  }, [tdata])
  return (
    <div className=" w-full flex flex-col justify-center items-center p-2 m-2 bg-slate-300">
        <TrafficNav title='대분류' />
        <TrafficNav title='중분류' />
    </div>
  )
}
