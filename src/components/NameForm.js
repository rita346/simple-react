import NameList from "./NameList";

const NameForm = ({name, addName, inputName, handleInput}) => {
    return (
        <div>
            <input type='text' value={inputName} placeholder='Enter your name' onChange={handleInput}/>
            <button onClick={()=>addName(inputName)}>Add</button>
            <NameList  name={name}/>
        </div>
    )
}

export default NameForm