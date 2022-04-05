import React, { useState } from 'react'

const Testapp = () => {

    const API_KEY = "4ebc1805db80e6affcefa2f6a2504198"
    const [searchterm, setSearchterm] = useState('');
    const [displaycity, setDisplaycity] = useState("");

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
        console.log("getweatherdetail funvtion run ho gayan hai");
        const URL = `http://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_KEY}`;
        console.log(URL);

        try {
            let res = await fetch(URL)
            console.log(res)
            let data = await res.json()
            if (data.cod != 200) {
                console.log('Location Not Found')
                return
            }
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }




return (<>
    <div>testapp</div>
    <form
        onSubmit={onSubmitfunction}
    >
        <input
            type="text"
            value={searchterm}
            onChange={onChangefunction} />
        <button type='submit'>to search</button>
    </form>

</>
)
}

export default Testapp