import { useState } from "react";
import bg from "./img/bg.webp";
import LeftBox from "./LeftBox";
import RightBox from "./RightBox";

function App() {

  const API_KEY = process.env.REACT_APP_API_KEY;
  const [weather,setweather] = useState("");
  const [weathericon, setWeathericon] = useState(`${process.env.REACT_APP_ICON_URL}10n@2x.png`);

  return (
    <div className="App">
      <div className="mainBg">
        <img src={bg} />
        <div className="buller"></div>

        {/* content starts from heair */}
        <div className="container">
          <div className="leftBox">
            <LeftBox />
          </div>
          <div className="rightBox">
            <RightBox />{weathericon}
          </div>
        </div>
      </div>

    </div>

  );
}

export default App;
