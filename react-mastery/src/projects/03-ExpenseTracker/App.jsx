import {useState} from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

export default function App(){
 const [expenses,setExpenses]=useState([]);

   function addExpense(newExpense){
setExpenses((prevExpenses) => [
    ...prevExpenses,
    {
        ...newExpense,
        id: Date.now(),
    },
]);
   }


function handleDeleteExpense(id){
      setExpenses((prevExpenses)=>
    prevExpenses.filter((expense)=>expense.id!==id)
    );
   }
 
   const totalExpenses = expenses.reduce(
  (sum, expense) => sum + Number(expense.amount),
  0
);

const totalTransactions = expenses.length;
    return (
    
        <>
<ExpenseForm onAddExpense={addExpense} />   
<div
  style={{
    border: "1px solid gray",
    padding: "15px",
    margin: "20px 0",
    borderRadius: "8px",
  }}
>
  <h2>Expense Summary</h2>

  <p>
    <strong>Total Transactions:</strong> {totalTransactions}
  </p>

  <p>
    <strong>Total Expenses:</strong> ₹{totalExpenses}
  </p>
</div>

<ExpenseList expenses={expenses} onDeleteExpense={handleDeleteExpense} />     

        </>
    )
}