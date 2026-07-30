import {useState} from 'react';

export default function ExpenseForm({onAddExpense}){

    const[expense,setExpense]=useState({
        title:"",
        amount:"",
        category:""
    })
     
    const handleChange = (e)=>{
        setExpense({
            ...expense ,
            [e.target.name]:e.target.value
        });
    }
     
     function handleSubmit(e){
        e.preventDefault();
         
        if (!expense.title.trim() || !expense.amount || !expense.category) {
           alert("Please fill out all fields before submitting.");
            return; 
        }
        onAddExpense(expense);
        setExpense({ title: "", amount: "", category: "" });
    }

    return(
        <div>
        <form onSubmit={handleSubmit}>
     <div>
         <h2>Title</h2>
         <input  
        type="text"
        name="title"
        value={expense.title}
        onChange={handleChange}
        placeholder="e.g. Gym Membership"
         />
     </div>
      
      <div>
         <h2>Amount</h2>
         <input 
         type="number"
         name="amount"
         value={expense.amount}
         onChange={handleChange} 
         placeholder="e.g. 500"
         />
     </div>

    <div>
          <h3>Category</h3>
          <select 
           name="category"
           value={expense.category}
           onChange={handleChange}
          >
            <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Shopping">Shopping</option>
          </select>
    </div>

      <button type="submit">Add Expense</button>


        </form>
        
        </div>
    )
}