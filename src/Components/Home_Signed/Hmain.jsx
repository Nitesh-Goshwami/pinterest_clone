import "./Hmain.css";
//import { dataImg } from "./DataImg";
import { ImgBox } from "./ImgBox";
import { useEffect, useState } from "react";
import axios from "axios";
import { Navbar } from "../Navbar";

export function Hmain() {
  const [dataMain, setDataMain] = useState([]);
  const [query, setQuery] = useState("random");
  useEffect(() => {
    handleClick();
  });

  const handleClick = async () => {
    try {
      const res = await axios.get(
        `https://serpapi.com/search.json?q=${query}&tbm=isch&ijn=0&api_key=245412060f4a55df27892b9102e8e22a0b042cebd18e1904404305481174e467`
      );
      setDataMain(res.data.images_results.slice(30));
      //setTask(res.data);
      //setLoading(false);
    } catch (err) {
      console.log("err:", err);
      //setError(true);
      //setLoading(false);
    }
  };

  return (
    <div>
      <div className="navSigned">
        <Navbar setQuery={setQuery} handleClick={handleClick} />
      </div>
      <div className="mediaAlign">
        <div className="signedHome">
          {dataMain.slice(0, 24).map((el) => {
            return <ImgBox item={el} />;
          })}
        </div>
      </div>
    </div>
  );
}
