import React from "react";
import Bar from "./Bar";
import RecycleBin from "./RecycleBin";
import Resume from "./Resume";
import MyProjects from "./MyProjects";

const App = () => {
  const openInNewTab = (url, width, height, left, top) => {
    const newWindow = window.open(
      url,
      "",
      `width=${width},height=${height},left=${left},top=${top}`
    );
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="app">
      <Resume openInNewTab={openInNewTab} />
      <RecycleBin openInNewTab={openInNewTab} />
      <MyProjects openInNewTab={openInNewTab} />
      <Bar />
    </div>
  );
};

export default App;
