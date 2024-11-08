import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Main from "./components/Main";

function App() {
  const [showModal,setShowModal]=useState(false)
  function handleToggleModal(){
    setShowModal(!showModal)
  }
  return (
    <div className="App">
      <Main handleToggleModal={{handleToggleModal}}/>
    </div>
  );
}

export default App;
