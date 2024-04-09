import { useState, useEffect } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectFlashCards } from "./flashCardsSlice";
import type { FlashCard } from "./flashCardsSlice";

const FlashCard = () => {
  const flashCards = useAppSelector(selectFlashCards);
  let randomCard =
    flashCards.flashcards[
      Math.floor(Math.random() * flashCards.flashcards.length)
    ];

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [cardCount, setCardCount] = useState(0);

  const selectRandomCard = () => {
    randomCard = flashCards.flashcards[
      Math.floor(Math.random() * flashCards.flashcards.length)
    ] ?? {
      id: 1,
      question: "question",
      answer: "answer",
    };
    setQuestion(randomCard.question);
    setAnswer(randomCard.answer);
  };

  useEffect(() => {
    selectRandomCard();
    setCardCount(flashCards.flashcards.length);
  }, [flashCards.flashcards]);

  return (
    <section className="flex flex-col items-center justify-center border border-red-500">
      <section className="flex flex-col items-center justify-center">
        <h1 className="text-3xl text-white">
          {showAnswer ? answer : question}
        </h1>
        {/* button to flip card */}
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            setShowAnswer(!showAnswer);
          }}
        >
          Flip
        </button>
        {/* button to draw next card */}
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            selectRandomCard();
          }}
        >
          Draw
        </button>
        {/* show card count */}
        <h1 className="text-3xl text-white">Card Count: {cardCount}</h1>
      </section>
    </section>
  );
};

export default FlashCard;
