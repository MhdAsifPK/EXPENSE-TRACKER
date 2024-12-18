import React, { useState } from "react";

function AddExpenseButton({ setShowExpenseForm }) {
  function firstClick() {
    setShowExpenseForm(true);
  }

  return (
    <>
      <div className="flex justify-center my-9">
        <div className="w-6/12 bg-bgk flex justify-center py-5 rounded-lg">
          <button type="button" className="bg-button text-white px-7 py-3 rounded-lg" onClick={firstClick}>
            Add New expense
          </button>
        </div>
      </div>
    </>
  );
}

export default AddExpenseButton;
