import Lights from "@/components/Light";
import Model from "@/components/Model";
import React, { useRef } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "drei";

type Props = {
  mbti: string;
};

const ModelViewer = (props: Props) => {
  const mbti = props.mbti;
  const controlsRef = useRef();

  return (
    <Canvas colorManagement camera={{ position: [0, 0, 5] }}>
      <Lights />
      <Model mbti={mbti} />
      <OrbitControls ref={controlsRef} />
    </Canvas>
  );
};

export default ModelViewer;
