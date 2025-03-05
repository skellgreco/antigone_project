'use client'

import { useState } from "react"

export default function QuestionsClientComponent({ data }) {
    const [highscore, setHighScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(1);

    if (!data) {
        return (
            <>
            Loading...
            </>
        )
    }
    
    

  

    function handleClick(answer) {
        setCurrentQuestion(Math.floor(Math.random() * 18))
        console.log(currentQuestion)

        if (answer == right_answer) {
            console.log('right answer')
            setHighScore(highscore + 1)
        } else {
            console.log('wrong answer')
            setHighScore(highscore - 1)

        }
    }

    let question = data[currentQuestion].question
    let answers = data[currentQuestion].answers
    let right_answer = data[currentQuestion].correct_answer

    return (
        <>
        
        Current Question <br></br>{question}
        
        <br></br><br></br>
        Available Answers
        {
            answers.map((answer) => (
                <button className="block" key={answer} onClick={() => handleClick(answer)}>{answer}</button>
            ))
        }

        <br></br><br></br>
        Current Highscore<br></br>
        {highscore}
        </>
    )
}