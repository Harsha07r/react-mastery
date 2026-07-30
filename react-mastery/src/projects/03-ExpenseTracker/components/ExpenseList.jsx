
import ExpenseItem from './ExpenseItem';

export default function ExpenseList({expenses, onDeleteExpense}){
      if (expenses.length === 0) {
    return <p>No expenses added yet.</p>;
  }

    return(
        <>
         <ExpenseItem
    key={expenses.id}
    expense={expenses}
    onDelete={onDeleteExpense}
            />
        
        </>
    )
}