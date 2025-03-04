import { promises as fs } from "fs";

export default async function QuestionsComponent() {
  const questionDB = await fs.readFile(process.cwd() + "/app/(db)/questions.json", "utf8");
  const data = JSON.parse(questionDB);

  return (
    <div>
      <div className="text-center text-xl">{data[0].question}</div>
    </div>
  );
}
