import React from 'react'
import roadmapPrototype from './roadmapPrototype.png'
import NavBar from '../Navbar/Navbar'

const RoadMap = () => {
    return (
        <div className='bg-[#1B3061]'>
            <NavBar />
            <img src={roadmapPrototype} className='py-[2rem] px-5' />
        </div>
    )
}

export default RoadMap
