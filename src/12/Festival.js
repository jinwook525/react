import { useEffect, useState, useRef } from "react"
import TailCard from "../UI/TailCard";

export default function Festival() {
  // 전체 축제 데이터
  const [tdata, setTdata] = useState([]);

  //구 정보
  const [gunm, setGunm] = useState([]);
  // 선택된 구 정보
  const [selgu, setSelgu] = useState()

  //select box를 제어
  const gu = useRef()

  const getFetchData = async () => {
    let url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?`
    url = `${url}serviceKey=${process.env.REACT_APP_API_KEY}&pageNo=1&numOfRows=38&resultType=json`
    console.log(url)

    const resp = await fetch(url)
    const data = await resp.json()
    console.log(data.getFestivalKr.item)
    setTdata(data.getFestivalKr.item)
  }
  // option  이 선택되면
  const handleSelect = () => {
    console.log(gu.current.value)
  }
  useEffect(() => {
    getFetchData()
  }, [])

  //tdata 가 채워지면 실행
  useEffect(() => {
    let tm = tdata.map(item => item.GUGUN_NM)
    tm = [...new Set(tm)].sort()
    console.log('tm=', tm)

    tm = tm.map(item => <option key={item} value={item}>
      {item}
    </option>)
    setGunm(tm)
  }, [tdata])

  return (
    <div>
      <div className="w-full flex flex-col justify-center">
        <div className="w-10/12 p-5 items-center justify-center">
          <select className="w=1/2 form-select " ref={gu} onChange={handleSelect}>
            <option value=""> ---선택하세요</option>
            {gunm}
          </select>
        </div>
      </div>
    </div>
  )
}
