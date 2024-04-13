import FlashCard from "./features/FlashCards/FlashCard";
import AddFlashCards from "./features/FlashCards/AddFlashCards";
import CardCount from "./features/FlashCards/CardCount";

function App() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col bg-black text-white sm:grid sm:grid-rows-2 sm:gap-8">
      {/* <section id="grid-container" className="sm:grid sm:grid-cols-2 sm:gap-4"> */}
      <AddFlashCards />
      <br className="my-8 sm:hidden" />
      <FlashCard />
      <br className="my-8 sm:hidden" />
      <CardCount />
      {/* </section> */}
    </main>
  );
}

export default App;
