import create from "zustand";
import { nanoid } from "nanoid";

export const useStore = create((set) => ({
  texture: "dirt",
  cubes: [],
  addCube: (x, y, z) =>
    set((prev) => ({
      cubes: [
        ...prev.cubes,
        {
          key: nanoid(),
          pos: [x, y, z],
          texture: prev.texture,
        },
      ],
    })),
  removeCube: (x,y,z ) => {
    set((prev) => ({
      cubes: prev.cubes.filter((c) => c.pos[0] !== x || c.pos[1] !== y || c.pos[2] !== z),
    }));
  },
  setTexture: () => {},
  saveWorld: () => {
    console.log("save world");
  },
  resetWorld: () => {
    set({ cubes: [] });
    localStorage.removeItem("cubes");
  },
}));
