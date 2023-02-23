import Lights from "@/components/Light";
import Model from "@/components/Model";
import React, { useRef } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "drei";

const App = () => {
  const controlsRef = useRef();

  return (
    <>
      <div className="wrapper">
        <Canvas colorManagement camera={{ position: [0, 0, 2] }}>
          <Lights />
          <Model />
          <OrbitControls ref={controlsRef} />
        </Canvas>
        <span>3d model example</span>
      </div>
    </>
  );
};

export default App;
