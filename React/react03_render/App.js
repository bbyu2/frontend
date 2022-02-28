import logo from './logo.svg';
import './App.css';

function App() {
  /*스타일 시트를 json으로 작성해 적용하기*/
  const style1 = {
    //js는 두번째 단어 첫글자 대문자, 하이픈 없애기
    backgroundColor : '#000',
    padding : '20px',
    color : '#fff',
    marginTop : '10px',
    textAlign : 'center'
  }
  const value = 1234;
  return (
    <div>
      {/*json 스타일 적용하기 : 태그에 속성 style={스타일 변수명(따온표 없음)}*/}
      <div style={style1}>json을 사용해 스일 적용하기</div>
      {/*명령어(ex 삼항연산자)의 사용 : 중괄호*/}
      <div>
        {1 + 1 == 2
          ? (<h1>맞습니다.</h1>)
          : (<h1>틀립니다...</h1>)
        }
      </div>
      <div>
        <div>참일때 실행할 문장만 있을 떄</div>
        {
          1 + 1 == 3 && (<h1>맞습니다 맞고요</h1>)
        }
      </div>
      <div>
          <div>함수를 이용한 실행</div>
          {
            (
              function(){
                if(value==1234) return(<h1>일이삼사</h1>)
                if(value!=1234) {
                  var d="";
                  for (var i = 1; i <10; i++){
                    d+=i;
                  }
                  return (<h1>{d}</h1>)
                }
              }
            )()
          }
      </div>
      <div>
        {
          (
            ()=>{
              if(value===1234) return (<p>람다식 함수 생성하여 실행됨</p>);
            }
          )
        }
      </div>
    </div>
  );
}

export default App;