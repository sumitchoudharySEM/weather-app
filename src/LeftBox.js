import { FaBeer } from 'react-icons/fa';
import React, { useEffect, useRef } from 'react';
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

    const options = {
        scale: 1.1,
        speed: 200,
        max: 20,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        glare: true
      };

    return (<>
        <div className="side1">
            <Tilt className="datebox" options={options} >
                <img src={require("./img/logo.png")}></img>
            </Tilt>
            <div className='searchbox'>
                <form>
                    <input type="text" ></input>
                    <FaBeer/>
                    
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