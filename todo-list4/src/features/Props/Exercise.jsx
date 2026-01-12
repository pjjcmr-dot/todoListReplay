// ✋ Props를 사용해보세요!

// TODO 1: TodoItem 컴포넌트에서 props 받기
// TODO 2: 부모에서 자식으로 props 전달하기

import './TodoApp.css';

// TODO 1: 매개변수로 props를 받고, 구조 분해 할당으로 text를 꺼내세요
// 힌트: function TodoItem({ text })
function TodoItem({ text }) {
  return <li className="todo-item">{text}</li>;
}

function App() {
  const todos = [
    '리액트 기초 배우기',
    'Props 이해하기',
    'To-Do List 만들어보기',
  ];

  return (
    <div className="app-container">
      <div className="title-container">
        <h1 className="title">오늘의 할 일</h1>
        <p className="today">{new Date().toLocaleDateString()}</p>
      </div>

      <section className="input-section">
        <input type="text" placeholder="새로운 할 일을 입력하세요" />
        <button>추가</button>
      </section>

      <section className="list-section">
        <ul className="todo-list">
          {todos.map((todoText, index) => (
            <TodoItem key={index} text={todoText} />
          ))}
        </ul>
      </section>

      {/* <section className='list-section'>
        <ul className='todo-list'>
          {todos.map((todoText, index) => (
            <TodoItem key={index} text={todoText}/>
          ))}
        </ul>
      </section> */}
    </div>
  );
}

export default App;
