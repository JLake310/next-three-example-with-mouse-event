import Lights from "@/components/Light";
import Model from "@/components/Model";
import React, { useRef } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "drei";
import model_info from "../../public/model_info.json";
import { Vector3 } from "three";

type Props = {
  mbti: string;
};

const ModelViewer = (props: Props) => {
  const mbti = props.mbti;
  const controlsRef = useRef();
  const camera_position = new Vector3().fromArray(model_info[mbti]["camera"]);
  const model_position = new Vector3().fromArray(model_info[mbti]["position"]);

  return (
    <Canvas colorManagement camera={{ position: camera_position }}>
      <Lights />
      <Model mbti={mbti} model_position={model_position} />
      <OrbitControls ref={controlsRef} />
    </Canvas>
  );
};

export default ModelViewer;
