import React from 'react'


const RightBox = () => {

    const featchData = fetch('http://api.openweathermap.org/data/2.5/forecast?',{
        method :"GET",
        headers: {
            "X-Auth-Token":"4ebc1805db80e6affcefa2f6a2504198"
        }
    }).then(res => console.log(res))

  return (<>
    <div className='searchToDo'></div>
    <div className='to-do'></div>
    </>
  )
}

export default RightBox