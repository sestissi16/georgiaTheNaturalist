import React , { Component } from 'react'
import Navigation from '../Components/navigation'
import flowerDivider from '../Media/blackFlowerDivider-Transparent-Cropped.png'
import fieldWork1 from '../Media/galleryPhotos/Field Work_May2021.jpg'
import fieldWork1Thumbnail from '../Media/galleryPhotoThumbnails/FieldWork_May2021_200x150.jpg'
import fieldWork2 from '../Media/galleryPhotos/Field Work_May2021_2.jpg'
import fieldWork2Thumbnail from '../Media/galleryPhotoThumbnails/FieldWork_May2021_2_200x150.jpg'
import fieldWork3 from '../Media/galleryPhotos/Field Work_May2021_3.jpg'
import fieldWork3Thumbnail from '../Media/galleryPhotoThumbnails/FieldWork_May2021_3_200x150.jpg'
import fieldWork4 from '../Media/galleryPhotos/Field Work_May2021_4.jpg'
import fieldWork4Thumbnail from '../Media/galleryPhotoThumbnails/FieldWork_May2021_4_200x150.jpg'
import idnrSnake from '../Media/galleryPhotos/IDNR+Snake.png'
import idnrSnakeThumbnail from '../Media/galleryPhotoThumbnails/IDNR+Snake_120x150.png'
import juno1 from '../Media/galleryPhotos/Juno_OneWorld1.jpg'
import juno1Thumbnail from '../Media/galleryPhotoThumbnails/Juno_OneWorld1_200x150.jpg'
import juno2 from '../Media/galleryPhotos/Juno_OneWorld2.jpg'
import juno2Thumbnail from '../Media/galleryPhotoThumbnails/Juno_OneWorld2_113x150.jpg'
import juno3 from '../Media/galleryPhotos/Juno_OneWorld3.jpg'
import juno3Thumbnail from '../Media/galleryPhotoThumbnails/Juno_OneWorld3_113x150.jpg'
import juno4 from '../Media/galleryPhotos/Juno_OneWorld4.jpg'
import juno4Thumbnail from '../Media/galleryPhotoThumbnails/Juno_OneWorld4_113x150.jpg'
import juno5 from '../Media/galleryPhotos/Juno_OneWorld5.jpg'
import juno5Thumbnail from '../Media/galleryPhotoThumbnails/Juno_OneWorld5_113x150.jpg'
import juno6 from '../Media/galleryPhotos/Juno_OneWorld6.jpg'
import juno6Thumbnail from '../Media/galleryPhotoThumbnails/Juno_OneWorld6_113x150.jpg'
import juno7 from '../Media/galleryPhotos/Juno_OneWorld7.jpg'
import juno7Thumbnail from '../Media/galleryPhotoThumbnails/Juno_OneWorld7_113x150.jpg'
import ImageGallery from 'react-image-gallery';
import mounds1 from '../Media/galleryPhotos/Mounds_state_recreational_area.jpeg'
import mounds1Thumbnail from '../Media/galleryPhotoThumbnails/Mounds_state_recreational_area_200x150.jpg'
import mounds2 from '../Media/galleryPhotos/Mounds_state_recreational_area_2.jpeg'
import mounds2Thumbnail from '../Media/galleryPhotoThumbnails/Mounds_state_recreational_area_2_200x150.jpg'
import mounds3 from '../Media/galleryPhotos/Mounds_state_recreational_area_3.jpeg'
import mounds3Thumbnail from '../Media/galleryPhotoThumbnails/Mounds_state_recreational_area_3_200x150.jpg'
import ringneck from '../Media/galleryPhotos/Ringneck_At_WildmanWoods.jpg'
import ringneckThumbnail from '../Media/galleryPhotoThumbnails/Ringneck_At_WildmanWoods_84x150.jpg'
import stink from '../Media/galleryPhotos/Stink_Pot.jpg'
import stinkThumbnail from '../Media/galleryPhotoThumbnails/Stink_Pot_200x150.jpg'
// import websiteInfo from '../websiteData'
import './Photos.css';

class Photos extends Component {
    render () {
        const images = [
            {
                original: fieldWork1,
                thumbnail: fieldWork1Thumbnail,
            },
            {
                original: fieldWork2,
                thumbnail: fieldWork2Thumbnail,
            },
            {
                original: fieldWork3,
                thumbnail: fieldWork3Thumbnail,
            },
            {
                original: fieldWork4,
                thumbnail: fieldWork4Thumbnail,
            },
            {
                original: idnrSnake,
                thumbnail: idnrSnakeThumbnail,
            },
            {
                original: juno1,
                thumbnail: juno1Thumbnail,
            },
            {
                original: juno2,
                thumbnail: juno2Thumbnail,
            },
            {
                original: juno3,
                thumbnail: juno3Thumbnail,
            },
            {
                original: juno4,
                thumbnail: juno4Thumbnail,
            },
            {
                original: juno5,
                thumbnail: juno5Thumbnail,
            },
            {
                original: juno6,
                thumbnail: juno6Thumbnail,
            },
            {
                original: juno7,
                thumbnail: juno7Thumbnail,
            },
            {
                original: mounds1,
                thumbnail: mounds1Thumbnail,
            },
            {
                original: mounds2,
                thumbnail: mounds2Thumbnail,
            },
            {
                original: mounds3,
                thumbnail: mounds3Thumbnail,
            },
            {
                original: ringneck,
                thumbnail: ringneckThumbnail,
            },
            {
                original: stink,
                thumbnail: stinkThumbnail,

            },
        ];
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
                            <ImageGallery items={images} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Photos;
