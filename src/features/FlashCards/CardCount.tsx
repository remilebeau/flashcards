import { useAppSelector } from "../../app/hooks";
import { selectFlashCards } from "./flashCardsSlice";
const CardCount = () => {
  const { flashcards: allFlashCards } = useAppSelector(selectFlashCards);
  const cardCount = allFlashCards.length;
  return (
    <section className="bg-slate-900 rounded-3xl p-4">
      <h2 className="text-3xl text-white text-center">
        Card Count: {cardCount}
      </h2>
    </section>
  );
};

export default CardCount;
