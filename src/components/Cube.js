import { useBox } from "@react-three/cannon";
import { useStore } from "../hooks/useState";
import * as textures from "../images/textures";

export const Cube = ({ position, texture }) => {
  const [ref] = useBox(() => ({ mass: 1, position, type: "Static" }));
  const [addCube, removeCube] = useStore((state) => [state.addCube, state.removeCube]);

  const activeTexture = textures[texture + "Texture"];

  return (
    <mesh
      ref={ref}
      onClick={(e) => {
        e.stopPropagation();
        const clickedFace = Math.floor(e.faceIndex / 2);
        const [x, y, z] = ref.current.position.toArray();
        if (e.ctrlKey) {
          removeCube(x, y, z);
          return
        }

        switch (clickedFace) {
          case 0:
            addCube(x + 1, y, z);
            break;
          case 1:
            addCube(x - 1, y, z);
            break;
          case 2:
            addCube(x, y + 1, z);
            break;
          case 3:
            addCube(x, y - 1, z);
            break;
          case 4:
            addCube(x, y, z + 1);
            break;
          case 5:
            addCube(x, y, z - 1);
            break;
          default:
            break;
        }
      }}
    >
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial attach="material" map={activeTexture} />
    </mesh>
  );
};
