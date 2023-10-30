import React from 'react'
import './Page.css'
import Navbar from './Navbar'
import Side from './Side'
import Side2 from './Side2'
import Content from './Content'

const Home = () => {
    return (
        <div className="whl_sec vh-100  ">
            <Navbar />
            <div className="scnd_secn">
                <Side />
                <Content />
                <Side2 />
            </div>
        </div>
    )
}

export default Home
