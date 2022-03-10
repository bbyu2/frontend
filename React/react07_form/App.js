import {useState} from 'react';
import './App.css';

function App() {
  //폼에 입력된 데이터는 hook에 자동으로 저장할 변수
  const [member, setMember] = useState({});

  //폼의 데이터가 변경되면 호출하여 hook에 정보를 저장하는 함수
  const formData = (event)=>{
    const fieldName = event.target.name;//name 정보
    const value =  event.target.value;//value

    //                        [문자열을 json의 key값으로 사용 할 때]
    setMember(data=>({...data,[fieldName]:value}))
    console.log(member);
  }
  const submitHandler = (event) =>{
    event.preventDefault();//기본실행 해제 jquery : preventDefault();
    console.log(member);
    alert(member.username);
  }
  return (
    <div>
      <h1>react에서 폼 만들기</h1>
      <form onSubmit={submitHandler}>
        <label> 이  름 : <input type='text' name='username' 
                        value={member.username||''} onChange={formData}/></label><br/>
        <label> 연락처 : <input type = 'text' name = 'tel'
                        value={member.tel||''} onChange={formData}/></label><br/>
        <label> 주  소 : <input type='text' name='addr'
                        value={member.addr||''}onChange={formData}/></label><br/>
        <input type='submit' value='등록'/>
      </form>
    </div>
  );
}

export default App;