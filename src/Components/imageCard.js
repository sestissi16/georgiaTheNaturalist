import React ,  { Component } from 'react'
import flatDesignAbstract from '../Media/flat-design-abstract-floral-background/3387793.jpg'
import handPaintedWatercolor from '../Media/hand-painted-watercolor-nature-background/5333978.jpg'
import handPaintedWatercolorForest from '../Media/hand-painted-watercolor-nature-background-forest/5238188.jpg'
import leavesBackground from '../Media/leaves-background-with-metallic-foil/3915228.jpg'
import natureScenceWithRiver from '../Media/nature-scene-with-river-hills-forest-mountain-landscape-flat-cartoon-style-illustration/Scene-24.jpg'
import realisticWood from '../Media/realistic-wood-texture-background/86.jpg'
import './imageCard.css';

class ImageCard extends Component {
    render () {
        const { image, link, linkText } = this.props
        if (image === 'flat-design-abstract') {
            return (
                <div className="ImageCard" id="flatDesignCard">
                    <div className="imageCardImageDiv">
                        <img className="imageCardImage" id="flatDesignImage" src={flatDesignAbstract} alt="flat design abstract floral background"/>
                    </div>
                    <div className="imageCardInfo">
                        <a href={link}>{linkText}</a>
                    </div>
                </div>
            );
        } else if (image === "leaves-background" ) {
            return (
                <div className="ImageCard" id="leavesBacgroundCard">
                    <div className="imageCardImageDiv">
                        <img className="imageCardImage" id="leavesBackground" src={leavesBackground} alt="leaves background with metallic foil"/>
                    </div>
                    <div className="imageCardInfo">
                        <a href={link}>{linkText}</a>
                    </div>
                </div>
            );
        } else if (image === "hand-painted-watercolor-nature") {
            return (
                <div className="ImageCard" id="handPaintedNatureCard">
                    <div className="imageCardImageDiv">
                        <img className="imageCardImage" id="handPaintedNature" src={handPaintedWatercolor} alt="hand painted watercolor nature background"/>
                    </div>
                    <div className="imageCardInfo">
                        <a href={link}>{linkText}</a>
                    </div>
                </div>
            );
        } else if (image === "realistic-wood-texture") {
            return (
                <div className="ImageCard" id="realisticWoodTextureCard">
                    <div className="imageCardImageDiv">
                        <img className="imageCardImage" id="realisticWoodTexture" src={realisticWood} alt="realistic wood texture background"/>
                    </div>
                    <div className="imageCardInfo">
                        <a href={link}>{linkText}</a>
                    </div>
                </div>
            );
        } else if (image === "nature-scene-with-river") {
            return (
                <div className="ImageCard" id="natureSceneWithRiverCard">
                    <div className="imageCardImageDiv">
                        <img className="imageCardImage" id="natureSceneWithRiver" src={natureScenceWithRiver} alt="nature scene with river hills forest mountain landscape"/>
                    </div>
                    <div className="imageCardInfo">
                        <a href={link}>{linkText}</a>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="ImageCard" id="handPaintedForestCard">
                    <div className="imageCardImageDiv">
                        <img className="imageCardImage" id="handPaintedForestNature" src={handPaintedWatercolorForest} alt="hand painted watercolor nature background forest"/>
                    </div>
                    <div className="imageCardInfo">
                        <a href={link}>{linkText}</a>
                    </div>
                </div>
            );
        }
    }
}

ImageCard.defaultProps = {
    link: "", 
    linkText: "",
    image: "",
    alt: "",
}

export default ImageCard;
