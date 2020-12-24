import React, { useState } from 'react';

const App = () =>{
    const[name,nameSet] = useState("");
    const [FullName,setFullName] = useState();


    const inputEvent = (event) =>{
        nameSet(event.target.value);
    }
    const onSubmit = () =>{
        setFullName(name);
    }
    return (
       <>
         <div>
             <h1>Hello {FullName}</h1>
             <input type="text" placeholder="Enter Your Name"
             onChange={inputEvent} value ={name}></input>
             <button onClick={onSubmit}> Click Me 😃</button>
         </div>

       </>
    );
}

export default App;