import FlashCard from "./features/FlashCards/FlashCard";
import AddFlashCards from "./features/FlashCards/AddFlashCards";
import CardCount from "./features/FlashCards/CardCount";

function App() {
  return (
    <main className="mx-auto min-h-screen max-w-md bg-black text-white">
      <AddFlashCards />
      <hr className="my-8" />
      <FlashCard />
      <hr className="my-8" />
      <CardCount />
    </main>
  );
}

export default App;
