import { useState } from "react";
import "./Hmain.css";
import { SaveContext } from "../../Contexts/SaveContext";
import { useContext } from "react";
// import { dataImg } from "./DataImg";

export function ImgBox({ item }) {
  const { saveImgData, setSaveImgData } = useContext(SaveContext);
  const [saveState, setSaveState] = useState(false);
  const [save, setSave] = useState(false);

  const saveDataArr = () => {
    if (!save) {
      setSave(true);
      setSaveImgData([...saveImgData, item]);
    }
  };
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
        <img alt="Hi" src={item.original} />
        {saveState && (
          <>
            <div
              onClick={() => {
                saveDataArr();
              }}
              className="save"
            >
              {!save ? <>Save</> : <>Saved</>}
            </div>
            <div className="bottomTags">
              <a href={item.link} rel="noreferrer" target="_blank">
                <div className="tagSite">{item.source?.slice(0, 10)}...</div>
              </a>

              <div className="tagPin">
                <img src="/Images/uploadIcon.png" alt="Img" />
              </div>
              <div className="tagPin">
                <img src="/Images/moreHoriz.png" alt="Img" />
              </div>
            </div>
          </>
        )}
      </div>

      <div className="imgTitle">{item.title?.slice(0, 20)}...</div>
    </div>
  );
}
