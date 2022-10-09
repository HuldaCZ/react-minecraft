import { useBox } from "@react-three/cannon";
import * as textures from "../images/textures";

export const Cube = ({ position, texture }) => {
  const [ref] = useBox(() => ({ mass: 1, position, type: "Static" }));
  console.log(position, texture);
    const activeTexture = textures[texture + "Texture"];

    console.log(activeTexture);

  return (
    <mesh ref={ref}>
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial attach="material" map={activeTexture} />
    </mesh>
  );
};
