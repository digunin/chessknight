import React, { useState, useEffect } from "react";
import { errorVariant, loadingVariant, periods } from "./utils";
import Board from "./board.jsx";
import Navbar from "./navbar.jsx";
import ControlPanel from "./controlpanel.jsx";
import Spinner from "./spinner.jsx";
import Pause from "./pause.jsx";
import { useGraphqlQuery } from "../hooks/useGraphqlQuery.js";

export default ({ start = "0", variant = "1" }) => {
  const [path, setPath] = useState("_" + start + variant);
  const [currentSquare, setCurrentSquare] = useState(64);
  const [paused, setPaused] = useState(false);
  const [speed, setSpeed] = useState(2);
  const { loading, error, data } = useGraphqlQuery(start, variant);

  const getPath = () => "_" + start + variant;
  const pathChanged = () => "_" + start + variant !== path;

  useEffect(() => {
    if (pathChanged()) {
      setCurrentSquare(64);
      setPaused(false);
      setPath(getPath());
      return;
    }
    let id = null;
    if (currentSquare < 64) {
      if (paused) return;
      id = setTimeout(
        () => setCurrentSquare(currentSquare + 1),
        periods[speed]
      );
    }
    return () => {
      if (id != null) {
        clearTimeout(id);
      }
    };
  });

  let variantData = [];
  let count = 0;

  if (loading) {
    variantData = loadingVariant;
  }
  if (error) {
    variantData = errorVariant;
  }
  if (!error && !loading && data) {
    variantData = data.board[+variant - 1];
    count = data.board.length;
  }

  return (
    <div className="main">
      {loading && <Spinner />}
      {paused && <Pause />}
      <Navbar start={start} count={10} current={+variant} />
      <Board currentSquare={currentSquare} variant={variantData} />
      <ControlPanel
        speed={speed}
        isPaused={paused}
        onStart={() => {
          if (start !== "0") setCurrentSquare(0);
        }}
        onStop={() => setCurrentSquare(64)}
        onPause={() => setPaused(!paused)}
        onPlus={() => {
          if (speed < 4) setSpeed(speed + 1);
        }}
        onMinus={() => {
          if (speed > 0) setSpeed(speed - 1);
        }}
      />
    </div>
  );
};
