import ExpenseForm from "./ExpenseForm";
import { useState } from 'react';
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isAddingExpense, setIsAddingExpense] = useState(false);

  const startAddingHandler= () => setIsAddingExpense(true);

  const stopAddingHandler = () => setIsAddingExpense(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsAddingExpense(false);
  };

  return (
    <div className="new-expense">
     {!isAddingExpense && <button onClick={startAddingHandler}>Add new Expense</button>}
     {isAddingExpense &&  <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopAddingHandler}/>}
    </div>
  );
};

export default NewExpense;
