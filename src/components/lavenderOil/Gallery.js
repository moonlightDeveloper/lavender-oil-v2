import React, {Component} from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import AOS from "aos";


const RESPONSIVE_CLASS = 'col-sm-6 col-xs-12 col-md-3';

const images = [
    {src: require("../../assets/images/gallery/gallery_1.jpg")},
    {src: require("../../assets/images/gallery/gallery_2.jpg")},
    {src: require("../../assets/images/gallery/gallery_3.jpg")},
    {src: require("../../assets/images/gallery/gallery_4.jpg")},
    {src: require("../../assets/images/gallery/gallery_5.jpg")},
    {src: require("../../assets/images/gallery/gallery_6.jpg")},
    {src: require("../../assets/images/gallery/gallery_7.jpg")},
    {src: require("../../assets/images/gallery/gallery_8.jpg")},
    {src: require("../../assets/images/gallery/gallery_9.jpg")},
    {src: require("../../assets/images/gallery/gallery_10.jpg")},
    {src: require("../../assets/images/gallery/gallery_11.jpg")},
    {src: require("../../assets/images/gallery/gallery_12.jpg")},
    {src: require("../../assets/images/gallery/gallery_13.jpg"), caption: `"ТРИВИВА" ООД - дестилерия за етерични масла Добрич`},
    {src: require("../../assets/images/gallery/gallery_14.jpg"), caption: `"ТРИВИВА" ООД - дестилерия за етерични масла Добрич`},
    {src: require("../../assets/images/gallery/gallery_15.jpg"), caption: `"ТРИВИВА" ООД - дестилерия за етерични масла Добрич`},
    {src: require("../../assets/images/gallery/gallery_16.jpg"), caption: `"ТРИВИВА" ООД - дестилерия за етерични масла Добрич`},

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
        return images.map((img, i) =>
            <div key={i} className={RESPONSIVE_CLASS + ' img-animation'}>
                <div className="center team-member" onClick={() => this.setState({ isOpen: true , photoIndex: i})}>
                    <div className="team-image">
                        <div className="front card">
                            <span className="more-icon"><i className="fas fa-plus"></i></span>                                 
                            <div className="production-img"
                                    style={{backgroundImage: `url(${img.src})`}} data-aos="flip-up"
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
                        mainSrc={images[photoIndex].src}
                        nextSrc={images[(photoIndex + 1) % images.length].src}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length].src}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        imageCaption={!!images[photoIndex].caption && images[photoIndex].caption}
                        onMovePrevRequest={() =>
                        this.setState({
                            photoIndex: (photoIndex + images.length - 1) % images.length,
                        })
                        }
                        enableZoom={false}
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
