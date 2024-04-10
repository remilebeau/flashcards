import FlashCard from "./features/FlashCards/FlashCard";
import AddFlashCard from "./features/FlashCards/AddFlashCard";

function App() {
  return (
    <main className="min-h-screen bg-black text-white max-w-md mx-auto">
      <AddFlashCard />
      <hr className="my-8" />
      <FlashCard />
    </main>
  );
}

export default App;
