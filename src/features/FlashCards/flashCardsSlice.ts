import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

export interface FlashCard {
  id: number;
  question: string;
  answer: string;
}

export interface FlashCardsState {
  flashcards: FlashCard[];
}

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
    deleteFlashCard: (state, action: PayloadAction<number>) => {
      state.flashcards = state.flashcards.filter(
        (flashcard) => flashcard.id !== action.payload
      );
    },
  },
});

export const { addFlashCard, deleteFlashCard } = flashCardsSlice.actions;

export const selectFlashCards = (state: RootState) => state.flashcards;

export default flashCardsSlice.reducer;
