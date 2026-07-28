// import {useState} from 'react';

export default function Accordion({question,answer,isOpen,onToggle}){
  // const[isOpen,setIsOpen]=useState(false);
   
  // function handleClick(){
  //   setIsOpen((prev)=>!prev);
  
    return(
        <>
         <h4>{isOpen ? "▼" : "▶"} {question}</h4>
         <button onClick={onToggle}>{isOpen ? 'Hide' : 'Show'}</button>
          {isOpen && <p>{answer}</p>}

        </>
    )
}