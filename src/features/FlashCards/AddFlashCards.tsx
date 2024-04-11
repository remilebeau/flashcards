import { useState } from "react";
import { addFlashCard } from "./flashCardsSlice";
import { useAppDispatch } from "../../app/hooks";

const AddFlashCards = () => {
  const dispatch = useAppDispatch();
  const [questions, setQuestions] = useState([""]);
  const [answers, setAnswers] = useState([""]);
  const [errMsg, setErrMsg] = useState("");
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (questions.length < 2) {
      setErrMsg("You must enter at least one question.");
      return;
    }
    if (questions.length !== answers.length) {
      setErrMsg(
        "Each question must have an answer. There may be extra blank lines in the questions or answers fields."
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

  return (
    <section className="bg-slate-900 mt-20 p-4 rounded-3xl">
      <h1>Import FlashCards</h1>
      <h2>{errMsg}</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          className="text-black mx-4 mb-2 w-1/2"
          name="questions"
          id="questions"
          onChange={(event) => setQuestions(event.target.value.split("\n"))}
          cols={30}
          rows={10}
          placeholder="Enter your questions here, one per line."
        ></textarea>
        <textarea
          className="text-black mx-4 mb-2 w-1/2"
          name="answers"
          id="answers"
          onChange={(event) => setAnswers(event.target.value.split("\n"))}
          cols={30}
          rows={10}
          placeholder="Enter your answers here, one per line."
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default AddFlashCards;
