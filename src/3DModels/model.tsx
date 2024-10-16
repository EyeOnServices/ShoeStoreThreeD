import React from 'react';
import { Model } from './QUARTZS';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import * as THREE from 'three';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';



const StyledCanvas = styled(Canvas)`
  overflow:visible !important;
 
  
`;

const ProductModel2 = () => {
    const isSmallScreen = useMediaQuery({ maxWidth: 767 }); // styles for screens up to 767px wide
    const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 }); // styles for screens between 768px and 1023px wide
    const isLargeScreen = useMediaQuery({ minWidth: 1024 }); // styles for screens wider than 1023px

    const PivotPoint = () => {
        const { viewport } = useThree();
        return (
            <group position={[0, -6, 0]}>
                {/* This is the position of the pivot point relative to the model */}
                <Model />
            </group>
        );
    };

    return (
        <>
            {isSmallScreen && <StyledCanvas style={{ height: '100vh', width: '100vw', position: 'absolute', bottom: '-22rem', right: '-16rem' }} shadows={false} camera={{ position: [4, 0, -12], fov: 35 }} draggable={false}>  <ambientLight />
                <Stage intensity={1} environment="city" adjustCamera={2.5} shadows={false} >
                     <ambientLight />
                    <PivotPoint />
                </Stage>
                <OrbitControls makeDefault enablePan={false} />


            </StyledCanvas>}
            {isMediumScreen && <StyledCanvas style={{ height: '100vh', width: '100vw', position: 'absolute', bottom: '-22rem', right: '-32rem' }} shadows={false} camera={{ position: [4, 0, -12], fov: 35 }} draggable={false}> <ambientLight />
                <Stage adjustCamera={2.4} shadows={false}>
                    <ambientLight />
                    <PivotPoint />
                </Stage>
                <OrbitControls makeDefault enablePan={false} />

            </StyledCanvas>}
            {(isLargeScreen) && <StyledCanvas style={{ height: '100vh', width: '100vw' }} shadows={false} camera={{ position: [4, 0, -12], fov: 35 }} draggable={false}>
                <Stage adjustCamera={1.5} shadows={false}  >
                    <ambientLight />
                    <PivotPoint />
                </Stage>
                <OrbitControls makeDefault enablePan={false} />

            </StyledCanvas>}
        </>
    );
};


export default ProductModel2;
