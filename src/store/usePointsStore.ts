import { create } from "zustand";

interface PointsStore {
  points: number;
  pointsPerQuestion: number;
  adIndices: number[];
  addPoints: (amount: number) => void;
  resetPoints: () => void;
  setPointsPerQuestion: (amount: number) => void;
  initAdIndices: (ADS: string[]) => void;
}

const randomPermutation = (arr: number[]) => {
  let result = arr.slice();
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

export const usePointsStore = create<PointsStore>((set) => ({
  points: 0,
  adIndices: [],
  pointsPerQuestion: 10,
  addPoints: (amount: number) =>
    set((state) => ({ points: state.points + amount })),
  resetPoints: () => set({ points: 0 }),
  setPointsPerQuestion: (amount: number) => set({ pointsPerQuestion: amount }),
  initAdIndices: (ADS: string[]) =>
    set((state) => ({
      adIndices:
        state.pointsPerQuestion == 10
          ? [Math.floor(Math.random() * ADS.length)]
          : randomPermutation([...ADS.keys()]),
    })),
}));
