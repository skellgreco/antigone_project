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

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowRight } from "lucide-react";

// Main Function
export default function QuestionsClientComponent({ data }) {
  // States
  const [highscore, setHighScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(4);
  const [seconds, setSeconds] =
    useState(1923812778127837891278939783129783978129783978912783);
  const [playStatus, setPlayStatus] = useState("tutorial");

  useEffect(() => {
    if (seconds > 0) {
      const timer = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else {
      if (playStatus == "playing") {
        setPlayStatus("lost");
        setSeconds(812374232712823487);
      }
    }
  }, [seconds]);

  // Question Initializations
  let question = data[currentQuestion].question;
  let answers = data[currentQuestion].answers;
  let right_answer = data[currentQuestion].correct_answer;

  // Handler for when the user answers a question
  function handleClick(answer) {
    // Event for correct answer
    if (answer == right_answer) {
      if (highscore < 10) {
        setHighScore(highscore + 1);
        setSeconds(process.env.NEXT_PUBLIC_MAX_SECONDS);
        setCurrentQuestion(Math.floor(Math.random() * 18));
      } else {
        setPlayStatus("won");
        setSeconds(2931827473219874);
      }

      // Event for wrong answer
    } else {
      setPlayStatus("lost");
      setSeconds(812374232712823487);
    }
  }

  function startPlaying() {
    setHighScore(0);
    setPlayStatus("playing");
    setSeconds(process.env.NEXT_PUBLIC_MAX_SECONDS);
    setCurrentQuestion(3);
  }

  // HTML Output for status "playing"
  if (playStatus == "playing") {
    return (
      <>
        <Card className="mx-5 sm:mx-15 mt-20">
          <CardHeader>
            <CardTitle className="text-center text-xl">{question}</CardTitle>
            <CardDescription className="text-center">
              Διάλεξε την σωστή απάντηση
              <Progress
                value={highscore * 10}
                className="w-[40%] mt-5 place-self-center"
              />
            </CardDescription>
          </CardHeader>
          <CardContent className="justify-items-center mt-5">
            {answers.map((answer) => (
              <Button
                className="block mb-2 sm:w-xl alegreya text-lg h-13"
                variant="outline"
                key={answer}
                onClick={() => handleClick(answer)}
              >
                <ArrowRight className="inline-block mr-2 -translate-y-0.5" />
                {answer}
              </Button>
            ))}
          </CardContent>
          <CardContent className="grid grid-cols-4">
            <div className="col-start-1 place-self-end alegreya">
              Πόντοι: {highscore}
            </div>
            <div className="col-start-4 place-self-start alegreya">
              Απομένουν: {seconds}s
            </div>
          </CardContent>
        </Card>
      </>
    );
  } else if (playStatus == "lost") {
    return (
      <>
        <Card className="mx-5 sm:mx-15 mt-20 text-center">
          <CardContent className="justify-items-center mt-5 text-3xl font-bold text-red-500">
            Έχασες...
          </CardContent>
          <CardContent className="mt-7">
            Ο Κρέοντας σκότωσε την Αντιγόνη...<br></br> Δεν κατάφερες να την
            σώσεις...
          </CardContent>
          <CardContent>
            <Button variant="destructive" onClick={() => startPlaying()}>
              Πάιξε Ξανά
            </Button>
            <a href="/">
              <Button variant="outline" className="mt-3 sm:mt-0 sm:ml-5">
                Πήγαινε στην αρχική σελίδα
              </Button>
            </a>
          </CardContent>
        </Card>
      </>
    );
  } else if (playStatus == "tutorial") {
    return (
      <>
        <Card className="mx-5 sm:mx-15 mt-20 text-center">
          <CardContent className="justify-items-center mt-5 text-3xl font-bold">
            O Κρέοντας θέλει να σκοτώσει την Αντιγόνη!
          </CardContent>
          <CardContent className="mt-7">
            Απάντησε σωστά 10 από τις επόμενες ερωτήσεις ώστε να βοηθήσεις την
            Αντιγόνη να ξεφύγει!<br></br>
            Έχεις 20 δευτερόλεπτα να απαντήσεις την κάθε ερώτηση!
          </CardContent>
          <CardContent>
            <Button variant="destructive" onClick={() => startPlaying()}>
              Ξεκίνα
            </Button>
          </CardContent>
        </Card>
      </>
    );
  } else if (playStatus == "won") {
    return (
      <>
        <Card className="mx-15 mt-20 text-center">
          <CardContent className="justify-items-center mt-5 text-3xl font-bold text-green-500">
            Νίκησες!
          </CardContent>
          <CardContent className="mt-7">
            Η Αντιγόνη τα κατάφερε να ξεφύγει!<br></br> Την έσωσες με επιτυχία!
          </CardContent>
          <CardContent>
            <Button variant="destructive" onClick={() => startPlaying()}>
              Πάιξε Ξανά
            </Button>
            <a href="/">
              <Button variant="outline" className="mt-3 sm:mt-0 sm:ml-5">
                Πήγαινε στην αρχική σελίδα
              </Button>
            </a>
          </CardContent>
        </Card>
      </>
    );
  }
}
