const NameList=({name})=>{
    return(
        <div>
            {name.map((item,index)=>{
                return(
                    <div key={index}>
                        <li>{name}</li>
                    </div>
                )
            })}
        </div>
    )
}

export default NameList