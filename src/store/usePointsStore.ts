import { create } from "zustand";

interface PointsStore {
  points: number;
  pointsPerQuestion: number;
  addPoints: (amount: number) => void;
  resetPoints: () => void;
  setPointsPerQuestion: (amount: number) => void;
}

export const usePointsStore = create<PointsStore>((set) => ({
  points: 0,
  pointsPerQuestion: 10,
  addPoints: (amount: number) =>
    set((state) => ({ points: state.points + amount })),
  resetPoints: () => set({ points: 0 }),
  setPointsPerQuestion: (amount: number) => set({ pointsPerQuestion: amount }),
}));
