// TODO: Todo List Exercise-1st

import { useState } from "react";

function TodoApp() {
  const [todos, setTodos] = useState([]); //* [] 비어있는 배열로 시작하겠습니다.
  const [input, setInput] = useState(""); //* input은 입력창에 적는 글자이므로 빈 문자열 ''

  // 할일 추가하기
  const addTodo = () => {
    if (input.trim() === "") {
      // 공백이 없는데도 반드시 아무것도 없으면
      alert("할일을 입력해주세요!"); // 알림 창
      return;
    }
    // 번호가 있고, 내용이 있고, 아직 안끝난 할일 1개 있다. 라는 말의 아래 내용
    const newTodo = {
      id: Date.now(), // 할 일의 고유번호, 항상 다르기 때문에 겹치지 않는 번호가 됨
      text: input, // 입력창에 적은 할 일 내용, 사용자가 입력한 글자
      done: false, // 완료 여부 false: 아직 안끝남 , ture:  완료시
    };

    setTodos([...todos, newTodo]); // 기존 배열에 새 할일 추가
    setInput(""); // 입력창 비우기
  };

  // 완료 토글
  const toggleTodo = (Id) => {
    setTodos(
      todos.map((todo) => todo.Id ? {...todo, done: !todo.done} : todo) //! 화살표 함수에서 매개변수가 1개일 때 괄호 () 를 생략할 수 있다.
    );                                                                  //! todo 는 todos 배열 안에 들어있는 “한 개의 할 일 객체” 하나를 가리킨다.
  };

  return (
    <div>
      <p>{todos}</p>
      <button
        onClick={() => {
          setTodos(todos);
        }}
      ></button>
    </div>
  );
}
