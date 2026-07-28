import {useState} from 'react';
export default function MenuCard({title,img,rating,isVeg}){

const [count,setCount]=useState(0); 
function handleIncreement()
{ 
    setCount(count+1);
 } 
 function handleDecreement()
 { 
    if (count > 0) 
    { setCount(count - 1); 
    }
 }
    return (
     <div>
         <h1>Menu</h1> 
         <img src={img} alt={title}/> 
         <h2>{title}</h2> 
         <h4>{rating} Stars</h4> 
         <p>{isVeg ? "🟢 Veg" : "🔴 Non-Veg"}</p>
          <button onClick={handleIncreement}>+</button> 
          <span style={{ margin: "0 10px" }}> {count} </span> <button onClick={handleDecreement}>-</button>
    </div>
    )
}