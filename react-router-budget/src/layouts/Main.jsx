//rrd imports

import { Outlet, useLoaderData } from 'react-router-dom';

//assets
import wave from "../assets/wave.svg";

//helper functions
import { fetchData } from '../helpers';
//loader
export function mainLoader(){
    const userName = fetchData("userName");
    return { userName}
}
import React from 'react'

const Main = () => {
  const {userName} = useLoaderData()
    return (
    <div>
      <h1>main</h1>
     <main><Outlet/></main>
     <img src="" alt="" />
    </div>
  )
}

export default Main
