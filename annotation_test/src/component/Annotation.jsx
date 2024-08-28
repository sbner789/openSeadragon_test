import React, { useEffect, useRef, useState } from 'react';
import OpenSeadragon from "../viewer/openseadragon/openseadragon";
import TestImage from "../test_image/test_image1.jpg";

const Annotation = () => {
    // const [viewer, setViewer] = useState(null);
    // const InitOpenSeadragon = () => {
    //     viewer && viewer.destroy();
    //     setViewer(
    //         OpenSeadragon({
    //             id: "openSeaDragon",
    //             animationTime: 0.5,
    //             blendTime: 0.1,
    //             constrainDuringPan: true,
    //             maxZoomPixelRatio: 2,
    //             minZoomLevel: 1,
    //             visibilityRatio: 1,
    //             zoomPerScroll: 2,
    //             tileSources: {
    //                 type: "image",
    //                 levels: [
    //                     {
    //                         url: TestImage,
    //                         width: 3840,
    //                         height: 2160,
    //                     }
    //                 ]
    //             },
    //         })
    //     )
    // }

    useEffect(() => {
        const viewer = OpenSeadragon({
            id: "openSeaDragon",
            tileSources: {
                type: 'image',
                url: TestImage
            }
        })

        return () => {
            viewer.destroy();
        }
    });

    return (
        <div 
            id="openSeaDragon"
            style={{
                width: "1200px",
                height: "800px"
            }}
        />
    )
}
export default Annotation