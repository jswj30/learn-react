import React, { Fragment } from "react";
import "./App.css";

function App() {
  const name = "리액트";
  return (
    <>
      {/* 주석 */}
      <div className="react">{name}</div>
      // 이런 주석 /* 저런 주석 */
      <input />
    </>
  );
}

export default App;
