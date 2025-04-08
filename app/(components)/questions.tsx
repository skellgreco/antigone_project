
import QuestionsClientComponent from "./questions-client";
import { promises as fs } from 'fs';
import { questionsDB } from "../(db)/questions";

  

export default async function QuestionsComponent() {
    // const questionsDB = await fs.readFile(process.cwd() + '/app/(db)/questions.json', 'utf8');
    const data = questionsDB




    if (!data ) {
        return (
            <>
            Loading Data...
            </>
        )
            
    }

    // console.log(`Question: ` + data[selected_question].question)
    // console.log(`Answers: ` + data[selected_question].answers)
    // console.log(`Correct Answer: ` + data[selected_question].correct_answer)

    return (
        <QuestionsClientComponent data={data}></QuestionsClientComponent>
    )
    
}