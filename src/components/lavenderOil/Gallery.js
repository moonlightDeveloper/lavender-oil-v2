import React, {Component} from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import AOS from "aos";


const RESPONSIVE_CLASS = 'col-sm-6 col-xs-12 col-md-3';

const images = [
    "/gallery_1.jpg",
    "/gallery_2.jpg",
    "/gallery_3.jpg",
    "/gallery_4.jpg",
    "/gallery_5.jpg",
    "/gallery_6.jpg",
    "/gallery_7.jpg",
    "/gallery_8.jpg"
];


class Gallery extends Component {

    constructor(props) {
        super(props);
     
        this.state = {
          photoIndex: 0,
          isOpen: false,
        };
      }

    componentDidMount() {
        AOS.init();
    }

    componentWillReceiveProps() {
        AOS.refresh();
    }  

    renderPhotos = () => {
        return images.map((url, i) =>
            <div key="url" className={RESPONSIVE_CLASS + ' img-animation'}>
                <div className="center team-member" onClick={() => this.setState({ isOpen: true , photoIndex: i})}>
                    <div className="team-image">
                        <div className="front card">
                            <span className="more-icon"><i class="fas fa-plus"></i></span>                                 
                            <div className="production-img"
                                    style={{backgroundImage: `url(${url})`}} data-aos="flip-up"
                                    data-aos-delay="0" data-aos-duration="1000">
                                      <div className="img-transperant"></div>
                                      <div className="img-gradient"></div>
                            </div>
                        </div>
                        <div className="back card"></div>
                    </div>
                </div>
            </div>
      );
    }

    render() {
        const { photoIndex, isOpen } = this.state;
        return (
            <section className="gallery-section">
                <div className="container">
                    <div className="gap"></div>
                    <div className="gap fade-down section-heading">
                        <h2 className="prpl-title">Gallery</h2>                     
                    </div>
                    <div id="meet-the-team" className="row">
                    {this.renderPhotos()}                        
                    </div>
                </div>  
                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                        this.setState({
                            photoIndex: (photoIndex + images.length - 1) % images.length,
                        })
                        }
                        onMoveNextRequest={() =>
                        this.setState({
                            photoIndex: (photoIndex + 1) % images.length,
                        })
                        }
                    />
                    )}            
            </section>
        );
    }
}


export default Gallery;
