import { useAppSelector } from "../../app/hooks";
import { selectFlashCards } from "./flashCardsSlice";
const CardCount = () => {
  const { flashcards: allFlashCards } = useAppSelector(selectFlashCards);
  const cardCount = allFlashCards.length;
  return (
    <section className="bg-slate-900 rounded-3xl grid grid-rows-2 items-center justify-center">
      <h2 className="text-3xl text-white">Card Count: {cardCount}</h2>
    </section>
  );
};

export default CardCount;
