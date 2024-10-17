import React from 'react';
import { Model } from './QUARTZ';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

function Controls() {
    const { gl: { domElement } } = useThree();
    // const width = 100;
    // const height = 100;
    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    const center = new THREE.Vector3();

    camera.lookAt(center);

    return <OrbitControls args={[camera, domElement]} />
}

const StyledCanvas = styled(Canvas)`
  width: 100%; /* Full width */
  height: 100%; /* Full height */
`;

const ProductModel = () => {
    const isSmallScreen = useMediaQuery({ maxWidth: 767 }); // styles for screens up to 767px wide
    const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 }); // styles for screens between 768px and 1023px wide
    const isLargeScreen = useMediaQuery({ minWidth: 1024 }); // styles for screens wider than 1023px

    return (
        <>
            {isSmallScreen && <StyledCanvas style={{ height: '200px', width: 'auto' }}>  <ambientLight />
                <pointLight position={[2, 2, 1]} />
                <pointLight position={[-3, -3, 2]} />
                <Controls />
                <Model />
                {/* <ContactShadows position={[0, -3, 0]} blur={2.5} scale={10} far={3} /> */}
            </StyledCanvas>}
            {isMediumScreen && <StyledCanvas style={{ height: '400px', width: 'auto' }}> <ambientLight />
                <pointLight position={[2, 2, 1]} />
                <pointLight position={[-3, -3, 2]} />
                <Controls />
                <Model />
                {/* <ContactShadows position={[0, -3, 0]} blur={2.5} scale={10} far={3} /> */}
            </StyledCanvas>}
            {isLargeScreen && <StyledCanvas style={{ height: '600px', width: '650px' }}>
                <ambientLight />
                <pointLight position={[2, 2, 1]} />
                <pointLight position={[-3, -3, 2]} />
                <Controls />
                <Model />
                {/* <ContactShadows position={[0, -3, 0]} blur={2.5} scale={10} far={3} /> */}
            </StyledCanvas>}
        </>
    );
};


export default ProductModel;
