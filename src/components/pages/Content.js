import React from 'react'
import contentdata from '../../data/contentdata.json'

const Content = () => {
    return (
        <div>
            <div className="tab-content " id="v-pills-tabContent">
                {
                    contentdata && contentdata.map((v, i) => {
                        return (
                            <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel"
                                aria-labelledby="v-pills-home-tab">
                                <div className="hm_sec">
                                    <div className="aw_sg">
                                        <div className="prf_sec">
                                            <div className="img_prn">
                                                <img src={v.img} alt="" />
                                            </div>
                                            <div className="prn_dtl">
                                                <h3>{v.name}</h3>
                                                <span>{v.tag}</span>
                                            </div>
                                        </div>
                                        <div>
                                            <i className="fas fa-ellipsis-v"></i>
                                        </div>
                                    </div>
                                    <div className="prn_cnt">
                                        <p>{v.details}</p>
                                    </div>
                                    <div className="bk_img">
                                        <img src={v.img2} alt="" />
                                    </div>
                                    <div className="l_s_c">
                                        <div className="lk">
                                            <img src={v.logo} alt="" />
                                            <p>9.8k</p>
                                        </div>
                                        <div className="lk">
                                            <img src={v.logo2} alt="" />
                                            <p>8.6k</p>
                                        </div>
                                        <div className="lk">
                                            <img src={v.logo3} alt="" />
                                            <p>7.2k</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

                <div className="tab-pane fade" id="v-pills-profile" role="tabpanel"
                    aria-labelledby="v-pills-profile-tab">
                    <div className="hm_sec">
                        notification
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content
