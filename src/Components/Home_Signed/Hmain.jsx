import "./Hmain.css";
import { dataImg } from "./DataImg";
import { ImgBox } from "./ImgBox";

export function Hmain() {
  return (
    <div>
      <div className="navSigned"></div>
      <div style={{ padding: "0px 16px 0px 16px" }}>
        <div className="signedHome">
          {dataImg.map((el) => {
            return <ImgBox item={el} />;
          })}
        </div>
      </div>
    </div>
  );
}
