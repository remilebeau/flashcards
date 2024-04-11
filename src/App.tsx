import FlashCard from "./features/FlashCards/FlashCard";
import AddFlashCards from "./features/FlashCards/AddFlashCards";
import CardCount from "./features/FlashCards/CardCount";

function App() {
  return (
    <main className="min-h-screen bg-black text-white max-w-md mx-auto">
      <AddFlashCards />
      <hr className="my-8" />
      <FlashCard />
      <hr className="my-8" />
      <CardCount />
    </main>
  );
}

export default App;
