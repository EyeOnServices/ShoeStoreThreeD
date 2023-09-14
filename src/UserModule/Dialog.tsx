import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import menu1 from '../assets/menu1.png'
import menu2 from '../assets/menu2.png'
import menu3 from '../assets/menu3.png'
import menu4 from '../assets/menu4.png'

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import SlideContent from './MenuButton';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

type StyleType = {
  '--swiper-navigation-color': string;
  '--swiper-navigation-size': string;
};

const Dialog: React.FC<Props> = ({ isOpen, onClose }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
  };

  const handleWrapperClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClose();
  };

  return (
    <DialogWrapper isOpen={isOpen}>
      <DialogContent>
        <CloseButton onClick={handleButtonClick}>X</CloseButton>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={handleSlideChange}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <SlideWrapper>
              <SlideContent buttons={[
                { number: 1, image: menu1 },
                { number: 2, image: menu1 },
                { number: 3, image: menu2 },
                { number: 1, image: menu1 },
                { number: 2, image: menu2 },
                { number: 3, image: menu3 },
                { number: 1, image: menu1 },
                { number: 2, image: menu3 },
                { number: 3, image: menu1 },
              ]} />
            </SlideWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <SlideWrapper>
              <SlideContent
                buttons={[
                  { number: 1, image: menu1 },
                  { number: 2, image: menu2 },
                  { number: 3, image: menu1 },
                  { number: 1, image: menu3 },
                  { number: 2, image: menu1 },
                  { number: 3, image: menu2 },
                  // Add more buttons here...
                ]}
              />
            </SlideWrapper>
          </SwiperSlide>
        </Swiper>
        <PaginationWrapper>
          <PaginationDot isActive={activeIndex === 0} />
          <PaginationDot isActive={activeIndex === 1} />
        </PaginationWrapper>
      </DialogContent>
    </DialogWrapper>
  );
};

const SlideWrapper = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;



const Button = styled.button`
  position: relative;
  width: 50px;
  height: 50px;
  background: url(menu1) no-repeat center center;
  background-size: cover;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  &::before {
    content: attr(data-number);
    position: absolute;
    top: 5px;
    left: 5px;
    width: 20px;
    height: 20px;
    background-color: #fff;
    color: #000;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: bold;
  }
`;

const PaginationWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding : 10px;
`;

const PaginationDot = styled.div<{ isActive: boolean }>`
  width: 10px;
  height: 10px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: ${(props) => (props.isActive ? '#000' : '#ddd')};
`;

const DialogWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};                     
  justify-content: center;
  align-items: center;
  z-index: 3;
`;

const DialogContent = styled.div`
  width: 300px;
  height: 450px;
  background-color: white;
  padding: 20px;
  z-index: 3;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color : #ff7c35;
  position: relative; /* add positioning context */
`;

const CloseButton = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 20px;
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #000;
  z-index: 3;
`;

export default Dialog;
