import React from "react";

const Question = (props) => {
  return (
    <div className="border-2 mx-auto md:mx-10 px-5 py-5 rounded-lg bg-yellow-100 flex-col shadow-[0_3px_10px_rgb(0,0,0,0.2)]">

      {/* this is the question component */}
      <div className="relative bg-slate-100 px-3 pt-3 pb-2 shadow-lg ring-1 ring-gray-900/5 rounded-md">
        <h2 className="text-xl font-bold mb-4">{props.question}</h2>
      </div>

      {/* this is the option component */}
      <div className="flex-col mx-3 my-2 px-2 py-3">
        {/* yaha pe for loop se no of options bhi decide kr skte hai */}
        {props.option.map((option, index) => {
          return (
            <div key={index} className="option bg-purple-200 px-2 py-1 my-2 mx-2 rounded-xl shadow-[0_3px_3px_rgb(0,0,0,0.2)]">
              {option}
            </div>
          );
        })}
        <div className="option bg-yellow-300 px-2 py-1 my-2 mx-2 rounded-xl shadow-[0_3px_3px_rgb(0,0,0,0.2)]">Option 1</div>
        <div className="option bg-yellow-300 px-2 py-1 my-2 mx-2 rounded-xl shadow-[0_3px_3px_rgb(0,0,0,0.2)]"> Option 2 </div>
        <div className="option bg-yellow-300 px-2 py-1 my-2 mx-2 rounded-xl shadow-[0_3px_3px_rgb(0,0,0,0.2)]">Option 3 </div>
        <div className="option bg-yellow-300 px-2 py-1 my-2 mx-2 rounded-xl shadow-[0_3px_3px_rgb(0,0,0,0.2)] ">Option 4</div>
      </div>
    </div>
  );
};

export default Question;
