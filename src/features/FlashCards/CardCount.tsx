import { useAppSelector } from "../../app/hooks";
import { selectFlashCards } from "./flashCardsSlice";
const CardCount = () => {
  const { flashcards: allFlashCards } = useAppSelector(selectFlashCards);
  const cardCount = allFlashCards.length;
  return (
    <article className="rounded-3xl bg-slate-900 p-4">
      <h2 className="text-center text-3xl text-white">
        Card Count: {cardCount}
      </h2>
    </article>
  );
};

export default CardCount;
