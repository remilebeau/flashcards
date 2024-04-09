import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { addFlashCard } from "./flashCardsSlice";

const AddFlashCard = () => {
  const dispatch = useAppDispatch();
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const id = useAppSelector((state) => state.flashcards.flashcards.length);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addFlashCard({ id, question, answer }));
    setQuestion("");
    setAnswer("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="text-black"
        type="text"
        placeholder="Question"
        required
        value={question}
        onChange={(event) => setQuestion(event.target.value)}
      />
      <input
        className="text-black"
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
  );
};

export default AddFlashCard;
