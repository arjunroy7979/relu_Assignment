import React from 'react'

import filter from '../../Images/filter.png'
const Navbar = () => {
    return (
        <>
            <div className="hdr_bar ">
                <div className="lgo btn_div">
                    <h1 className="lgo_letr">LOGO</h1>
                </div>
                <div className="dv_inpt">
                    <i className="fas fa-search"></i>
                    <input type="text" className="inpt_txt" placeholder="Search here..." />
                    <div className="fl_m">
                        <img src={filter} alt="filter" />
                        <p>filters</p>
                    </div>
                </div>
                <div className="btn_div">
                    <button className="div_bttn">Become a seller</button>
                </div>
            </div>
        </>
    )
}

export default Navbar
