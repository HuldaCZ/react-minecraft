import { useStore } from "../hooks/useState";
import { Cube } from "./Cube";

export const Cubes = () => {
  const [cubes] = useStore((state) => [state.cubes]);
  return cubes.map(({ key, pos, texture }) => <Cube {...{ key, position: pos, texture }} />);
};
