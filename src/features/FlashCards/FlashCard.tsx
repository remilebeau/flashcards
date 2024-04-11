import { useState } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectFlashCards } from "./flashCardsSlice";
import type { FlashCard } from "./flashCardsSlice";

const FlashCard = () => {
  const { flashcards: allFlashCards } = useAppSelector(selectFlashCards);

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  let displayedCard: FlashCard = {
    question,
    answer,
  };

  const selectRandomCard = () => {
    displayedCard =
      allFlashCards[Math.floor(Math.random() * allFlashCards.length)];
    setQuestion(displayedCard.question);
    setAnswer(displayedCard.answer);
    setShowAnswer(false);
  };

  const selectNextCard = () => {
    // use the question to find the index of the current card
    const currentCardIndex = allFlashCards.findIndex(
      (card) => card.question === question
    );
    // add 1 to that index to return the next card in the list || return the first card
    displayedCard = allFlashCards[currentCardIndex + 1] ?? allFlashCards[0];
    setQuestion(displayedCard.question);
    setAnswer(displayedCard.answer);
    setShowAnswer(false);
  };

  return (
    <>
      <section className="bg-slate-900 p-4 rounded-3xl">
        <section className="grid grid-rows-2 grid-cols-3 items-center justify-center">
          <h1 className="text-3xl text-white col-span-3">
            {showAnswer ? answer : question}
          </h1>
          {/* button to flip card */}
          <button
            className="row-start-2 bg-red-500 hover:bg-red-700 text-white font-bold rounded"
            onClick={() => {
              setShowAnswer(!showAnswer);
            }}
          >
            Flip
          </button>
          {/* button to draw random card */}
          <button
            className="row-start-2 bg-red-500 hover:bg-red-700 text-white font-bold rounded"
            onClick={() => {
              selectRandomCard();
            }}
          >
            Draw Random
          </button>
          {/* button to draw next card */}
          <button
            className="row-start-2 bg-red-500 hover:bg-red-700 text-white font-bold rounded"
            onClick={() => {
              selectNextCard();
            }}
          >
            Draw Next
          </button>
        </section>
        {/* card count */}
      </section>
    </>
  );
};

export default FlashCard;
