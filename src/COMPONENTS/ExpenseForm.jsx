import React, { useRef, useState } from "react";
import { toast } from "react-toastify";

function ExpenseForm({ setExpenses, setShowExpenseForm }) {
  // I/O VALUES STORE
  const title = useRef();
  const amount = useRef();
  const date = useRef();

  // ------------------DATE CONVERT FUNCTION-------------//
  const formatDate = (inputDate) => {
    const [monthDay, year] = new Date(inputDate).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }).split(", ");
    const [month, day] = monthDay.split(" ");
    return `${month} <br /> ${year} <br /> ${day}`;
  };

  // -------------ADD BUTTON------------------//
  function addExpenceHandler(e) {
    e.preventDefault();
    const inputTitle = title.current.value;
    const inputAmount = amount.current.value;
    const inputDate = date.current.value;

    if (inputTitle == "" || inputAmount == "" || inputDate == "") {
      toast.warning("You Miss Somthing");
    } else {
      const formattedDate = formatDate(inputDate);
      const newExpense = {
        id: Date.now(),
        inputTitle: inputTitle,
        inputAmount: inputAmount,
        formattedDate: formattedDate,
      };
      setExpenses((prev) => [...prev, newExpense]);
      title.current.value = "";
      amount.current.value = "";
      date.current.value = "";
      setShowExpenseForm(false);
    }
  }

  // -------------CANCELBUTTON-------------------//

  function cancelButtonHandler() {
    setShowExpenseForm(false);
  }

  return (
    <>
      <div>
        <div className="flex justify-center mt-9 mb-9">
          <div className="w-[50%] bg-bgk rounded-lg">
            <div className="py-5 flex">
              <div>
                <label className="flex ml-5 mb-2 font-bold">Title</label>
                <input type="text" required className="rounded-md px-6 py-2 ml-5" ref={title} />
              </div>
              <div>
                <label className="flex ml-5 mb-2 font-bold">Amount</label>
                <input type="number" required className="rounded-md px-6 py-2 ml-5" ref={amount} />
              </div>
            </div>
            <div>
              <label className="flex ml-5 mb-2 font-bold">Date</label>
              <input type="date" placeholder="MM/DD/YYYY" required className="rounded-md w-56 px-2 py-2 ml-5 mb-6" ref={date} />
            </div>
            <div className="flex justify-end mr-6 mb-5">
              <button type="button" onClick={cancelButtonHandler} className="bg-button text-white px-7 py-3 rounded-lg">
                Cancel
              </button>
              <button type="button" onClick={addExpenceHandler} className="bg-button text-white px-7 py-3 rounded-lg ml-5">
                Add Expense
              </button>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default ExpenseForm;
