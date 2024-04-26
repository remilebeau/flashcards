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
    // draw a random card from the state
    const newRandomCard =
      allFlashCards[Math.floor(Math.random() * allFlashCards.length)];
    if (displayedCard.question === newRandomCard.question) {
      selectRandomCard();
    } else {
      displayedCard = newRandomCard;
      setQuestion(displayedCard.question);
      setAnswer(displayedCard.answer);
      setShowAnswer(false);
    }
  };

  const selectNextCard = () => {
    // use the question to find the index of the current card
    const currentCardIndex = allFlashCards.findIndex(
      (card) => card.question === question,
    );
    // add 1 to that index to return the next card in the list || return the first card
    displayedCard = allFlashCards[currentCardIndex + 1] ?? allFlashCards[0];
    setQuestion(displayedCard.question);
    setAnswer(displayedCard.answer);
    setShowAnswer(false);
  };

  return (
    <article className="grid grid-rows-4 rounded-3xl p-4 sm:grid sm:grid-rows-4">
      <h1 className="text-center text-5xl font-bold text-white">
        {showAnswer ? answer : question}
      </h1>
      {/* button to flip card */}
      <button
        className="m-2 rounded-3xl bg-red-500 text-3xl font-bold text-white hover:opacity-90"
        onClick={() => {
          setShowAnswer(!showAnswer);
        }}
      >
        Flip
      </button>
      {/* button to draw random card */}
      <button
        className="m-2 rounded-3xl bg-red-500 text-3xl font-bold text-white hover:opacity-90"
        onClick={() => {
          selectRandomCard();
        }}
      >
        Draw Random
      </button>
      {/* button to draw next card */}
      <button
        className="m-2 rounded-3xl bg-red-500 text-3xl font-bold text-white hover:opacity-90"
        onClick={() => {
          selectNextCard();
        }}
      >
        Draw Next
      </button>
    </article>
  );
};

export default FlashCard;
