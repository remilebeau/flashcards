import FlashCard from "./components/FlashCard";
import AddFlashCard from "./components/AddFlashCard";

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
