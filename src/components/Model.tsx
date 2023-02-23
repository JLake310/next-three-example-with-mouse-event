import React, { useEffect, useState, useRef } from "react";
import { Html } from "drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Object3D } from "three/src/core/Object3D"; //Object3D types
import { Euler } from "three";

interface group {
  current: {
    rotation: {
      x: number;
      y: number;
      z: number;
      rotation: Euler;
    };
  };
}

const Model = () => {
  /* Refs */
  const group: group = useRef();
  const controlsRef = useRef<HTMLElement | null>(null);

  /* State */
  const [model, setModel] = useState<Object3D | null>(null);

  /* Load model */
  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load("scene.gltf", async (gltf) => {
      setModel(gltf.scene);
    });
  }, []);

  /* Rotate model with mouse event */
  useEffect(() => {
    if (!controlsRef.current || !group.current) return;

    controlsRef.current.addEventListener("change", () => {
      group.current.rotation.y += 0.01; // rotate 0.01 radian on Y-axis
    });

    return () => {
      controlsRef.current.removeEventListener("change", () => {});
    };
  }, [controlsRef, group]);

  return (
    <>
      {model ? (
        <group ref={group} position={[0, -100, 0]} dispose={null}>
          <primitive ref={group} name="Object_0" object={model} />
        </group>
      ) : (
        <Html>Loading...</Html>
      )}
    </>
  );
};

export default Model;
