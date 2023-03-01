import React from "react";
import ModelViewer from "@/components/ModelViewer";

const App = () => {
  return (
    <>
      <div className="wrapper">
        <ModelViewer mbti="ENFJ" />
        <span>3d model example</span>
      </div>
    </>
  );
};

export default App;
