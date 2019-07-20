import React from "react";

const HomeHeader =() =>  {
        return (
            <section id="main-slider" className="no-margin">
                <div className="carousel slide" data-ride="carousel">
                    <div className="">
                        <img src="/lavender-back.jpg" className="back-image" alt="not found"/>
                        <div className="item active item active">
                            <div className="container main-container">
                                <div className="col-sm-12">
                                    <div className="carousel-content centered">
                                        <h2 className="boxed animation animated-item-1 fade-down header-title">LAVENDER
                                            OIL -
                                            PRODUCTION</h2>
                                        <br/>
                                        <h3 className="sub-main-title"> The Gold Of
                                            Bulgaria</h3>
                                        <br/> 
                                        <div className="natural-img-container">                                     
                                            <img src="/natural.svg" className="natural-img" alt="not found"/>
                                        </div>
                                        <br/>
                                        <a className="btn btn-md animation bounce-in" href="#services">Learn
                                            More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/natural.svg" className="natural-img-mobile" alt="not found" />
            </section>
        );
}


export default HomeHeader;













