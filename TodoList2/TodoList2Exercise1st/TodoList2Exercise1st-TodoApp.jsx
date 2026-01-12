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
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => (todo.id ? { ...todo, done: !todo.done } : todo)) //! 화살표 함수에서 매개변수가 1개일 때 괄호 () 를 생략할 수 있다.
    ); //! todo 는 todos 배열 안에 들어있는 “한 개의 할 일 객체” 하나를 가리킨다.
  };

  // 삭제하기
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>할일 목록</h1>

      {/*입력 영역*/}
      <div>
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)} // 내가 지금 입력창에 친 글자, 글자 하나 칠 때마다 → setInput 실행
          /* <input />  ← 이게 e.target
                  ↓
              [안녕하세요]  ← 여기 쓴 글자가 e.target.value */
          onKeyDown={(event) => event.key === "Enter" && addTodo()} // Enter 키 누르면 → addTodo 실행
          placeholder="할일을 입력하세요" // 입력 전 → "할 일을 입력하세요" 표시 // 입력 시작 → 자동으로 사라짐
          style={{ padding: "10px", width: "300px" }}
        />
        <button
          onClick={addTodo}
          style={{ padding: "10px", marginLeft: "5px" }}
        >
          추가
        </button>
      </div>

      {/*todo:할일 목록*/}
      <ul style={{ listStyle: "none", padding: "0" }}>
        {todo.map((todo) => (
          <li
            key={todo.id}
            style={{ margin: "10px 0", padding: "10px", background: "#f5f5f5" }}
          >
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => toggleTodo(todo.id)}
            />
            <span
              style={{
                marginLeft: "10px",
                textDecoration: todo.done ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              style={{ marginLeft: "10px", padding: "5px 10px" }}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>

      {/* 통계 */}
      <p>
        전체: {todos.length}개 | 완료: {todos.filter((t) => t.done).length}개
      </p>
    </div>
  );
}

export default TodoApp;
