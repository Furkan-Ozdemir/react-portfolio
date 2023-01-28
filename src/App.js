import React from "react";
import Bar from "./Bar";
import RecycleBin from "./RecycleBin";
import Resume from "./Resume";

const App = () => {
  return (
    <div className="app">
      <Resume />
      <RecycleBin />
      <Bar />
    </div>
  );
};

export default App;
