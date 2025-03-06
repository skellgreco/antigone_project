"use client";

// Imports
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react';


// Main Function
export default function QuestionsClientComponent({ data }) {
  // States
  const [highscore, setHighScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    if (seconds > 0) {
      const timer = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);

      // Cleanup interval on component unmount or when timer ends
      return () => clearInterval(timer);
    } else {
      if (highscore != 10) {
        console.log("You Lost");
      } else {
        console.log("You won");
      }
    }
  }, [seconds]); // Re-run effect when `seconds` changes

  // Question Initializations
  let question = data[currentQuestion].question;
  let answers = data[currentQuestion].answers;
  let right_answer = data[currentQuestion].correct_answer;

  // Handler for when the user answers a question
  function handleClick(answer) {
    setCurrentQuestion(Math.floor(Math.random() * 18));
    console.log(currentQuestion);

    // Event for correct answer
    if (answer == right_answer) {
      console.log("right answer");
      setHighScore(highscore + 1);
      setSeconds(10);

      // Event for wrong answer
    } else {
      console.log("wrong answer");
      setHighScore(highscore - 1);
    }
  }

  // HTML Output
  return (
    <>
      <Card className="mx-15 mt-20">
        <CardHeader>
          <CardTitle className="text-center text-xl">{question}</CardTitle>
          <CardDescription className="text-center">
            Διάλεξε την σωστή απάντηση
          </CardDescription>
        </CardHeader>
        <CardContent className="justify-items-center mt-5">
          {answers.map((answer) => (

            <Button className="block mb-2 sm:w-xl alegreya text-lg h-13" variant="outline" key={answer} onClick={() => handleClick(answer)}><ArrowRight className="inline-block mr-2 -translate-y-0.5"/>{answer}</Button>  

          ))}
        </CardContent>
        <CardFooter className="grid grid-cols-4">
          <div className="col-start-1 place-self-end alegreya">
            Πόντοι: {highscore}
          </div>
          <div className="col-start-4 place-self-start alegreya">
            Απομένουν: {seconds}s
          </div>
        </CardFooter>
      </Card>
 
    </>
  );
}
