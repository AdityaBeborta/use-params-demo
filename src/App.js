import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from './components/About'
import Home from './components/Home'
import User from './components/User'
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/about" Component={About}/>
        <Route path="/home" Component={Home}/>
        <Route path="/user/:name" Component={User}/>
      </Routes>
    </>
  );
}

export default App;
