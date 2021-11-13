import React, { useEffect, useState } from "react";
import "./home.css";
function Home() {
  const [modal, setModal] = useState(false);
  const [state, setState] = useState(1);
  useEffect(() => {
    let x = setInterval(() => {
      setState((p) => {
        if (p >= 4) {
          return 1;
        } else {
          return p + 1;
        }
      });
    }, 3000);
    return () => {
      clearInterval(x);
    };
  }, []);

  return (
    <div>
      <div className="heading-div">
        <h1 className="big-heading">Get your next</h1>
        <div>
          {state === 1 ? (
            <h1 style={{ color: "#C28B00" }} className="big-heading get">
              chai time snacks idea
            </h1>
          ) : state === 2 ? (
            <h1 style={{ color: "#0076D3" }} className="big-heading get">
              home décor idea
            </h1>
          ) : state === 3 ? (
            <h1 style={{ color: "#518C7B" }} className="big-heading get">
              outfit idea
            </h1>
          ) : (
            <h1 style={{ color: "#518C7B" }} className="big-heading get">
              DIY idea
            </h1>
          )}
        </div>
      </div>
      <div className="dots-div">
        <div
          style={
            state === 1 ? { background: "#C28B00" } : { background: "#E1E1E1" }
          }
          onClick={() => {
            setState(1);
          }}
        ></div>
        <div
          style={
            state === 2 ? { background: "#0076D3" } : { background: "#E1E1E1" }
          }
          onClick={() => {
            setState(2);
          }}
        ></div>
        <div
          style={
            state === 3 ? { background: "#518C7B" } : { background: "#E1E1E1" }
          }
          onClick={() => {
            setState(3);
          }}
        ></div>
        <div
          style={
            state === 4 ? { background: "#507A57" } : { background: "#E1E1E1" }
          }
          onClick={() => {
            setState(4);
          }}
        ></div>
      </div>
      <div className="parent">
        {state === 1 ? (
          <div className="image-container">
            <div className="one-col first">
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="one-col second">
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="one-col third">
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="one-col four">
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="one-col third">
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="one-col second">
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="one-col first">
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        ) : state === 2 ? (
          <div className="image-container">
            <div className="one-col first">
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/46/13/5b/46135bb6dfe9e43adb5302fe85bed6e2.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/46/13/5b/46135bb6dfe9e43adb5302fe85bed6e2.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/46/13/5b/46135bb6dfe9e43adb5302fe85bed6e2.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/46/13/5b/46135bb6dfe9e43adb5302fe85bed6e2.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/46/13/5b/46135bb6dfe9e43adb5302fe85bed6e2.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="one-col second">
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/46/13/5b/46135bb6dfe9e43adb5302fe85bed6e2.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/46/13/5b/46135bb6dfe9e43adb5302fe85bed6e2.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/46/13/5b/46135bb6dfe9e43adb5302fe85bed6e2.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/46/13/5b/46135bb6dfe9e43adb5302fe85bed6e2.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/46/13/5b/46135bb6dfe9e43adb5302fe85bed6e2.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="one-col third">
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/46/13/5b/46135bb6dfe9e43adb5302fe85bed6e2.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/46/13/5b/46135bb6dfe9e43adb5302fe85bed6e2.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/46/13/5b/46135bb6dfe9e43adb5302fe85bed6e2.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/46/13/5b/46135bb6dfe9e43adb5302fe85bed6e2.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/46/13/5b/46135bb6dfe9e43adb5302fe85bed6e2.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="one-col four">
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/46/13/5b/46135bb6dfe9e43adb5302fe85bed6e2.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/46/13/5b/46135bb6dfe9e43adb5302fe85bed6e2.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/46/13/5b/46135bb6dfe9e43adb5302fe85bed6e2.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/46/13/5b/46135bb6dfe9e43adb5302fe85bed6e2.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/46/13/5b/46135bb6dfe9e43adb5302fe85bed6e2.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="one-col third">
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/46/13/5b/46135bb6dfe9e43adb5302fe85bed6e2.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/46/13/5b/46135bb6dfe9e43adb5302fe85bed6e2.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/46/13/5b/46135bb6dfe9e43adb5302fe85bed6e2.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/46/13/5b/46135bb6dfe9e43adb5302fe85bed6e2.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/46/13/5b/46135bb6dfe9e43adb5302fe85bed6e2.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="one-col second">
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/46/13/5b/46135bb6dfe9e43adb5302fe85bed6e2.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/46/13/5b/46135bb6dfe9e43adb5302fe85bed6e2.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/46/13/5b/46135bb6dfe9e43adb5302fe85bed6e2.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/46/13/5b/46135bb6dfe9e43adb5302fe85bed6e2.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/46/13/5b/46135bb6dfe9e43adb5302fe85bed6e2.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="one-col first">
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/46/13/5b/46135bb6dfe9e43adb5302fe85bed6e2.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/46/13/5b/46135bb6dfe9e43adb5302fe85bed6e2.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/46/13/5b/46135bb6dfe9e43adb5302fe85bed6e2.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/46/13/5b/46135bb6dfe9e43adb5302fe85bed6e2.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/46/13/5b/46135bb6dfe9e43adb5302fe85bed6e2.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        ) : state === 3 ? (
          <div className="image-container">
            <div className="one-col first">
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="one-col second">
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="one-col third">
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="one-col four">
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="one-col third">
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="one-col second">
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="one-col first">
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/0c/18/3d/0c183dafd58d1ebdbe3cb6865e56d516.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="image-container">
            <div className="one-col first">
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/43/af/6f/43af6f5aa4df62b5bc7748e40f46f4c4.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/43/af/6f/43af6f5aa4df62b5bc7748e40f46f4c4.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/43/af/6f/43af6f5aa4df62b5bc7748e40f46f4c4.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/43/af/6f/43af6f5aa4df62b5bc7748e40f46f4c4.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/43/af/6f/43af6f5aa4df62b5bc7748e40f46f4c4.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="one-col second">
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/43/af/6f/43af6f5aa4df62b5bc7748e40f46f4c4.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/43/af/6f/43af6f5aa4df62b5bc7748e40f46f4c4.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/43/af/6f/43af6f5aa4df62b5bc7748e40f46f4c4.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/43/af/6f/43af6f5aa4df62b5bc7748e40f46f4c4.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/43/af/6f/43af6f5aa4df62b5bc7748e40f46f4c4.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="one-col third">
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/43/af/6f/43af6f5aa4df62b5bc7748e40f46f4c4.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/43/af/6f/43af6f5aa4df62b5bc7748e40f46f4c4.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/43/af/6f/43af6f5aa4df62b5bc7748e40f46f4c4.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/43/af/6f/43af6f5aa4df62b5bc7748e40f46f4c4.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/43/af/6f/43af6f5aa4df62b5bc7748e40f46f4c4.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="one-col four">
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/43/af/6f/43af6f5aa4df62b5bc7748e40f46f4c4.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/43/af/6f/43af6f5aa4df62b5bc7748e40f46f4c4.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/43/af/6f/43af6f5aa4df62b5bc7748e40f46f4c4.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/43/af/6f/43af6f5aa4df62b5bc7748e40f46f4c4.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/43/af/6f/43af6f5aa4df62b5bc7748e40f46f4c4.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="one-col third">
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/43/af/6f/43af6f5aa4df62b5bc7748e40f46f4c4.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/43/af/6f/43af6f5aa4df62b5bc7748e40f46f4c4.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/43/af/6f/43af6f5aa4df62b5bc7748e40f46f4c4.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/43/af/6f/43af6f5aa4df62b5bc7748e40f46f4c4.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/43/af/6f/43af6f5aa4df62b5bc7748e40f46f4c4.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="one-col second">
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/43/af/6f/43af6f5aa4df62b5bc7748e40f46f4c4.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/43/af/6f/43af6f5aa4df62b5bc7748e40f46f4c4.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/43/af/6f/43af6f5aa4df62b5bc7748e40f46f4c4.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/43/af/6f/43af6f5aa4df62b5bc7748e40f46f4c4.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/43/af/6f/43af6f5aa4df62b5bc7748e40f46f4c4.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="one-col first">
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/43/af/6f/43af6f5aa4df62b5bc7748e40f46f4c4.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/43/af/6f/43af6f5aa4df62b5bc7748e40f46f4c4.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/43/af/6f/43af6f5aa4df62b5bc7748e40f46f4c4.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/43/af/6f/43af6f5aa4df62b5bc7748e40f46f4c4.jpg"
                  alt=""
                />
              </div>
              <div className="image-div">
                <img
                  src="https://i.pinimg.com/550x/43/af/6f/43af6f5aa4df62b5bc7748e40f46f4c4.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        )}
      </div>
     
    </div>
  );
}

export default Home;
