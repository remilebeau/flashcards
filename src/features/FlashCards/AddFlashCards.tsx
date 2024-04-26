import { useEffect, useState } from "react";
import { addFlashCard } from "./flashCardsSlice";
import { useAppDispatch } from "../../app/hooks";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const AddFlashCards = () => {
  const dispatch = useAppDispatch();
  const [questions, setQuestions] = useState([""]);
  const [answers, setAnswers] = useState([""]);
  const [errMsg, setErrMsg] = useState("");
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (questions[0] === "") {
      setErrMsg("You must enter at least one question.");
      return;
    }
    if (answers[0] === "") {
      setErrMsg("You must enter at least one answer.");
      return;
    }
    if (questions.length !== answers.length) {
      setErrMsg(
        "Each question must have an answer. Check the questions and answers fields for blank lines.",
      );
      return;
    }
    questions.forEach((question, index) => {
      dispatch(addFlashCard({ question, answer: answers[index] }));
    });
    setQuestions([""]);
    setAnswers([""]);
    setErrMsg("");
  };

  useEffect(() => {
    setErrMsg("");
  }, [questions, answers]);

  return (
    <Card className="bg-card items-center justify-center rounded-3xl p-4">
      <CardHeader>
        <CardTitle className="text-center text-3xl font-bold">
          Add FlashCards
        </CardTitle>
        <CardDescription className="text-lg">{errMsg}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <Textarea
            className="mb-4"
            name="questions"
            id="questions"
            value={questions.join("\n")}
            onChange={(event) => setQuestions(event.target.value.split("\n"))}
            cols={30}
            rows={5}
            placeholder="Enter your questions here, one per line."
          />

          <Textarea
            className="mb-4 text-black"
            name="answers"
            id="answers"
            value={answers.join("\n")}
            onChange={(event) => setAnswers(event.target.value.split("\n"))}
            cols={30}
            rows={5}
            placeholder="Enter your answers here, one per line."
          />
          <Button
            className="rounded-3xl text-3xl font-bold hover:opacity-90"
            variant={"outline"}
            type="submit"
          >
            <Plus />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddFlashCards;
