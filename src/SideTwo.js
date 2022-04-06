import React from 'react';
import moment from 'moment'

const SideTwo = ({ data }) => {
    let icon_needed = `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`
    console.log(data)
    return (
        <a href='#'>
            <div className="a">
                
                <div className="flex">
                <img src={icon_needed} alt="" />
                </div>
                <h5>{moment(data.dt_txt).format("dddd hh:mm")}</h5>
                <p >{Math.round(data.main.temp)}&deg;C </p>
                <p >{data.weather[0].main}</p>
                <p className="">{data.weather[0].description}</p>
            </div>
        </a>
    )
}

export default SideTwo