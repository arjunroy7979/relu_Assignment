import React from 'react'
// import one from '../../Images/one.png'
// import two from '../../Images/two.png'  
// import three from '../../Images/three.png'  
import data from '../../data/data.json'
const Side2 = () => {
    return (
        <div className=''>
            <div className="side_bar ">
                <div className="inf_dtl">
                    <div className="actve">Artist</div>
                    <div>Photographer</div>
                </div>
                <div className="side_vr boxes overflow-auto">
                    {
                        data && data.map((value, index) => {
                            return (
                                <div className="inf_img1" key={index}>
                                    <img src={value.img2} alt="" />
                                    <div className="pxl_img">
                                        <img src={value.img} alt="" />
                                        <span className='online'></span>
                                        <div>
                                            <p>{value.name}</p>
                                            <span className='s-tag'>{value.tag}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Side2
