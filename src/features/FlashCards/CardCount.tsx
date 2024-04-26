import { useAppSelector } from "../../app/hooks";
import { selectFlashCards } from "./flashCardsSlice";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
const CardCount = () => {
  const { flashcards: allFlashCards } = useAppSelector(selectFlashCards);
  const cardCount = allFlashCards.length;
  return (
    <Card className="bg-card items-center justify-center rounded-3xl p-4">
      <CardHeader>
        <CardTitle className="text-center text-3xl font-bold">
          Card Count: {cardCount}
        </CardTitle>
      </CardHeader>
    </Card>
  );
};

export default CardCount;
