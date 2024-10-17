/* eslint-disable @typescript-eslint/no-unused-vars */

import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import "./Wheel.css";
import { setSelectedColor } from "../store/appSlice";

const ColorWheel2 = () => {
  const [selected, setSelected] = useState(1);
  const dispatch = useDispatch();

  // Refs to hold mutable variables that persist across renders
  const activeRef = useRef(false);
  const angleRef = useRef(0);
  const rotationRef = useRef(0);
  const startAngleRef = useRef(0);
  const centerRef = useRef({ x: 0, y: 0 });

  const R2D = 180 / Math.PI;

  // Ref for the main wheel element
  const mainRef = useRef(null);

  // Event handler for mousedown
  const start = useCallback((e) => {
    e.preventDefault();
    if (!mainRef.current) return;

    const bb = mainRef.current.getBoundingClientRect();
    const t = bb.top;
    const l = bb.left;
    const h = bb.height;
    const w = bb.width;

    centerRef.current = {
      x: l + w / 2,
      y: t + h / 2,
    };

    const x = e.clientX - centerRef.current.x;
    const y = e.clientY - centerRef.current.y;

    startAngleRef.current = R2D * Math.atan2(y, x);
    activeRef.current = true;
  }, []);

  // Event handler for mousemove
  const rotate = useCallback((e) => {
    if (!activeRef.current) return;

    e.preventDefault();

    const x = e.clientX - centerRef.current.x;
    const y = e.clientY - centerRef.current.y;
    const d = R2D * Math.atan2(y, x);
    rotationRef.current = d - startAngleRef.current;
    const newAngle = angleRef.current + rotationRef.current;

    if (mainRef.current) {
      mainRef.current.style.transform = `rotate(${newAngle}deg)`;
    }
  }, []);

  // Event handler for mouseup
  const stop = useCallback(() => {
    angleRef.current += rotationRef.current;
    activeRef.current = false;
  }, []);

  // Initialize event listeners
  const init = useCallback(() => {
    const mainElement = mainRef.current;
    if (!mainElement) return;

    mainElement.addEventListener("mousedown", start, false);

    const handleMouseMove = (event) => {
      if (activeRef.current) {
        rotate(event);
      }
    };

    const handleMouseUp = (event) => {
      stop();
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    // Cleanup function to remove event listeners
    return () => {
      mainElement.removeEventListener("mousedown", start, false);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [start, rotate, stop]);

  useEffect(() => {
    const cleanup = init();
    return cleanup;
  }, [init]);

  const handleColorChange = (selectedColor) => {
    dispatch(setSelectedColor(selectedColor));
    setSelected(selectedColor.id);
  };

  return (
    <center>
      <div className="main" id="main" ref={mainRef}>
        <span
          className={`root color-0 ${selected === 1 ? "selected" : ""}`}
          onClick={() =>
            handleColorChange({
              id: 1,
              name: "Slushy",
              hex: "#8cc3ed",
              sec: "#e5f3ff",
              locked: false,
            })
          }
        >
          <div className="content"></div>
        </span>
        <span
          className={`root color-11 ${selected === 2 ? "selected" : ""}`}
          onClick={() =>
            handleColorChange({
              id: 2,
              name: "Pollen",
              hex: "#fcb745",
              sec: "#ffee9d",
              locked: true,
            })
          }
        >
          <div className="content"></div>
        </span>
        <span
          className={`root color-12 ${selected === 3 ? "selected" : ""}`}
          onClick={() =>
            handleColorChange({
              id: 3,
              name: "Amethyst",
              hex: "#462f99",
              sec: "#b1a8d7",
              locked: false,
            })
          }
        >
          <div className="content"></div>
        </span>
        <span
          className={`root color-13 ${selected === 4 ? "selected" : ""}`}
          onClick={() =>
            handleColorChange({
              id: 4,
              name: "Angelite",
              hex: "#829292",
              sec: "#e8eeec",
              locked: false,
            })
          }
        >
          <div className="content"></div>
        </span>
        <span
          className={`root color-14 ${selected === 5 ? "selected" : ""}`}
          onClick={() =>
            handleColorChange({
              id: 5,
              name: "Clorophyll",
              hex: "#736d6f",
              sec: "#d4d9d3",
              locked: false,
            })
          }
        >
          <div className="content"></div>
        </span>
        <span
          className={`root color-15 ${selected === 6 ? "selected" : ""}`}
          onClick={() =>
            handleColorChange({
              id: 6,
              name: "Clorophyll",
              hex: "#acd18e",
              sec: "#f8faec",
              locked: false,
            })
          }
        >
          <div className="content"></div>
        </span>
        <span
          className={`root color-16 ${selected === 7 ? "selected" : ""}`}
          onClick={() =>
            handleColorChange({
              id: 7,
              name: "Corundum",
              hex: "#b563a1",
              sec: "#eb99d7",
              locked: false,
            })
          }
        >
          <div className="content"></div>
        </span>
        <span
          className={`root color-17 ${selected === 8 ? "selected" : ""}`}
          onClick={() =>
            handleColorChange({
              id: 8,
              name: "Latte",
              hex: "#937551",
              sec: "#e5ddd0",
              locked: false,
            })
          }
        >
          <div className="content"></div>
        </span>
        <span
          className={`root color-18 ${selected === 9 ? "selected" : ""}`}
          onClick={() =>
            handleColorChange({
              id: 9,
              name: "Lavander",
              hex: "#cb98e5",
              sec: "#e1dbf5",
              locked: true,
            })
          }
        >
          <div className="content"></div>
        </span>
        <span
          className={`root color-1 ${selected === 10 ? "selected" : ""}`}
          onClick={() =>
            handleColorChange({
              id: 10,
              name: "Olivine",
              hex: "#5e6038",
              sec: "#e2eac3",
              locked: false,
            })
          }
        >
          <div className="content"></div>
        </span>
        <span
          className={`root color-21 ${selected === 11 ? "selected" : ""}`}
          onClick={() =>
            handleColorChange({
              id: 11,
              name: "Peach",
              hex: "#9c4037",
              sec: "#e0a18a",
              locked: false,
            })
          }
        >
          <div className="content"></div>
        </span>
        <span
          className={`root color-22 ${selected === 12 ? "selected" : ""}`}
          onClick={() =>
            handleColorChange({
              id: 12,
              name: "Ruby",
              hex: "#840d0f",
              sec: "#4d080b",
              locked: false,
            })
          }
        >
          <div className="content"></div>
        </span>
        <span
          className={`root color-23 ${selected === 13 ? "selected" : ""}`}
          onClick={() =>
            handleColorChange({
              id: 13,
              name: "Saphyr",
              hex: "#4458c6",
              sec: "#95d6f6",
              locked: false,
            })
          }
        >
          <div className="content"></div>
        </span>
        <span
          className={`root color-24 ${selected === 14 ? "selected" : ""}`}
          onClick={() =>
            handleColorChange({
              id: 14,
              name: "Smoky",
              hex: "#816a6e",
              sec: "#d2cec5",
              locked: false,
            })
          }
        >
          <div className="content"></div>
        </span>
        <span
          className={`root color-25 ${selected === 15 ? "selected" : ""}`}
          onClick={() =>
            handleColorChange({
              id: 15,
              name: "Titane",
              hex: "#1f1f1f",
              sec: "#464646",
              locked: false,
            })
          }
        >
          <div className="content"></div>
        </span>
        <span
          className={`root color-26 ${selected === 16 ? "selected" : ""}`}
          onClick={() =>
            handleColorChange({
              id: 16,
              name: "Agathe",
              hex: "#222c8c",
              sec: "#637bbb",
              locked: true,
            })
          }
        >
          <div className="content"></div>
        </span>
        <span
          className={`root color-27 ${selected === 17 ? "selected" : ""}`}
          onClick={() =>
            handleColorChange({
              id: 17,
              name: "Antelope",
              hex: "#d15b3a",
              sec: "#f5ad83",
              locked: false,
            })
          }
        >
          <div className="content"></div>
        </span>
        <span
          className={`root color-28 ${selected === 18 ? "selected" : ""}`}
          onClick={() =>
            handleColorChange({
              id: 18,
              name: "Candy Cotton",
              hex: "#f179bb",
              sec: "#fed6e9",
              locked: false,
            })
          }
        >
          <div className="content"></div>
        </span>
      </div>
    </center>
  );
};

export default ColorWheel2;
