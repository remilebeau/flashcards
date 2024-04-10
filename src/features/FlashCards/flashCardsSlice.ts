import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

export type FlashCard = {
  question: string;
  answer: string;
};

export type FlashCardsState = {
  flashcards: FlashCard[];
};

const initialState: FlashCardsState = {
  flashcards: [],
};

export const flashCardsSlice = createSlice({
  name: "flashcards",
  initialState,
  reducers: {
    addFlashCard: (state, action: PayloadAction<FlashCard>) => {
      state.flashcards.push(action.payload);
    },
    deleteFlashCard: (state, action: PayloadAction<string>) => {
      state.flashcards = state.flashcards.filter(
        (flashcard) => flashcard.question !== action.payload
      );
    },
  },
});

export const { addFlashCard, deleteFlashCard } = flashCardsSlice.actions;

export const selectFlashCards = (state: RootState) => state.flashcards;

export default flashCardsSlice.reducer;
