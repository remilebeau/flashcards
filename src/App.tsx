import FlashCard from "./features/FlashCards/FlashCard";
import AddFlashCards from "./features/FlashCards/AddFlashCards";
import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="mx-auto flex max-w-4xl flex-col items-center gap-8 md:mt-8">
        <AddFlashCards />
        <FlashCard />
        <ModeToggle />
      </main>
    </ThemeProvider>
  );
}

export default App;
