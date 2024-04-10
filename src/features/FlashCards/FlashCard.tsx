import { useState, useEffect } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectFlashCards } from "./flashCardsSlice";
import type { FlashCard } from "./flashCardsSlice";

const FlashCard = () => {
  const flashCards = useAppSelector(selectFlashCards);
  let displayedCard =
    flashCards.flashcards[
      Math.floor(Math.random() * flashCards.flashcards.length)
    ];

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [cardCount, setCardCount] = useState(0);

  const selectRandomCard = () => {
    displayedCard = flashCards.flashcards[
      Math.floor(Math.random() * flashCards.flashcards.length)
    ] ?? {
      id: 1,
      question: "question",
      answer: "answer",
    };
    setQuestion(displayedCard.question);
    setAnswer(displayedCard.answer);
    setShowAnswer(false);
  };

  const selectNextCard = () => {
    // use the question to find the index of the current card
    const currentCardIndex = flashCards.flashcards.findIndex(
      (card) => card.question === question
    );
    // add 1 to that index to return the next card in the list || return the first card
    displayedCard =
      flashCards.flashcards[currentCardIndex + 1] ?? flashCards.flashcards[0];
    setQuestion(displayedCard.question);
    setAnswer(displayedCard.answer);
    setShowAnswer(false);
  };

  useEffect(() => {
    selectRandomCard();
    setCardCount(flashCards.flashcards.length);
  }, [flashCards.flashcards]);

  return (
    <>
      <section className="bg-slate-900 mt-20 p-4 rounded-3xl">
        <section className="grid grid-rows-2 items-center justify-center">
          <h1 className="text-3xl text-white">
            {showAnswer ? answer : question}
          </h1>
          {/* button to flip card */}
          <button
            className="row-start-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 m-2 rounded"
            onClick={() => {
              setShowAnswer(!showAnswer);
            }}
          >
            Flip
          </button>
          {/* button to draw random card */}
          <button
            className="row-start-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 m-2 rounded"
            onClick={() => {
              selectRandomCard();
            }}
          >
            Draw Random
          </button>
          {/* button to draw next card */}
          <button
            className="row-start-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 m-2 rounded"
            onClick={() => {
              selectNextCard();
            }}
          >
            Draw Next
          </button>
        </section>
        {/* card count */}
      </section>
      <hr className="my-8" />
      <section className="bg-slate-900 rounded-3xl grid grid-rows-2 items-center justify-center">
        <h2 className="text-3xl text-white">Card Count: {cardCount}</h2>
      </section>
    </>
  );
};

export default FlashCard;
