import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setSelectedProduct } from '../store/appSlice';


// Define the data structure for product information
export interface Product {
    id: number;
    name: string;
    imageUrl: string;
    modelUrl?: string;
    price?: number;
}

// Define the props for the component
interface Props {
    products: Product[];
    right?: string;
}

// Define the styled components for the product buttons
const ProductButton = styled.img<{ isActive: boolean }>`
  width: 120px;
  height: 120px;
  opacity: ${(props) => (props.isActive ? 0.9 : 0.4)};
  transition: opacity 0.3s ease-in;
  cursor : pointer;
  @media (max-width: 1440px) {
  width: 95px;
  height: 95px;

  }
  @media (max-width: 576px) {
  width: 80px;
  height: 80px;

  }
  @media (max-width: 420px) {
  width: 70px;
  height: 70px;

  }
`;

const ProductPrice = styled.h4<{ isActive: boolean }>`
  opacity: ${(props) => (props.isActive ? 0.9 : 0)};
  transition: opacity 0.3s ease-in;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: bold;
  margin-top : 4px;
  color : #fff;
  margin-left:20px;
   @media (max-width: 1440px) {
  font-size: 14px;
  }
  @media(max-width:1330px){
    margin-left:20px
  }
  @media(max-width:410px){
    margin-left:10px
  }
`;
interface ProductContainerProps {
    right: any;
}
const ProductContainer = styled.div<ProductContainerProps>`
    
position:absolute;
display:flex;
right:${({ right }) => right ? right : ''};
gap:0px;
@media(max-width:1300px){
    flex-direction:column;
}
@media(max-width:537px){
    top:8rem;
    right:${({ right }) => right ? '0px' : ''};
}
`


const ProductView: React.FC<Props> = ({ products, right }) => {

    const [selectedProduct, setSelectedProduct1] = useState<Product | null>(null);
    const dispatch = useDispatch();
    const handleProductSelect = (product: Product) => {
        setSelectedProduct1(product);
        dispatch(setSelectedProduct(product));
    };


    return (
        <>
            <ProductContainer right={right}>
                {products.map((product) => (
                    <div >
                        <ProductButton
                            src={product.imageUrl}
                            key={product.id}
                            isActive={selectedProduct?.id === product.id || false}
                            onClick={() => handleProductSelect(product)}
                        />
                        <ProductPrice isActive={selectedProduct?.id === product.id || false}>
                            ${product?.price}.00
                        </ProductPrice>
                    </div>
                ))}
            </ProductContainer>

        </>
    );
};

export default ProductView;

