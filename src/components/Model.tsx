import React, { useEffect, useState, useRef } from "react";
import { Html } from "drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Object3D, Vector3 } from "three";

interface GroupRef {
  rotation: {
    x: number;
    y: number;
    z: number;
  };
}

type Props = {
  mbti: string;
  model_position: Vector3;
};

const Model = (props: Props) => {
  const mbti = props.mbti;
  const model_position = props.model_position;
  /* Refs */
  const groupRef = useRef<GroupRef>({ rotation: { x: 0, y: 0, z: 0 } });
  const controlsRef = useRef<HTMLDivElement>(null);

  /* State */
  const [model, setModel] = useState<Object3D | null>(null);

  /* Load model */
  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(mbti + ".gltf", async (gltf) => {
      setModel(gltf.scene);
    });
  }, []);

  /* Rotate model with mouse event */
  useEffect(() => {
    if (!controlsRef.current || !groupRef.current) return;

    controlsRef.current.addEventListener("change", () => {
      groupRef.current.rotation.y += 0.01; // rotate 0.01 radian on Y-axis
    });

    return () => {
      controlsRef.current.removeEventListener("change", () => {});
    };
  }, [controlsRef, groupRef]);

  return (
    <>
      <Html>
        <div ref={controlsRef} />
      </Html>
      {model ? (
        <>
          <group ref={groupRef} position={model_position} dispose={null}>
            <primitive name="Object_0" object={model} />
          </group>
        </>
      ) : (
        <Html>Loading...</Html>
      )}
    </>
  );
};

export default Model;
