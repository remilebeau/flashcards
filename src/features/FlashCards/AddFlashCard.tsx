import { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { addFlashCard } from "./flashCardsSlice";

const AddFlashCard = () => {
  const dispatch = useAppDispatch();
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addFlashCard({ question, answer }));
    setQuestion("");
    setAnswer("");
  };
  return (
    <section className="bg-slate-900 mt-20 p-4 rounded-3xl">
      <h2 className="text-3xl text-center mb-4">Add a Flash Card</h2>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          className="text-black mx-4 mb-2 w-1/2"
          type="text"
          placeholder="Question"
          required
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
        />
        <input
          className="text-black mx-4 mb-2 w-1/2"
          type="text"
          placeholder="Answer"
          required
          value={answer}
          onChange={(event) => setAnswer(event.target.value)}
        />
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Add
        </button>
      </form>
    </section>
  );
};

export default AddFlashCard;
