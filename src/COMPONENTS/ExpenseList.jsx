import React from "react";

function ExpenseList({ titles, amounts, dates }) {
  return (
    <>
      <div className="flex justify-center">
        <div className="min-w-[50%] bg-bgk1 rounded-lg py-7 w-[10vh]">
          <div className="flex bg-mainbg h-20 mx-5 rounded-md justify-between align-middle">
            <div className="flex">
              <div className="ml-4 mt-[4px] text-white bg-black px-2 rounded-lg h-[90%] border border-white text-center" dangerouslySetInnerHTML={{ __html: dates }}></div>
              <h1 className="flex items-center ml-7 text-xl font-bold text-white">{titles}</h1>
            </div>
            <div className="flex items-center">
              <input type="text" value={amounts} readOnly className="outline-none w-20 h-7 ml-4 mt-2 rounded-lg px-2 mr-3  bg-button text-white border border-white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ExpenseList;
