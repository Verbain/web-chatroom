import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body className="App-body">
        <Home />
      </body>
    </div>
  );
}

export default App;
