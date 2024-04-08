import { useState } from "react";

const AddFlashCard = () => {
  const [langOne, setLangOne] = useState("");
  const [langTwo, setLangTwo] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await fetch("http://localhost:3500/api/flashcard", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ langOne, langTwo }),
    });
    if (!response.ok) {
      throw new Error("Failed to add flash card");
    }
    setLangOne("");
    setLangTwo("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="text-black"
        type="text"
        placeholder="Language One"
        value={langOne}
        onChange={(event) => setLangOne(event.target.value)}
      />
      <input
        className="text-black"
        type="text"
        placeholder="Language Two"
        value={langTwo}
        onChange={(event) => setLangTwo(event.target.value)}
      />
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        type="submit"
      >
        Add Flash Card
      </button>
    </form>
  );
};

export default AddFlashCard;
