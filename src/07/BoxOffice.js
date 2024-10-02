import { useEffect, useState } from "react"
import BoxOfficeTr from "./BoxOfficeTr";


export default function BoxOffice() {
  const [tdata, setTdata] = useState();
  const [cnt, setCnt] = useState(0);
  const [trs, setTrs]= useState([]);
  const [info, setInfo] = useState()
  const handleTrClick= (item)=> {
    console.log(item)
    let tm = `[${item.movieCd}] ${item.movieNm} : 누적 관객수 ${parseInt(item.audiAcc).toLocaleString()} 입니다.`;

    setInfo(tm);


  }
  

  const getFetchData = () => {
    const apikey = process.env.REACT_APP_MV_KEY;
    const dt = '20240929';



    let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`
    url = `${url}key=${apikey}&targetDt=${dt}`;
    console.log(url)

    // 데이터 가져오기
    fetch(url)
      .then(resp => resp.json())
      .then(data => setTdata(data.boxOfficeResult.dailyBoxOfficeList))
      .catch(err => console.log(err))
      ;
    console.log('apikey=', apikey)
  }
  

  useEffect(() => {
    if (!tdata) return;
    console.log('tdata',tdata)
    let tm = tdata.map(item => <BoxOfficeTr
      handleClick = {()=> handleTrClick(item)} 
      mv={item}                          
      key={item.movieCd}/>)
    setTrs(tm) ;
  }, [tdata]);

  //[] 디펜더시 array가 있는가, 안에 변수가 있는가, 아예 없는가 에 따라 다르게 실행됨
  useEffect(() => {
    getFetchData();
  }, [])
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xl text-gray-700 uppercase bg-gray-100 font-bold ">
              <tr>
                <th scope="col" className="px-6 py-3 rounded-s-lg">
                  순위
                </th>
                <th scope="col" className="px-6 py-3">
                영화명
                </th>
                <th scope="col" className="px-6 py-3 rounded-e-lg">
                 관객수
                </th>
                <th scope="col" className="px-6 py-3 rounded-e-lg">
                 누적 매출액
                </th>
              </tr>
            </thead>
            <tbody>
             {trs}
            </tbody>
            <tfoot >
              <tr className=" bg-black text-white w-full text-center h-10 p-2">
                <td colSpan={5}>
                {info}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
   
  )
}
