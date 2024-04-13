import React from "react";
import Navbar from "../../components/Navbar.jsx";
import Question from "../../components/Question.jsx";

const Quiz = () => {
    return (
        <>
            <Navbar />
            <br />
            <div className="container mx-auto">
                <h1 className="text-2xl font-bold mb-4">Welcome to the Quiz</h1>
                <p className="text-lg cente">Answer the following questions:</p>
                {/* Render the Question component here */}      
            </div>
            <br />
            <Question question="What is the capital of France?" option={["France","India","delhi","Chennai"]} />
        </>
    );
}

export default Quiz;