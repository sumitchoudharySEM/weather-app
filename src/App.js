
import bg from "./img/bg_2.jpg";
import RightBox from "./RightBox";
import { FaSearchLocation } from "react-icons/fa";
import { BiCurrentLocation } from "react-icons/bi";
import React, { useEffect, useRef, useState } from "react";
import VanillaTilt from "vanilla-tilt";
import moment from "moment";
import SideTwo from "./SideTwo";

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

function App() {

  const API_KEY = "4ebc1805db80e6affcefa2f6a2504198";
  const [searchterm, setSearchterm] = useState('');
  const [city, setcity] = useState("weather");
  const [weatherData, setWeatherData] = useState([]);
  const [weathericon, setWeathericon] = useState();
  const icon = weathericon;
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
    const URL = `http://api.openweathermap.org/data/2.5/forecast?${method_result}&appid=4ebc1805db80e6affcefa2f6a2504198&units=metric&cnt=5&exclude=hourly,minutely`;
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
       setWeathericon("http://openweathermap.org/img/wn/"+ data.list[0].weather[0].icon+ "@2x.png");
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
    <div className="mainBg">
      <img src={bg} />
      {/* <div className="buller"></div> */}

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
              {weatherData.length === 0 ? <>
                <h1 >Their is no data</h1>
                <h3>serch city to get data </h3>
              </>
                : <div className="data_show">
                <img src={weathericon}></img>
                  <h2>{weatherData.list[0].weather[0].main} </h2>
                  <h4>{weatherData.list[0].weather[0].description}</h4>
                  <h3> {Math.round(weatherData.list[0].main.temp * 10) / 10}{'\u00b0'}C</h3>
                  <h6> {weatherData.list[0].main.temp_min} {'\u00b0'}C - {weatherData.list[0].main.temp_max}{'\u00b0'}C </h6>
                  <h5>Feels Like :{weatherData.list[0].main.feels_like} {'\u00b0'}C</h5>
                </div>

              }
              <h1></h1>
            </Tilt>
          </div>
          <div className="side2">
            <h2>see more on {city}</h2>
            {/* <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="" /> */}
            {weatherData.length === 0 ?
            <>
            <div>data will display heair</div>
            </> :
            weatherData.list.map((element, index) => {
              if (index > 0) {
                return (
                  <SideTwo data={element} />
                )
              }
            })
            }
          </div>
        </div>
        <div className="rightBox">

          <RightBox />
        </div>
      </div>
    </div>
  );
}

export default App;
