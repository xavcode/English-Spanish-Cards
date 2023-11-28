import { create } from "zustand";
import { questions } from "../components/data/questions";

export const useScoreStore = create((set)=>({
  questions:questions,
  score:0,
  incrementScore:()=>set((state)=>({score: state.score + 100}))
}))