import bg from "./img/bg.webp";
import LeftBox from "./LeftBox";
import RightBox from "./RightBox";

function App() {
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
            <RightBox />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
