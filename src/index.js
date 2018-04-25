import React from "react";
import { render } from "react-dom";
import Stars from "./Rating";
import "./style.css";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div className="rating-container">
    <Stars />
  </div>
);

render(<App />, document.getElementById("root"));
