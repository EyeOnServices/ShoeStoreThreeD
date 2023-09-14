import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../store/store";

interface SizesProps {
    onSizeSelected: (size: number) => void;
}

const SizesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SizesHeading = styled.h2`
  margin-bottom: 10px;
  color : #fff;
`;

const SizesButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface SizeButtonProps {
    selected: boolean;
    color: string;
}

const SizeButton = styled.button<SizeButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin: 10px;
  border-radius: 50%;
  cursor: pointer;
  border: none;
  font-size: 1.2rem;
  color: ${({ color, selected }) => (selected ? color : "#000")};
  background-color:  #fff ;
  opacity: ${({ selected }) => (selected ? 0.9 : 0.2)};
  @media(max-width:576px){
    width:20px;
    height:20px;
    font-size:0.6rem
  }
`;

const Sizes: React.FC<SizesProps> = ({ onSizeSelected }) => {
    const [selectedSize, setSelectedSize] = useState<number>(5);
    const selectedColor = useSelector((state: RootState) => state.app.selectedColor);

    const handleSizeClick = (size: number) => {
        setSelectedSize(size);
        onSizeSelected(size);
    };

    return (
        <SizesContainer>
            <SizesHeading>SIZE</SizesHeading>
            <SizesButtonsContainer>
                {[5, 6, 7, 8, 9].map((size) => (
                    <SizeButton
                        key={size}
                        selected={selectedSize === size}
                        color={selectedColor.hex}
                        onClick={() => handleSizeClick(size)}
                    >
                        {size}
                    </SizeButton>
                ))}
            </SizesButtonsContainer>
        </SizesContainer>
    );
};

export default Sizes;
