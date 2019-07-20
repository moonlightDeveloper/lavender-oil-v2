import React, {useRef} from "react";

const HomeHeader =() =>  {
    const section = useRef(null);
    const scrollToMyRef = () => section.current.scrollIntoView({ behavior: 'smooth' });

        return (
            <section id="main-slider" className="no-margin">
                <div className="carousel slide" data-ride="carousel">
                    <div className="">
                        <img src="/lavender-back.jpg" className="back-image" alt="not found"/>
                        <div className="item active item active">
                            <div className="container main-container">
                                <div className="col-sm-12">
                                    <div className="carousel-content centered">
                                        <h2 className="boxed animation animated-item-1 fade-down header-title">Lavender oil manufacturer</h2>
                                        <br/>
                                        <h3 className="sub-main-title"> The Gold Of
                                            Bulgaria</h3>
                                        <br/> 
                                        <div className="natural-img-container">                                     
                                            <img src="/natural.png" className="natural-img" alt="not found"/>
                                        </div>
                                        <br/>
                                        <a onClick={()=>scrollToMyRef()} className="btn btn-md animation bounce-in">Learn
                                            More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div ref={section} ></div>
            </section>
        );
}


export default HomeHeader;













