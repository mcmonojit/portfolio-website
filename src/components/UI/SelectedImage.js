import React from "react";
import InnerImageZoom from "react-inner-image-zoom";
import Fade from "react-reveal/Fade";
import Aux from "../../hoc/Auxilliary";

const SelectedImage = props => {
    const { image } = props;

    return (
        <Aux>
            <Fade right duration={600} delay={100}>
                <div className="gallery__selected-text">
                    <h4 className="gallery__selected-title">{image.caption}</h4>
                    <p className="gallery__selected-subtext">Click on the image to zoom</p>
                </div>
            </Fade>
            <Fade right duration={600}>
                <div className="gallery__selected-img" style={{
                    maxWidth: image.type === "mobile" ? "30rem" :
                        image.type === "tablet" ? "45rem" : null,
                }}>
                    <InnerImageZoom
                        src={image.src}
                        fullscreenOnMobile={true}
                        mobileBreakpoint={700}
                    />
                </div>
            </Fade>
        </Aux>
    )
}

export default SelectedImage;