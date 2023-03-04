import React from "react";
import ModelViewer from "@/components/ModelViewer";

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

const App = () => {
  return (
    <>
      <div className="wrapper">
        {MBTIs.map((MBTI) => (
          <>
            <ModelViewer mbti={MBTI.name} />
            <span>{MBTI.name}</span>
          </>
        ))}
      </div>
    </>
  );
};

export default App;
