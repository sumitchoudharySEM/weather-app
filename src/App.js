
import bg from "./img/bg.webp";
import RightBox from "./RightBox";
import { FaSearchLocation } from "react-icons/fa";
import { BiCurrentLocation } from "react-icons/bi";
import React, { useEffect, useRef, useState } from "react";
import VanillaTilt from "vanilla-tilt";
import moment from "moment";

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

function App() {

  const API_KEY = process.env.REACT_APP_API_KEY;
  const [searchterm, setSearchterm] = useState('');
  const [city, setcity] = useState("weather");
  const [weatherData, setWeatherData] = useState();
  const [weathericon, setWeathericon] = useState(`${process.env.REACT_APP_ICON_URL}10n@2x.png`);
  const options = { scale: 1.1, speed: 200, max: 20, easing: "cubic-bezier(.03,.98,.52,.99)", glare: true, };

  const onChangefunction = (e) => {
    const valueofsearchterm = e.target.value;
    setSearchterm(valueofsearchterm);
    console.log(valueofsearchterm);
  }
  const onSubmitfunction = (event) => {
    event.preventDefault();
    console.log(searchterm);
    getWeatherDetail(searchterm);
  }

  const getWeatherDetail = async (location) => {
    setWeatherData([]);
    console.log("getweatherdetail funvtion run ho gayan hai");
    const method_result = (typeof location === 'string') ? `q=${location}` : `lat=${location[0]}&lon=${location[1]}`
    const URL = `http://api.openweathermap.org/data/2.5/forecast?${method_result}&appid=${API_KEY}&units=metric&cnt=5&exclude=hourly,minutely`;
    console.log(URL);

    try {
      let res = await fetch(URL)
      // console.log(res)
      let data = await res.json()
      if (data.cod != 200) {
        console.log('Location Not Found')
        return
      }
      setcity(data.city.name)
      setWeatherData(data)
      console.log(data)
      console.log(data.city.name)
      console.log(data.list[0].main.temp)
    } catch (error) {
      console.log(error)
    }
  }
  const myLocation = (pos) => {
    var { lat, long } = pos.coords;
    console.log({ lat, long })
    getWeatherDetail({ lat, long })
  }
  function error(err) {
    console.warn(`ERROR coad is:(${err.code}): ${err.message}`);
  }

  return (
    <div className="App">
      <div className="mainBg">
        <img src={bg} />
        <div className="buller"></div>

        {/* content starts from heair */}
        <div className="container">
          <div className="leftBox">
            <div className="side1">
              <Tilt className="datebox" options={options}>
                <img src={require("./img/logo.png")}></img>
                <h2>
                  {moment().format("MMMM")}
                  <span>{moment().format("yyyy")}</span>
                </h2>
                <div className="datehover">
                  <div className="span1">{moment().format("DD")}</div>
                </div>
              </Tilt>
              <div className="searchbox">
                <form onSubmit={onSubmitfunction}>
                  <div className="input">
                    <input
                      placeholder="search city for weather status"
                      type="text"
                      value={searchterm}
                      onChange={onChangefunction}
                    ></input>
                    <button className="searchbutten" type="submit">
                      <FaSearchLocation />
                    </button>
                    <button className="btn2" onClick={() => {
                      navigator.geolocation.getCurrentPosition(myLocation, error);
                    }}>
                      <BiCurrentLocation /> Use myLocation
                    </button>
                  </div>
                </form>
              </div>
              <Tilt className="motobox" options={options} >
                {!weatherData?.length === 0 ?
                  <h1 >their is no data</h1>
                  :
                  <div>hii </div>
                }
              </Tilt>
            </div>
            <div className="side2">
              <h2>see more on {city}</h2>
              <a href="#"></a>
              <a href="#"></a>
              <a href="#"></a>
              <a href="#"></a>
            </div>
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
