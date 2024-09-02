import React, { useEffect, useRef, useState } from 'react';
import OpenSeadragon from "../viewer/openseadragon/openseadragon";
import TestImage from "../test_image/test_image1.jpg";
import Minji from "../test_image/newjeans-minji.jpg";
import zoomInRest from "../viewer/openseadragon/images/zoomin_rest.png";
import zoomInGroup from "../viewer/openseadragon/images/zoomin_grouphover.png";
import zoomInHover from "../viewer/openseadragon/images/zoomin_hover.png";
import zoomInDown from "../viewer/openseadragon/images/zoomin_pressed.png";
import zoomOutRest from "../viewer/openseadragon/images/zoomout_rest.png";
import zoomOutGroup from "../viewer/openseadragon/images/zoomout_grouphover.png";
import zoomOutHover from "../viewer/openseadragon/images/zoomout_hover.png";
import zoomOutDown from "../viewer/openseadragon/images/zoomout_pressed.png";
import homeRest from "../viewer/openseadragon/images/home_rest.png";
import homeGroup from "../viewer/openseadragon/images/home_grouphover.png";
import homeHover from "../viewer/openseadragon/images/home_hover.png";
import homeDown from "../viewer/openseadragon/images/home_pressed.png";
import fullPageRest from "../viewer/openseadragon/images/fullpage_rest.png";
import fullPageGroup from "../viewer/openseadragon/images/fullpage_grouphover.png";
import fullPageHover from "../viewer/openseadragon/images/fullpage_hover.png";
import fullPageDown from "../viewer/openseadragon/images/fullpage_pressed.png";
import rotateLeftRest from "../viewer/openseadragon/images/rotateleft_rest.png";
import rotateLeftGroup from "../viewer/openseadragon/images/rotateleft_grouphover.png";
import rotateLeftHover from "../viewer/openseadragon/images/rotateleft_hover.png";
import rotateLeftDown from "../viewer/openseadragon/images/rotateleft_pressed.png";
import rotateRightRest from "../viewer/openseadragon/images/rotateright_rest.png";
import rotateRightGroup from "../viewer/openseadragon/images/rotateright_grouphover.png";
import rotateRightHover from "../viewer/openseadragon/images/rotateright_hover.png";
import rotateRightDown from "../viewer/openseadragon/images/rotateright_pressed.png";
import flipRest from "../viewer/openseadragon/images/flip_rest.png";
import flipGroup from "../viewer/openseadragon/images/flip_grouphover.png";
import flipHover from "../viewer/openseadragon/images/flip_hover.png";
import flipDown from "../viewer/openseadragon/images/flip_pressed.png";
import prevRest from "../viewer/openseadragon/images/previous_rest.png";
import prevGroup from "../viewer/openseadragon/images/previous_grouphover.png";
import prevHover from "../viewer/openseadragon/images/previous_hover.png";
import prevDown from "../viewer/openseadragon/images/previous_pressed.png";
import nextRest from "../viewer/openseadragon/images/next_rest.png";
import nextGroup from "../viewer/openseadragon/images/next_grouphover.png";
import nextHover from "../viewer/openseadragon/images/next_hover.png";
import nextDown from "../viewer/openseadragon/images/next_pressed.png";
import "../assets/test.css";

const Annotation = () => {
    const images = [
        {
            type: "image",
            url: TestImage
        },
        {
            type: "image",
            url: Minji
        }
    ]

    useEffect(() => {
        const viewer = OpenSeadragon({
            id: "openSeaDragon",
            animationTime: 0.5,
            blendTime: 0.1,
            constrainDuringPan: true,
            maxZoomPixelRatio: 2,
            minZoomLevel: 1,
            zoomPerScroll: 2,
            showNavigator: true,
            navigatorPosition: "ABSOLUTE",
            navigatorTop: "40px",
            navigatorLeft: "4px",
            navigatorHeight: "120px",
            navigatorWidth: "145px",
            tileSources: images,
            showRotationControl : true,
            showFlipControl : true,
            sequenceMode: true,
            showReferenceStrip: true,
            referenceStripSizeRatio: 0.1,
            tooltipIcons : {
                zoomInRest : zoomInRest,
                zoomInGroup : zoomInGroup,
                zoomInHover : zoomInHover,
                zoomInDown : zoomInDown,
                zoomOutRest : zoomOutRest,
                zoomOutGroup : zoomOutGroup,
                zoomOutHover : zoomOutHover,
                zoomOutDown : zoomOutDown,
                homeRest : homeRest,
                homeGroup : homeGroup,
                homeHover : homeHover,
                homeDown : homeDown,
                fullPageRest : fullPageRest,
                fullPageGroup : fullPageGroup,
                fullPageHover : fullPageHover,
                fullPageDown : fullPageDown,
                rotateLeftRest : rotateLeftRest,
                rotateLeftGroup : rotateLeftGroup,
                rotateLeftHover : rotateLeftHover,
                rotateLeftDown : rotateLeftDown,
                rotateRightRest : rotateRightRest,
                rotateRightGroup : rotateRightGroup,
                rotateRightHover : rotateRightHover,
                rotateRightDown : rotateRightDown,
                flipRest : flipRest,
                flipGroup : flipGroup,
                flipHover : flipHover,
                flipDown : flipDown,
                prevRest : prevRest,
                prevGroup : prevGroup,
                prevHover : prevHover,
                prevDown : prevDown,
                nextRest : nextRest,
                nextGroup : nextGroup,
                nextHover : nextHover,
                nextDown : nextDown 
            },
            // overlays: [{
            //     id : "overlays-rect",
            //     x: 0.3,
            //     y: 0.16,
            //     width: 0.1,
            //     height: 0.1,
            //     className:"highlight"
            // }]
        })

        viewer.addHandler('canvas-click', function(event) {
            let webPoint = event.position;
            let viewportPoint = viewer.viewport.pointFromPixel(webPoint);
            let imagePoint = viewer.viewport.viewportToImageCoordinates(viewportPoint);
            console.log(webPoint.toString(), viewportPoint.toString(), imagePoint.toString());
        })

        return () => {
            viewer.destroy();
        }
    });

    return (
        <>
            <div 
                id="openSeaDragon"
                style={{
                    width: "1280px",
                    height: "960px"
                }}
            />
        </>    
    )
}
export default Annotation