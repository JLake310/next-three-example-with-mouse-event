import React, { useEffect, useState, useRef } from "react";
import { Html } from "drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Object3D } from "three/src/core/Object3D"; //Object3D types

interface group {
  current: {
    rotation: {
      x: number;
      y: number;
    };
  };
}

const Model = () => {
  /* Refs */
  const group: group = useRef();
  const controlsRef = useRef();

  /* State */
  const [model, setModel] = useState<Object3D | null>(null);

  /* Load model */
  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load("scene.gltf", async (gltf) => {
      const nodes = await gltf.parser.getDependencies("node");
      setModel(nodes[0]);
    });
  }, []);

  /* Rotate model with mouse event */
  useEffect(() => {
    if (!controlsRef.current || !group.current) return;

    controlsRef.current.addEventListener("change", () => {
      const { x, y, z } = group.current.rotation;
      group.current.rotation.set(x, y + 0.01, z); // rotate 0.01 radian on Y-axis
    });

    return () => {
      controlsRef.current.removeEventListener("change", () => {});
    };
  }, [controlsRef, group]);

  return (
    <>
      {model ? (
        <group ref={group} position={[0, -150, 0]} dispose={null}>
          <primitive ref={group} name="Object_0" object={model} />
        </group>
      ) : (
        <Html>Loading...</Html>
      )}
    </>
  );
};

export default Model;
