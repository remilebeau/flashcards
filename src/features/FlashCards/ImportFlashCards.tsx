import { useState } from "react";

export default function ImportFlashCards() {
  const [flashCards, setFlashCards] = useState([]);
  return (
    <form>
      {/* form to import flashcards in the form of a json */}
      <textarea name="questions" id="questions" cols={30} rows={10}></textarea>

      {/* array length will always be even */}
      {/* array will always start with question1 */}
      {/* [question1, answer1, question2, answer2] */}
    </form>
  );
}
