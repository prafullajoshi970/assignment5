const Second=(props) =>{
    return(
       <div className="card">
        <div className="upper">
        <div>{props.image}</div>
        <div> 
            <div><h1 style={{color:"yellow"}}>Movie Name:{props.name}</h1></div>
            <div><h4 style={{color:"skyblue"}}>Year:{props.year}</h4>
            <button style={{color:"red"}}>{props.time}</button>
         </div>
        </div>
       
        </div>
        
        <div><p style={{color:"grey",margin:10, padding:10}}>More:{props.para}</p></div>
        </div>
        
    )
}
export default Second