import {useState} from "react";
import NameForm from "./components/NameForm";
import RedBackground from "./components/RedBackground";
import YellowBackground from "./components/YellowBackground";
import Color from "./components/Color";


function App() {
    const [name, setName] = useState([])
    const [nameInput, setNameInput] = useState('')
    const [red, setRed] = useState(false)
    const [yellow, setYellow] = useState(false)
    const [color, setColor] = useState('') // pick a color
    const [reColor, setReColor] = useState(false) //clicked and reclicked the button
    const [invalidColor, setInvalidColor] = useState('')


    const handleInput = (e) => {
        setNameInput(e.target.value)
    }

    const addName = (newName) => {
        if (nameInput.trim() !== '') {
            setName([...name, newName]);
            setNameInput('')
        }
    }

    const redColor = () => {
        setRed(!red)
    }

    // Determine the background color based on the state
    const colorToRed = red ? 'red' : 'white';

    // //apply color to the whole background body
    // document.body.style.backgroundColor = colorToRed;

    const yellowColor = () => {
        setYellow(!yellow)
    }

    const colorToYellow = yellow ? 'yellow' : 'white'

    const handleColor = (e) => {
        if (invalidColor) {
            setInvalidColor('');
        }
        setColor(e.target.value)
    }

    const addColor = () => {
        const trimmedColor = color.trim();

        if (!trimmedColor) {
            setInvalidColor('Please enter a color value.');
            return;
        }

        if (reColor) {
            // the color is applied so reColor is true now so put it white color
            //  document.body.style.backgroundColor = 'white'
            setReColor(false)
            setInvalidColor('')
        } else {
            const checkColor = new Option().style;
            checkColor.color = trimmedColor

            if (checkColor.color ===trimmedColor) {
                //document.body.style.backgroundColor = color
                setReColor(true)
                setInvalidColor('')
               setColor('')
            } else {
                setInvalidColor('Invalid color')
            }
        }
    }

    return (
        <div>
            <NameForm name={name} addName={addName} inputName={nameInput} handleInput={handleInput}/>
            <div style={{backgroundColor: colorToRed}}>
                <RedBackground redColor={redColor}/>
            </div>
            <div style={{backgroundColor: colorToYellow}}>
                <YellowBackground yellowColor={yellowColor}/>
            </div>
            <div style={{backgroundColor:reColor?'white':color}}>
                <Color color={color} handleColor={handleColor} addColor={addColor} invalidColor={invalidColor}/>
            </div>
        </div>
    );
}

export default App;
