import { useEffect, useState } from "react";
import { addFlashCard } from "./flashCardsSlice";
import { useAppDispatch } from "../../app/hooks";

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
    <article className="flex flex-col items-center justify-center rounded-3xl bg-slate-900 p-4">
      <h2 className="mb-4 text-center text-3xl font-bold">Add FlashCards</h2>
      <h2 className="mb-4 text-center text-2xl">{errMsg}</h2>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <textarea
          className="mb-4 text-black"
          name="questions"
          id="questions"
          onChange={(event) => setQuestions(event.target.value.split("\n"))}
          cols={30}
          rows={10}
          placeholder="Enter your questions here, one per line."
        ></textarea>
        <textarea
          className="mb-4 text-black"
          name="answers"
          id="answers"
          onChange={(event) => setAnswers(event.target.value.split("\n"))}
          cols={30}
          rows={10}
          placeholder="Enter your answers here, one per line."
        ></textarea>
        <button
          className="rounded-3xl bg-red-500 font-bold text-white"
          type="submit"
        >
          Submit
        </button>
      </form>
    </article>
  );
};

export default AddFlashCards;
