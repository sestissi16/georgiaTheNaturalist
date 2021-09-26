import React , { Component } from 'react'
import Navigation from '../Components/navigation'
import Footer from '../Components/footer'
import flowerDivider from '../Media/blackFlowerDivider-Transparent-Cropped.png'
import ImageGallery from 'react-image-gallery';
import websiteInfo from '../websiteData'
import './Photos.css';

class Photos extends Component {
    render () {
        const { imageObjects } = websiteInfo.photos
        
        return (
            <div className="Photos">
                <Navigation variant="light" />
                <div id="photosContent">
                    <div id="photosMainDiv">
                        <header className="photosHeader">
                            <h1 id="photosTitle">Photos</h1>
                            <img src={flowerDivider} id="photosFlowerDivider" alt="Flowery dividing line" />
                        </header>
                        <div id="photosGalleryDiv">
                            <ImageGallery items={imageObjects} />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Photos;
