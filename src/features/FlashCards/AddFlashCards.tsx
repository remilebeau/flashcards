import { useEffect, useState } from "react";
import { addFlashCard, selectFlashCards } from "./flashCardsSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const AddFlashCards = () => {
  const { flashcards: allFlashCards } = useAppSelector(selectFlashCards);
  const cardCount = allFlashCards.length;
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
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center text-3xl font-bold">
          Add FlashCards
        </CardTitle>
        <CardDescription className="text-center text-lg">
          <p>{`Card Count: ${cardCount}`}</p>
          <p>{errMsg}</p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          {/* textarea for questions */}
          <Textarea
            name="questions"
            id="questions"
            value={questions.join("\n")}
            onChange={(event) => setQuestions(event.target.value.split("\n"))}
            cols={30}
            rows={5}
            placeholder="Enter your questions here, one per line."
          />

          {/* textarea for answers */}
          <Textarea
            name="answers"
            id="answers"
            value={answers.join("\n")}
            onChange={(event) => setAnswers(event.target.value.split("\n"))}
            cols={30}
            rows={5}
            placeholder="Enter your answers here, one per line."
          />

          {/* button to add cards */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button>
                  <Plus />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Add Cards</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddFlashCards;
