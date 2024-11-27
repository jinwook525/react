import TailButton from "../UI/TailButton";
import { useState, useEffect, useRef } from "react";
export default function Rest() {

  const txt1Ref = useRef();
  const txt2Ref = useRef();
  const url = 'http://localhost:3005/posts';
  const [tdata, setTdata] = useState([]);
  const [trs, setTrs] = useState([]);
  const [isUpdate, setIsUpdate]= useState(false);//입력, 수정 확인용
  const [updateId, setUpdateId] = useState() //수정할 데이터 아이디
  //입력 처리를 위한 사용자 함수
  const handlePost = async () => {
    // 입력 확인
    if (txt1Ref.current.value === "") {
      alert("제목을 입력하세요");
      txt1Ref.current.focus();
      return;
    }
    if (txt2Ref.current.value === "") {
      alert("작성자를 입력하세요");
      txt2Ref.current.focus();
      return;

    }
    //보낼 데이터 Object로 만들기
    const postData = {
      title: txt1Ref.current.value,
      author: txt2Ref.current.value
    }
    //postfetch
    const resp = await fetch(url, {
      method: 'Post',
      headers: {
        'Content-type': 'application/json',
      },

      body: JSON.stringify(postData)
    });
    const data = await resp.json();
    console.log(data);
    setTdata([data, ...tdata])
  }
  //삭제 하는 함수
  const handleDelete = async (id) => {
    const resp = await fetch(`${url}/${id}`, {
      method: 'Delete',
    });
    const data = await resp.json();
    console.log("Delete data", data)

    const tm  = tdata.filter(item => item.id !== id);
    setTdata(tm)
  }


//수정
const handleUpdate = (item) => {
  console.log()
  txt1Ref.current.value = item.title;
  txt2Ref.current.value = item.author;

  setIsUpdate(true);
  setUpdateId(item.id);
};

//수정 처리
const handlePut= async() =>{
  if (txt1Ref.current.value === "") {
    alert("제목을 입력하세요");
    txt1Ref.current.focus();
    return;
  }
  if (txt2Ref.current.value === "") {
    alert("작성자를 입력하세요");
    txt2Ref.current.focus();
    return;

  }
  //보낼 데이터 Object로 만들기
  const postData = {
    title: txt1Ref.current.value,
    author: txt2Ref.current.value
  }
  //postfetch
  const resp = await fetch(`${url}/${updateId}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },

    body: JSON.stringify(postData)
  });
  const data = await resp.json();
 const tm = tdata.map(item => item.id === updateId ? data : item);
 setTdata(tm)
 
 setIsUpdate(false) ;
 setUpdateId('') ;
 txt1Ref.current.value = '' ;
 txt2Ref.current.value = '' ;
}

//입력과 수정을 구분하는 사용자 정의함수
const handleOk = () =>{
  if(!isUpdate) handlePost();
  else handlePut();
}
const getfetchData = async () => {


  const resp = await fetch(url);
  const data = await resp.json();

  setTdata(data);
}
useEffect(() => {
  getfetchData()
}, [])

useEffect(() => {
  const tm = tdata.map(item => <tr key={item.id}>
    <td>{item.title}</td>
    <td>{item.author}</td>
    <td> <TailButton caption="삭제"
      color="blue"
      handleClick={() => handleDelete(item.id)}
      size='w-1/2' />  </td>
    <td> <TailButton caption="수정"
      color="orange"
      handleClick={()=> handleUpdate(item)}
      size='w-1/2' />  </td>

  </tr>)
  setTrs(tm);
}, [tdata])

return (
  <div className="w-full flex flex-col justify-center items-center">
    <div className="w-11/12 grid grid-cols-1 md:grid-cols-7 
                      bg-slate-100
                      text-center my-5 p-5">
      <label htmlFor="txt1" className="my-2">제목</label>
      <div className="flex col-span-3">
        <input id="txt1"
          type="text"
          className="form-input  w-full"
          ref={txt1Ref} />
      </div>
      <label htmlFor="txt2" className="my-2">작성자</label>
      <div className="flex">
        <input id="txt2"
          type="text"
          className="form-input w-full"
          ref={txt2Ref} />
      </div>
      <TailButton caption={isUpdate ? '수정': '입력'}
        color="blue"
        handleClick={handleOk}
        size='w-1/2' />
    </div>
    <table
      className="w-11/12 text-left text-sm font-light text-surface">
      <thead
        className="border-b border-neutral-200 font-medium">
        <tr className="bg-black text-white font-bold text-center">
          <th scope="col" className="px-6 py-3 w-3/6 text-center">제목</th>
          <th scope="col" className="px-6 py-3 w-1/6 text-center">작성자</th>
          <th scope="col" className="px-6 py-3 w-1/6 text-center">삭제</th>
          <th scope="col" className="px-6 py-3 w-1/6 text-center">편집</th>
        </tr>
      </thead>
      <tbody>
        {trs}
      </tbody>
    </table>
  </div>
)
}
