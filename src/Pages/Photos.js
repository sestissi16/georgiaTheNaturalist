import React , { Component } from 'react'
import Navigation from '../Components/navigation'
import Footer from '../Components/footer'
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
                originalAlt: "Gerogia in the field with some reptiles smiling",
                thumbnailAlt: "Gerogia in the field with some reptiles smiling",
            },
            {
                original: fieldWork2,
                thumbnail: fieldWork2Thumbnail,
                originalAlt: "Gerogia in the field holding a frog enthusiastically in the air",
                thumbnailAlt: "Gerogia in the field holding a frog enthusiastically in the air",
            },
            {
                original: fieldWork3,
                thumbnail: fieldWork3Thumbnail,
                originalAlt: "Gerogia in the field holding a turtle in the air",
                thumbnailAlt: "Gerogia in the field holding a turtle in the air",
            },
            {
                original: fieldWork4,
                thumbnail: fieldWork4Thumbnail,
                originalAlt: "Gerogia in the field holding a reptile in the air",
                thumbnailAlt: "Gerogia in the field holding a reptile in the air",
            },
            {
                original: idnrSnake,
                thumbnail: idnrSnakeThumbnail,
                originalAlt: "Gerogia working with the Indiana Department of Natural Resources holding a snake",
                thumbnailAlt: "Gerogia working with the Indiana Department of Natural Resources holding a snake",
            },
            {
                original: juno1,
                thumbnail: juno1Thumbnail,
                originalAlt: "Gerogia leading a program showing a snake to a toddler in an orange hat",
                thumbnailAlt: "Gerogia leading a program showing a snake to a toddler in an orange hat",
            },
            {
                original: juno2,
                thumbnail: juno2Thumbnail,
                originalAlt: "Gerogia leading a program in a garden showing a snake to toddlers",
                thumbnailAlt: "Gerogia leading a program in a garden showing a snake to toddlers",
            },
            {
                original: juno3,
                thumbnail: juno3Thumbnail,
                originalAlt: "Gerogia leading a program in a garden with a snake coiled around her wrist",
                thumbnailAlt: "Gerogia leading a program in a garden with a snake coiled around her wrist",
            },
            {
                original: juno4,
                thumbnail: juno4Thumbnail,
                originalAlt: "Gerogia leading a program with toddlers gathered around and a snake in her outstretched hands",
                thumbnailAlt: "Gerogia leading a program with toddlers gathered around and a snake in her outstretched hands",
            },
            {
                original: juno5,
                thumbnail: juno5Thumbnail,
                originalAlt: "Gerogia leading a program in a garden with a toddler at her hip inspecting the snake",
                thumbnailAlt: "Gerogia leading a program in a garden with a toddler at her hip inspecting the snake",
            },
            {
                original: juno6,
                thumbnail: juno6Thumbnail,
                originalAlt: "Gerogia leading a program in a garden showing a snake to toddlers excitedly listening",
                thumbnailAlt: "Gerogia leading a program in a garden showing a snake to toddlers excitedly listening",
            },
            {
                original: juno7,
                thumbnail: juno7Thumbnail,
                originalAlt: "Gerogia leading a program in a garden allowing a toddler to safely hold a snake",
                thumbnailAlt: "Gerogia leading a program in a garden allowing a toddler to safely hold a snake",
            },
            {
                original: mounds1,
                thumbnail: mounds1Thumbnail,
                originalAlt: "Gerogia working for IDNR showing a snake shedded skin to a group of kids",
                thumbnailAlt: "Gerogia working for IDNR showing a snake shedded skin to a group of kids",
            },
            {
                original: mounds2,
                thumbnail: mounds2Thumbnail,
                originalAlt: "Gerogia working for IDNR showing a medium sized snake to a group of kids",
                thumbnailAlt: "Gerogia working for IDNR showing a medium sized snake to a group of kids",
            },
            {
                original: mounds3,
                thumbnail: mounds3Thumbnail,
                originalAlt: "Gerogia working for IDNR showing a turtle to a group of kids",
                thumbnailAlt: "Gerogia working for IDNR showing a turtle to a group of kids",
            },
            {
                original: ringneck,
                thumbnail: ringneckThumbnail,
                originalAlt: "Gerogia outside in a nice outfit holding a tiny snake in her hand",
                thumbnailAlt: "Gerogia outside in a nice outfit holding a tiny snake in her hand",
            },
            {
                original: stink,
                thumbnail: stinkThumbnail,
                originalAlt: "Gerogia holding a baby snapping turtle named stink pot",
                thumbnailAlt: "Gerogia holding a baby snapping turtle named stink pot",
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
                <Footer />
            </div>
        );
    }
}

export default Photos;
