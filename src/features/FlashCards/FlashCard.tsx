import { useState } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectFlashCards } from "./flashCardsSlice";
import type { FlashCard } from "./flashCardsSlice";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MoveHorizontal, Shuffle, CircleArrowRight } from "lucide-react";
const FlashCard = () => {
  const { flashcards: allFlashCards } = useAppSelector(selectFlashCards);

  const [question, setQuestion] = useState("Begin by adding cards.");
  const [answer, setAnswer] = useState("Begin by adding cards.");
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
    <Card>
      <CardHeader>
        <CardTitle className="text-center text-5xl font-bold">
          {showAnswer ? answer : question}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-row justify-evenly">
        {/* button to flip card */}
        <MoveHorizontal
          onClick={() => {
            setShowAnswer(!showAnswer);
          }}
        />
        {/* button to draw random card */}
        <Shuffle
          onClick={() => {
            selectRandomCard();
          }}
        >
          Draw Random
        </Shuffle>
        {/* button to draw next card */}
        <CircleArrowRight
          onClick={() => {
            selectNextCard();
          }}
        >
          Draw Next
        </CircleArrowRight>
      </CardContent>
    </Card>
  );
};

export default FlashCard;
