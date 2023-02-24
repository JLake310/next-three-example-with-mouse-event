import React from "react";
import ModelViewer from "./modelViewer";

const App = () => {
  return (
    <>
      <div className="wrapper">
        <ModelViewer mbti="원점" />
        <span>3d model example</span>
      </div>
    </>
  );
};

export default App;
