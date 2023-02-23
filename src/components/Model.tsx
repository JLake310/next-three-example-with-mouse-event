import React, { useEffect, useState, useRef } from "react";
import { Html } from "drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Object3D, Vector3 } from "three";
import * as THREE from "three";

interface GroupRef {
  rotation: {
    x: number;
    y: number;
    z: number;
  };
}

const Model = () => {
  /* Refs */
  const groupRef = useRef<GroupRef>({ rotation: { x: 0, y: 0, z: 0 } });
  const controlsRef = useRef<HTMLDivElement>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);

  /* State */
  const [model, setModel] = useState<Object3D | null>(null);

  /* Load model */
  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load("scene.gltf", async (gltf) => {
      setModel(gltf.scene);
    });
  }, []);

  /* Adjust camera position to center model */
  useEffect(() => {
    if (!model || !cameraRef.current) return;

    const box = new THREE.Box3().setFromObject(model);
    const center = new Vector3();
    box.getCenter(center);

    cameraRef.current.position.set(center.x, center.y, box.max.z * 2);
    cameraRef.current.lookAt(center);
  }, [model]);

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
          <group ref={groupRef} position={[0, -70, 0]} dispose={null}>
            <primitive name="Object_0" object={model} />
          </group>
          <perspectiveCamera
            ref={cameraRef}
            fov={45}
            aspect={window.innerWidth / window.innerHeight}
            near={0.1}
            far={1000}
          />
        </>
      ) : (
        <Html>Loading...</Html>
      )}
    </>
  );
};

export default Model;
