export default function ExpenseItem({expense, onDelete}){

    return(
        <>
        
       <div>
           <h3>{expense.title}</h3>

       <button onClick={()=>onDelete(expense.id)}>
  Delete
       </button>
    </div>
        
        </>
    )
}