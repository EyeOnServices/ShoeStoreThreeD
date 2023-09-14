import React from "react";
import styled from "styled-components";
import loaderGif from "./assets/loader.gif";
// import loaderMp4 from "./assets/loader.mp4";

const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 9999;

  .loader {
    max-width: 100%;
    max-height: 100%;
  }
`;

const Loader: React.FC = () => {
    return (
        <LoaderContainer>
            <img src={loaderGif} alt="Loading..." />
        </LoaderContainer>
    );
};

export default Loader;
