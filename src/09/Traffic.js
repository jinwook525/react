import { useState, useEffect } from "react"
import TrafficNav from "./TrafficNav";

export default function Traffic() {
  //전체 데이터 
  const [tdata,setTdata] = useState([])

  //맨처음 한번만
  useEffect(()=>{
    getFetchData();

  }, [])
  //대분류 데이터
  const [c1,setC1] =useState([]);
  const [selC1, setselC1] = useState()

  //사고유형 데이터
  const [c2,setC2] =useState([]);
  const [selC2, setselC2] = useState()

  //정보 추출
  const [info, setInfo] = useState()

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
    //대분류 생성
    setC1(tm);
  console.log(tm)
  }, [tdata])
    // 대분류 선택 => 사고유형
  useEffect(()=> {
    let tm = tdata.filter(item => item['사고유형대분류'] == selC1)
    tm= tm.map(item => item['사고유형'])
    //사고유형 생성
    setC2(tm)
    //대분류를 선택했을 때 info 초기화
    setInfo("")
  }, [selC1])

  //사고유형 선택
  useEffect(()=>{
    let tm = tdata.filter(item => 
      item['사고유형대분류'] == selC1 && item['사고유형'] == selC2
    )
    tm = tm[0]; // object
    console.log(tm[0])
    const infoKey = ['사고건수','사망자수','중상자수','경상자수','부상신고자수']
    let tmk = infoKey.map((k, idx) => <div key={ selC1 + selC2 + idx}
                          className="w-full flex justify-center items-center ">
                            <div className="w-5/7 p-2 text-sm bg-gray-700 text-white text-center fond-bold">
                              {k}
                            </div>
                            <div className="w=2/7 p-2 text-center ">
                              {tm[k]}
                            </div>
                        </div>)
    setInfo(tmk)
  }, [selC2])
 


  return (
    <div className=" w-full flex flex-col justify-center items-center p-2 m-2 bg-slate-300">
        {c1 && <TrafficNav title='대분류' c= {c1} sel={selC1} setSel= {setselC1} />}
        {c2 && <TrafficNav title='사고유형' c= {c2} sel={selC2} setSel= {setselC2} />}
        <div className=" grid grid-cols-5 gap-2">
          {info}
        </div>
    </div>
  )
}
