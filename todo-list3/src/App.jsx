// src/App.js
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <h1>메인 컨텐츠</h1>
      </main>
      <Footer />
    </div>
  );
}

export default App;
