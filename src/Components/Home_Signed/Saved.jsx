import "./Hmain.css";
// import { loadData, saveData } from "../../Utils/localStorage";
//import { dataImg } from "./DataImg";
import { SavedImgBox } from "./SavedImgBox";
import { useState } from "react";
import axios from "axios";
import { Navbar } from "../Navbar";
import { SaveContext } from "../../Contexts/SaveContext";
import { useContext } from "react";

export function SavedProfile() {
  const { saveImgData } = useContext(SaveContext);
  const [setDataMain] = useState([]);
  const [query, setQuery] = useState("random");

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
      <div className="profileInfo">
        <div className="profileImgMain">
          <img
            src="https://i.pinimg.com/75x75_RS/2e/c8/07/2ec807727afae4e4fe1e0f88cf976128.jpg"
            alt="img"
          />
        </div>
        <div>Albart Jose</div>
        <div>@albartbtme</div>
        <div>0 following</div>
        <div className="shareAndEdit">
          <div>Share</div>
          <div>Edit Profile</div>
        </div>
      </div>
      <div className="mediaAlign">
        <div className="signedHome">
          {saveImgData.map((el) => {
            return <SavedImgBox item={el} />;
          })}
        </div>
      </div>
    </div>
  );
}
