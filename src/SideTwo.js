import React from 'react';
import moment from 'moment'

const SideTwo = ({ data }) => {
    console.log(data)
    return (
        <a href='#'>
            <h5>{moment(data.dt_txt).format("dddd hh:mm")}</h5>
            <p >{Math.round(data.main.temp)}&deg;C </p>
            <p >{data.weather[0].main}</p>
            <p className="">{data.weather[0].description}</p>
        </a>
    )
}

export default SideTwo