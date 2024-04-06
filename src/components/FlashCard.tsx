import { useState, useEffect } from "react";

const FlashCard = () => {
  const [langOne, setLangOne] = useState("");
  const [langTwo, setLangTwo] = useState("");
  const [showLangOne, setShowLangOne] = useState(true);

  const fetchFlashCard = async () => {
    const response = await fetch("http://localhost:3500/api/flashcard");
    const data = await response.json();
    setLangOne(data.langOne);
    setLangTwo(data.langTwo);
    setShowLangOne(data.showLangOne);
  };

  useEffect(() => {
    fetchFlashCard();
  }, []);

  let content;
  if (showLangOne) {
    content = langOne;
  } else {
    content = langTwo;
  }

  return (
    <section className="flex flex-col items-center justify-center border border-red-500">
      <section className="flex flex-col items-center justify-center">
        <h1 className="text-3xl text-white">{content}</h1>
        {/* button to flip card */}
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            setShowLangOne(!showLangOne);
          }}
        >
          Flip
        </button>
        {/* button to draw next card */}
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            fetchFlashCard();
          }}
        >
          Next
        </button>
      </section>
    </section>
  );
};

export default FlashCard;
