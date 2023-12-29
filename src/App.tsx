import "./App.css";
import {Canvas} from "@react-three/fiber";

function App() {

  return (
    <div className="container">
      <Canvas>
        <ambientLight/>
          <mesh>
              <boxGeometry args={[1, 1, 1]}/>
              <meshBasicMaterial color={"red"} />
          </mesh>
      </Canvas>
    </div>
  );
}

export default App;
