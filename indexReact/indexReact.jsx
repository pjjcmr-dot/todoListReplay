//todo 리액트 기본 블록
function Welcome() {
  //Welcome이란 이름으로 블록을 만들겠다.
  return <h1>안녕하세요!</h1>; //return 화면 블록은 이걸 만들어 줄꺼야.
}

function Greeting() {
  const name = "철수"; //*변수 만들기

  return (
    // 꼭 하나로 감싸야하고, 여기에 여러개의 코드를 감싸주는 상자
    //{}로 자바스크립트 코드 사용
    <div>
      <h1>안녕, {name}!</h1>
      <p>오늘 날씨가 좋네요</p>
    </div>
  );
}

//todo Props = 블록에 정보 전달(부모가 자식에게 용돈을 주는것과 같음)

//!Q => function todoApp() 이 아니라 function TodoApp() 인가요?
//!A => React 컴포넌트는 반드시 대문자로 시작해야 합니다.

//* props 가 전달되는 실제 흐름
//부모 컨포넌트 : jsx
function App() {
  return <TodoApp title="할 일 목록" />; //<TodoApp></TodoApp> 기능적으로 완전히 동일 
}

//jsx => 함수 호출로 변환

TodoApp({title="할 일 목록"});

// 자식 컴포넌트에서 props 받기

function TodoApp(props) {
  return <h1>props.tilte</h1>;
}

//구조 분해 시
function TodoApp(tilte) {
  return <h1>{title}</h1>;
}


//?부모 컴토넌트
function App() {
  return (
    <div>
      <Child name="철수" money={50000} /> //* 받은 정보
      <Child name="영희" money={30000} /> //* 받은 정보
    </div>
  );
}

//자식 컴포넌트
function Child(props) {
  //props 받은 정보가 들어 있는 상자
  //props.money 형식으로 꺼내씀;
  return (
    <div>
      <p>
        {props.name}는 {props.money}원을 받았어요.
      </p>
    </div>
  );
}

//자식 컴토넌트 => 구조분해 할당
function Child(name, money) {
  return (
    <div>
      <p>
        {name}는 {money}원을 받았어요.
      </p>
    </div>
  );
}

//todo state = 변하는 데이터
// [현재값, 값을 바꾸는 함수] = usestate(시작값)
import { usestate } from "react";

function counter() {
  const [count, setcount] = usestate(0);

  return (
    <div>
      <p>현재값: {count} </p>
      <button onClick={() => setcount(count + 1)}>증가</button>
      <button onClick={() => setcount(count - 1)}>감소</button>
    </div>
  );
}
//! -------------------------------------------------------------------
// import { useState } from 'react' = 리액트에서 useState 도구를 가져옴
// const [count, setCount] = 배열 구조분해 (두 개를 한번에 받음)
// count = 현재 숫자 (0부터 시작)
// setCount = 숫자를 바꾸는 함수
// onClick={() => setCount(count + 1)} = 버튼 클릭하면 실행
// () => = 화살표 함수 (function()과 같은 의미)
//! -------------------------------------------------------------------

//!Q => function todoApp() 이 아니라 function TodoApp() 인가요?
//!A => React 컴포넌트는 반드시 대문자로 시작해야 합니다.

//* todos.map((todo) => todo.Id ? {...todo, done: !todo.done} : todo)
//? todos.map((todo): 원재료(원본 배열) → [공장(map)] → 완성품(새 배열)
// //? todo.Id ? : 만약 이 할일이 조건에 맞으면
//? {...todo, done: !todo.done} : done 값을 반대로 바꾼 새 할 일을 만들고
//? : todo : 아니면 그대로 둔다
//*

// 사용자 목록을 화면에 표시
function UserList() {
  const users = [
    { id: 1, name: '김철수', age: 25 },
    { id: 2, name: '이영희', age: 30 },
    { id: 3, name: '박민수', age: 28 }
  ];

  return (
    <div>
      <h2>회원 목록</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age}세)
          </li>
        ))}
      </ul>
    </div>
  );
}
```

**결과 화면**:
```
회원 목록
- 김철수 (25세)
- 이영희 (30세)
- 박민수 (28세)




