// ✋ State를 사용해보세요!

// TODO 1: useState를 import 하세요
// 힌트: import { useState } from 'react';
import { useState } from 'react';
import './App.css';

function Panel({ children }) {
  return <section className="panel">{children}</section>;
}

function App() {
  // TODO 2: todos state를 만드세요
  // 힌트: const [todos, setTodos] = useState(['리액트 기초 배우기', 'State 이해하기']);
  const [todos, setTodos] = useState(['리액트 기초 배우기', 'State 이해하기']);

  // TODO 3: inputText state를 만드세요
  // 힌트: const [inputText, setInputText] = useState('');
  const [inputText, setInputText] = useState('');
  // TODO 4: input 값이 바뀔 때마다 상태 업데이트하는 함수
  // 힌트: const handleInputChange = (event) => { setInputText(event.target.value); }
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };
  // TODO 5: Enter 키 처리 함수
  // 힌트: event.key === 'Enter' && !event.nativeEvent.isComposing 체크
  const handleKeyDown = (e) => {
    if (e.key !== 'Enter' || e.nativeEvent.isComposing) {
      return;
    }
    handleAddTodo();
  };

  // TODO 6: '추가' 버튼 클릭 시 todos 업데이트하는 함수
  // 힌트:
  // - inputText.trim() === '' 체크
  // - setTodos((prev) => [...prev, inputText])
  // - setInputText('')
  const handleAddTodo = () => {
    if (inputText.trim() === '') return;
    setTodos((prev) => [...prev, inputText]);
    setInputText('');
  };

  return (
    <div className="app-container">
      <h1 className="title">오늘의 할 일</h1>

      <Panel>
        <div className="input-container">
          <input
            type="text"
            className="todo-input"
            placeholder="새로운 할 일을 입력하세요"
            value={inputText}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            // TODO 7: value={inputText} 추가
            // TODO 8: onChange={handleInputChange} 추가
            // TODO 9: onKeyDown={handleKeyDown} 추가
          />
          <button
            className="add-button"
            onClick={handleAddTodo}
            // TODO 10: onClick={handleAddTodo} 추가
          >
            추가
          </button>
        </div>
      </Panel>

      <Panel>
        <ul className="todo-list">
          {todos.map((todoText, index) => (
            <li key={index} className="todo-item">
              {todoText}
            </li>
          ))}
        </ul>
      </Panel>
    </div>
  );
}

export default App;
