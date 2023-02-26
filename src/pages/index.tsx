import React from "react";
import ModelViewer from "./modelViewer";

const App = () => {
  return (
    <>
      <div className="wrapper">
        <ModelViewer mbti="ENFP" />
        <span>3d model example</span>
      </div>
    </>
  );
};

export default App;
