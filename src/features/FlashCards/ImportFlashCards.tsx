import { useState, useEffect } from "react";
import { addFlashCard } from "./flashCardsSlice";
import { useAppDispatch } from "../../app/hooks";

const ImportFlashCards = () => {
  const dispatch = useAppDispatch();
  const [questions, setQuestions] = useState([""]);
  const [answers, setAnswers] = useState([""]);
  const [errMsg, setErrMsg] = useState("");
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (questions.length !== answers.length) {
      setErrMsg("Questions and answers must be the same length");
      return;
    }
    questions.forEach((question, index) => {
      dispatch(addFlashCard({ question, answer: answers[index] }));
    });
  };

  useEffect(() => {
    setErrMsg("");
  }, [questions, answers]);

  return (
    <section className="bg-slate-900 mt-20 p-4 rounded-3xl">
      <h2>{errMsg}</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          className="text-black mx-4 mb-2 w-1/2"
          name="questions"
          id="questions"
          onChange={(event) => setQuestions(event.target.value.split("\n"))}
          cols={30}
          rows={10}
        ></textarea>
        <textarea
          className="text-black mx-4 mb-2 w-1/2"
          name="answers"
          id="answers"
          onChange={(event) => setAnswers(event.target.value.split("\n"))}
          cols={30}
          rows={10}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      ImportFlashCards
    </section>
  );
};

export default ImportFlashCards;
