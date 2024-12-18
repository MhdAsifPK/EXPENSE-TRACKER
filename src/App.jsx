import { useState } from "react";
import "./App.css";
import AddExpenseButton from "./COMPONENTS/AddExpenseButton";
import ExpenseList from "./COMPONENTS/ExpenseList";
import ExpenseForm from "./COMPONENTS/ExpenseForm";

function App() {
  const [showExpenseForm, setShowExpenseForm] = useState(false);
  const [expenses, setExpenses] = useState([]);

  return (
    <>
      {!showExpenseForm && <AddExpenseButton setShowExpenseForm={setShowExpenseForm} />}

      {showExpenseForm && <ExpenseForm setExpenses={setExpenses} setShowExpenseForm={setShowExpenseForm} />}

      {!showExpenseForm && ///////
        expenses.map((item, index) => {
          return (
            <>
              <ExpenseList key={item.id} titles={item.inputTitle} amounts={item.inputAmount} dates={item.formattedDate} />;
            </>
          );
        })}
    </>
  );
}

export default App;
