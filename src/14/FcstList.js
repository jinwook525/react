
import { useSearchParams} from "react-router-dom"
import { useState } from "react";
export default function FcstList() {
  const [sParams]= useSearchParams();
  const gubun = sParams.get('gubun')
  const dt = sParams.get('dt')
  const x = sParams.get('x')
  const y = sParams.get('y')
  const area = sParams.get('area')
  console.log(gubun,dt,x,y,area)
  // const[tdata,setTdata]=useState();

  const apikey = process.env.REACT_APP_API_KEY
    let url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?`
    url = `${url}serviceKey=${apikey}&pageNo=1&numOfRows=1000&dataType=json&base_date=${dt}_time=0500&nx=${x}&ny=${y}` ;
    console.log(url);
  // const getFetchData = () => {
    

  //   fetch(url)
  //     .then(resp => resp.json())
  //     .then(data => setTdata(data.data))
  //     .catch(err => console.err(err));
  // }

  return (
    <div>
    일기예보 항목
    </div>
  )
}

