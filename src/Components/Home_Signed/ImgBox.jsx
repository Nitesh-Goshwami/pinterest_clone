import { useState } from "react";
import "./Hmain.css";
// import { dataImg } from "./DataImg";

export function ImgBox({ item }) {
  const [saveState, setSaveState] = useState(false);
  const [save, setSave] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        setSaveState(true);
      }}
      onMouseLeave={() => {
        setSaveState(false);
      }}
    >
      <div>
        <img alt="Hi" src={item.poster} />
        {saveState && (
          <>
            <div
              onClick={() => {
                setSave(true);
              }}
              className="save"
            >
              {!save ? <>Save</> : <>Saved</>}
            </div>
            <div className="bottomTags">
              <a href={item.site} rel="noreferrer" target="_blank">
                <div className="tagSite">
                  {item.site.split(".")[1].slice(0, 10)}...
                </div>
              </a>

              <div className="tagPin"></div>
              <div className="tagPin"></div>
            </div>
          </>
        )}
      </div>

      <div className="imgTitle">{item.title}</div>
    </div>
  );
}
