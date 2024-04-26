import FlashCard from "./features/FlashCards/FlashCard";
import AddFlashCards from "./features/FlashCards/AddFlashCards";
import { ThemeProvider } from "./components/theme-provider";
// import { ModeToggle } from "./components/mode-toggle";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="max-w-4-xl mx-auto flex flex-col gap-8 md:flex-row">
        <AddFlashCards />
        <FlashCard />
        {/* for testing only */}
        {/* <ModeToggle /> */}
      </main>
    </ThemeProvider>
  );
}

export default App;
