import { Physics } from "@react-three/cannon";
import { Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Ground } from "./components/Ground.js";
import { Player } from "./components/Player.js";
import { FPV } from "./components/FPV.js";
import { Cubes } from "./components/Cubes.js";
import { TextureSelector } from "./components/TextureSelector.js";

function App() {
  return (
    <>
        <TextureSelector />
      <Canvas>
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={0.5} />
        <FPV />
        <Physics>
          <Player />
          <Cubes />
          <Ground />
        </Physics>
      </Canvas>
      <div className="absolute centered cursor" >+</div>
  
    </>
  );
}

export default App;
