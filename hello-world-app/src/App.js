import React from "react";
import HelloWorld from "./HelloWorld";
import { createStore } from "redux";
import reducer from "./reducer";

const initialState = { tech: "React" };
const store = createStore(reducer, initialState);

class App extends React.Component {
  // state = {
  //   tech: "React-Redux"
  // };

  render() {
    return <HelloWorld tech={store.getState().tech}></HelloWorld>;
  }
}

export default App;
