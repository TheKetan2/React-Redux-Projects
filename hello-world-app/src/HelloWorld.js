import React from "react";

const HelloWorld = ({ tech }) => {
  return (
    <div className="hello-world">
      Hello world <span className="hello-world__tech">{tech}</span>
    </div>
  );
};

export default HelloWorld;
