import TailCard from "../UI/TailCard" ;
import TailButton from "../UI/TailButton";
import { useEffect, useRef, useState } from "react";

export default function Gallery() {
  const[tdata, setTdata] = useState([]);
  const [tags, setTags] = useState([])
  const x = useRef() ;
  

  const handleCancel = () => {
    x.current.value = '' ;
    x.current.focus();
    setTags([]);
  }
  const getFetchData= async ()=> {
    const apikey = process.env.REACT_APP_API_KEY
    const keyword = encodeURI(x.current.value)

    let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?`
     url=`${url}serviceKey=${apikey}&numOfRows=20&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A`
     url= `${url}&keyword=${keyword}&_type=json`
    console.log(url)

    // fetch(url)
    //   .then(resp => resp.json())
    //   .then(data => console.log(data))
    //   .catch(err => console.error(err))
    const resp = await fetch(url)
    const data = await resp.json()
    console.log(data.response.body.items.item)
    setTdata(data.response.body.items.item)
  }

  const handleOK = () => {
    if (x.current.value == '' ){
    alert("값을 입력해주세요")
    x.current.focus()
    return
    }
    getFetchData()
  }
  useEffect(()=>{
    x.current.focus() ;
  },[]);

  useEffect(()=> { 
    if(!tdata) return;
    console.log("tdata=", tdata)
    const tm = tdata.map(item => <TailCard 
                                  key ={item.galContentId}
                                  imgUrl = {item.galWebImageUrl} 
                                  title =  {item.galTitle}
                                  content = {item.galPhotographyLocation}
                                  kw = {item.galSearchKeyword}/>

        )
    setTags(tm)
  }, [tdata])

  return (
    <div className="w-full flex flex-col justify-center">
      <div className="w-10/12 p-5">
        <h1 className="w-full flex justify-center text-3xl mb-5">
          한국관광공사 사진 정보
        </h1>
        <div className="w-full p-5 bg-blue-50 
                        grid grid-cols-1 lg:grid-cols-2 gap-2">
          <div className="flex justify-center  lg:justify-end items-center">
          <input type='text' className="w-10/12 form-input"
                 ref = {x}
                 id='kw' name='kw' />
          </div>
          <div className="flex justify-center lg:justify-start items-center">
          <TailButton caption = '확인'
                      color = 'blue'
                      handleClick = {handleOK}
                      size = 'w-1/2'/>
          <TailButton caption = '취소'
                      color = 'blue'
                      handleClick = {handleCancel}
                      size = 'w-1/2' />
          </div>
        </div>  
      </div>
      <div className="w-10/12 p-5 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {tags}
      </div>
     
      {/* <TailCard imgUrl = "http://tong.visitkorea.or.kr/cms2/website/52/2586952.jpg"
                title = "서울빛초롱축제"
                content = "서울특별시 종로구"
                kw = "서울빛초롱축제, 서울특별시 종로구, 2018 하반기 기획사진, 청계천 야경, 서울 등 축제, 서울 축제"/> */}
    </div>
  )
}