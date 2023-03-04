import Lights from "@/components/Light";
import Model from "@/components/Model";
import React, { useRef, useState } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "drei";

const MBTIs = [
  { name: "ENFJ" },
  { name: "ENFP" },
  { name: "ENTJ" },
  { name: "ENTP" },
  { name: "ESFJ" },
  { name: "ESFP" },
  { name: "ESTJ" },
  { name: "ESTP" },
  { name: "INFJ" },
  { name: "INFP" },
  { name: "INTJ" },
  { name: "ISFJ" },
  { name: "ISTJ" },
  { name: "ISFP" },
  { name: "INTP" },
  { name: "ISTP" },
];

const ModelViewer = () => {
  const controlsRef = useRef();
  const [mbtiState, setName] = useState("ENFJ");

  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <>
      <div style={{ width: "400px" }}>
        {MBTIs.map((MBTI) => (
          <button
            key={MBTI.name}
            value={MBTI.name}
            onClick={handleChange}
            style={{ width: "40px", margin: 2 }}
          >
            {MBTI.name}
          </button>
        ))}
      </div>
      <Canvas colorManagement camera={{ position: [0, 0, 5] }}>
        <Lights />
        <Model mbti={mbtiState} />
        <OrbitControls ref={controlsRef} />
      </Canvas>
      <span>{mbtiState}</span>
    </>
  );
};

export default ModelViewer;
