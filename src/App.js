import { Physics } from '@react-three/cannon';
import { Sky } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Ground} from './components/Ground.js';

function App() {
  return (
    <>
      {/* <div>Outside Canvas</div> */}
      <Canvas>
        <Sky sunPosition={[200, 200, 50]} />
        <ambientLight intensity={0.5} />
        <Physics>
          <Ground />
        </Physics>
      </Canvas>
    </>
  );
}

export default App;
