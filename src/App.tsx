import FlashCard from "./features/FlashCards/FlashCard";
import AddFlashCards from "./features/FlashCards/AddFlashCards";
import CardCount from "./features/FlashCards/CardCount";

function App() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl bg-black text-white">
      <AddFlashCards />
      <br className="my-8" />
      <FlashCard />
      <br className="my-8" />
      <CardCount />
    </main>
  );
}

export default App;
