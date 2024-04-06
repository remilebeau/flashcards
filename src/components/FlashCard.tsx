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
    <section>
      <h1>{content}</h1>
      {/* button to flip card */}
      <button
        onClick={() => {
          setShowLangOne(!showLangOne);
        }}
      >
        Flip
      </button>
      {/* button to draw next card */}
      <button
        onClick={() => {
          fetchFlashCard();
        }}
      >
        Next
      </button>
    </section>
  );
};

export default FlashCard;
