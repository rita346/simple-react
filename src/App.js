import {useState} from "react";
import NameForm from "./components/NameForm";


function App() {
  const [name,setName]=useState([])
  const [nameInput,setNameInput]=useState('')

  const handleInput=(e)=>{
    setNameInput(e.target.value)
  }

  const addName=(newName)=>{
    if (nameInput.trim()!==''){
      setName([...name,newName]);
      setNameInput('')
    }
  }

  return (
      <div >
        <NameForm name={name} addName={addName} inputName={nameInput} handleInput={handleInput}/>
      </div>
  );
}

export default App;
