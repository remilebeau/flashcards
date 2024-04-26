import FlashCard from "./features/FlashCards/FlashCard";
import AddFlashCards from "./features/FlashCards/AddFlashCards";
import CardCount from "./features/FlashCards/CardCount";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main
        className="mx-auto flex min-h-screen max-w-4xl flex-col sm:grid sm:grid-rows-2 sm:gap-8
      "
      >
        <AddFlashCards />
        <section className="flex flex-col items-center">
          <CardCount />
        </section>
        <FlashCard />
      </main>
    </ThemeProvider>
  );
}

export default App;
