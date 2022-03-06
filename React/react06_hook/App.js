import React,{useState} from 'react';
//js 파일을 사용하기 위해 import
import Test from './Test'
import './App.css';
//사용자가 생성하는 파일은, 무조건 src 폴더 아래에 있어야 한다.

function App() {
  const name = '홍길동';
  //React의 useState 훅을 사용하면, 함수의 데이터 상태를 추적 할 수 있다.
  const [color, setColor] = useState("RED");//color에 입력된 값을 useState가 setColor을 통해 입력한다
  const [tel,setTel]=useState("010-1111-2222")

  const flower = ['코스모스', '꽃1', '꽃2', '꽃 암튼 꽃', '알러지페취'];
  
  function FlowerList(props){
    return<li>내가 좋아하는 꽃은 {props.flowerName}</li>
  }

  return (
    <div>
      <h1>Color : {color} | Tel : {tel}</h1>
      <button onClick={()=> setColor("Green")}>색상 변경(Green)</button>
      <button onClick={()=> setTel("010-3333-0666")}>연락처 변경</button>
      <hr/>

      {/*다른 스크립트 리턴 받는법
      1. import 하기
      2. 다른 스크립트의 구문을 하나의 태그로 묶기
      3. 소환하기*/}
      {<Test/>}
      <h1>배열을 반복문 처리</h1>
      <ol>
        {/*map() 함수를 이용하여 배열의 반복 처리*/}
        {/*배열명.nap()*/}
        {flower.map((f)=><FlowerList flowerName={f}/>)}
      </ol>
    </div>
  );
}

export default App;