import FlashCard from "./features/FlashCards/FlashCard";
import AddFlashCard from "./features/FlashCards/AddFlashCard";

function App() {
  return (
    <main className="min-h-screen bg-black text-white max-w-md mx-auto">
      <AddFlashCard />
      <br />
      <FlashCard />
    </main>
  );
}

export default App;
