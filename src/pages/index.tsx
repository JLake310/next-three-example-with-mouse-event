import Lights from "@/components/Light";
import Model from "@/components/Model";
import React, { useRef } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "drei";

const App = () => {
  const controlsRef = useRef();

  return (
    <Canvas colorManagement camera={{ position: [0, 0, 300] }}>
      <Lights />
      <Model />
      <OrbitControls ref={controlsRef} />
    </Canvas>
  );
};

export default App;
