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
        "Each question must have an answer. Check the questions and answers fields for blank lines."
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
    <section className="bg-slate-900 mt-20 p-4 rounded-3xl">
      <h2 className="text-3xl mb-4 text-center font-bold">Add FlashCards</h2>
      <h2 className="text-2xl mb-4 text-center">{errMsg}</h2>
      <form onSubmit={handleSubmit} className="grid grid-rows-2">
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
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold rounded-3xl"
          type="submit"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default AddFlashCards;
