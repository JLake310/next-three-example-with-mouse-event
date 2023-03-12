import Lights from "@/components/Light";
import Model from "@/components/Model";
import React, { useRef, useState } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "drei";
import styles from "../styles/layout.module.css";

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
  { name: "INTP" },
  { name: "ISFJ" },
  { name: "ISFP" },
  { name: "ISTJ" },
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
      <span className={styles.appleB}>어떤 생각이 드나요?</span>
      <span className={styles.appleM}>어떤 생각이 드나요?</span>
      <span className={styles.appleR}>어떤 생각이 드나요?</span>
      <span className={styles.appleER}>어떤 생각이 드나요?</span>
      {/* <Canvas colorManagement camera={{ position: [0, 0, 5] }}>
        <Lights />
        <Model mbti={mbtiState} />
        <OrbitControls ref={controlsRef} />
      </Canvas> */}
      <div className={styles.button_container}>
        {MBTIs.map((MBTI) => (
          <button
            key={MBTI.name}
            value={MBTI.name}
            onClick={handleChange}
            className={styles.button}
            style={
              mbtiState === MBTI.name
                ? { backgroundColor: "#9be1ed", color: "#effafc" }
                : {}
            }
          >
            {MBTI.name}
          </button>
        ))}
      </div>
    </>
  );
};

export default ModelViewer;
