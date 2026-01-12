
// src/components/Header.js
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>내 웹사이트</h1>
      <nav>
        <a href="/">홈</a>
        <a href="/about">소개</a>
      </nav>
    </header>
  );
}

export default Header;