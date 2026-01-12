//? 리액트 기본 블록
function Welcome() {
  //*Welcome이란 이름으로 블록을 만들겠다.
  return <h1>안녕하세요!</h1>; //*return 화면 블록은 이걸 만들어 줄꺼야.
}

function Greeting() {
  const name = "철수"; //*변수 만들기

  return (
    <div>
      {" "}
      //* 꼭 하나로 감싸야하고, 여기에 여러개의 코드를 감싸주는 상자
      <h1>안녕, {name}!</h1> //* {}로 자바스크립트 코드 사용
      <p>오늘 날씨가 좋네요</p>
    </div>
  );
}

//? Props = 블록에 정보 전달(부모가 자식에게 용돈을 주는것과 같음)
//부모 컴토넌트
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
  //* props 받은 정보가 들어 있는 상자
  return (
    <div>
      <p>
        {props.name}는 {props.money}원을 받았어요 //*props.money 형식으로 꺼내
        씀
      </p>
    </div>
  );
}
