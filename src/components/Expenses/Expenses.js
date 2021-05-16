import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from './ExpensesChart';
import { useState } from "react";

import "./Expenses.css";
import ExpenseList from "./ExpenseList";

const Expenses = (props) => {
  const expenses = props.data;
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </li>
  );
};

export default Expenses;