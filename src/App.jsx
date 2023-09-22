import logo from './logo.svg';
import './App.css';
// Install npm i react-router-dom
/* 
- Link: navigate to another route WITHOUt refreshing the pages and loose all states
  - css by calling the simple tag a, like .nav > a{}
*/
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./components/Home"
import About from './components/About';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route path=/ is the homepage */}
        <Route path="/" element={<Home />} />
        {/* The about page */}
        <Route path="/about" element={<About />}/>
      </Routes>
    </BrowserRouter>
  );
}

