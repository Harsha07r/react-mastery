import Accordion from "./components/Accordion.jsx";
import {useState} from 'react';

const questions = [
  {
    id: 1,
    question: "What is React?",
    answer:
      "React is a JavaScript library for building fast and interactive user interfaces.",
  },
  {
    id: 2,
    question: "What is JSX?",
    answer:
      "JSX is a syntax extension that allows us to write HTML-like code inside JavaScript.",
  },
  {
    id: 3,
    question: "What are Props?",
    answer:
      "Props are read-only inputs used to pass data from parent components to child components.",
  },
];

export default function App(){
  const[openId,setOpenId]=useState(null);

 function handleToggle(id) {
    setOpenId((currentId) =>
        currentId === id ? null : id
    );
}

    return(
        <>
        <h1>React FAQ</h1>
        {questions.map((item)=>(
            <Accordion 
            key={item.id}
            isOpen={openId === item.id}
            onToggle={()=>handleToggle(item.id)}
            question={item.question}
            answer={item.answer}
            />
        ))}
        </>
    );
}