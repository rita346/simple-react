function Color({color,handleColor,addColor,invalidColor}){
    return(
        <div>
            <input value={color} onChange={handleColor} placeholder='Pick a color'/>
            <button onClick={addColor} >Add color</button>
            {invalidColor && <div style={{ color: 'red' }}>{invalidColor}</div>}
        </div>
    )
}

export default Color