import React from "react";

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 10]} intensity={0.1} />
      <directionalLight
        castShadow
        position={[10, 420, 100]}
        intensity={1.0}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={10}
        shadow-camera-left={-30}
        shadow-camera-right={10}
        shadow-camera-top={40}
        shadow-camera-bottom={-10}
      />
      {/* <spotLight intensity={0.1} position={[90, 100, 50]} castShadow /> */}
    </>
  );
};

export default Lights;
