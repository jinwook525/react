function Hello(){
  let today = new Date();
  today = today.toLocaleString();

  let name= 'PNU'
  return(
    // jsx는 반드시 하나의 태그만 return , 또는 fragment tag <></> 를 사용해서 묶을 수 있음
    // class 속성은 반드시 className으로 사용 - 소스코드에서는 class로 표시
    <>
    <p className="p1">
      Hello React!!
    </p>
    <p className="text-4xl text-orange-400">
      {name === 'PNU' ? '부산대학교 정진욱' : '정진욱'}
      </p>
    <p style={{backgroundColor:"gray", color:'white'}}>
      {/* {new Date().toLocaleString()} */}
      {today}
    </p>
    </>
  );
}

export default Hello;