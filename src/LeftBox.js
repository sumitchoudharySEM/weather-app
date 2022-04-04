import { FaSearchLocation } from 'react-icons/fa';
import { BiCurrentLocation } from 'react-icons/bi';
import React, { useEffect, useRef, useState } from 'react';
import VanillaTilt from 'vanilla-tilt';

function Tilt(props) {
    const { options, ...rest } = props;
    const tilt = useRef(null);

    useEffect(() => {
        VanillaTilt.init(tilt.current, options);
    }, [options]);

    return <div ref={tilt} {...rest} />;
}

const LeftBox = () => {
    const [city, setCity] = useState("");
    const options = {
        scale: 1.1,
        speed: 200,
        max: 20,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        glare: true
    };
    const HandleSubmit = (e) => {
        e.preventDefault();
        const myCity =city;
        console.log(myCity);
    }

    return (<>
        <div className="side1">
            <Tilt className="datebox" options={options} >
                <img src={require("./img/logo.png")}></img>
            </Tilt>
            <div className='searchbox'>
                <form onClick={HandleSubmit}>
                    <div className="input">
                        <input
                            placeholder='search city for weather status'
                            type="text"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        >
                        </input>
                        <button
                            className="searchbutten"
                            type='submit'
                            
                        >
                            <FaSearchLocation />
                        </button>
                        <button className='btn2'> <BiCurrentLocation /> Use myLocation : {city} </button>
                    </div>

                </form>
            </div>
            <Tilt className="motobox" options={options} />
        </div>
        <div className="side2">
            <h2>see more on weather</h2>
            <div className='moreon'></div>
            <div className='moreon'></div>
            <div className='moreon'></div>
            <div className='moreon'></div>

        </div>
    </>
    )
}

export default LeftBox