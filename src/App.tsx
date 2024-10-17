import React, { useEffect, useState } from 'react';
import shoe1 from './Product_Buttons/APATITE.png'
import shoe2 from './Product_Buttons/CALCITE.png'
import shoe3 from './Product_Buttons/COPPER.png'
import shoe4 from './Product_Buttons/CALCITE.png'
import { Product } from './3DProducts';
import user from './assets/user.png'
import styled, { keyframes } from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import Sizes from './ShoeSizes';
import Loader from './loader';
import { lazy } from 'react';
import ProductModel2 from './3DModels/model';
import ColorWheel2 from './ColorWheel/index2';


// const jump = keyframes`
//   0% {
//     top: 0;
//   }
//   50% {
//     top: -20px;
//   }
//   100% {
//     top: 0;
//   }
// `;



const Button = styled.button<{ color: String }>`
text-transform: uppercase;
font-family: 'Russo One', sans-serif;
text-align: center;
letter-spacing: .2rem;
color: ${(props) => (props.color ? props.color : '#fff')};
padding : 12px 14px;
cursor: pointer;
border : none;
border-radius : 8px;
align-items : center;
margin-top : 5px;


  &:hover {  
    span {
      position: relative;
      animation: jump 1.75s infinite;
    }
  
    span:nth-child(2) {
      animation-delay: 0.3s;
    }
  
    span:nth-child(3) {
      animation-delay: 0.5s;
    }
  
    span:nth-child(4) {
      animation-delay: 0.7s;
    }
  
    span:nth-child(5) {
      animation-delay: 0.9s;
    }
  
    @keyframes jump {
      0% {
        top: 0;
      }
      50% {
        top: -4px;
      }
      100% {
        top: 0;
      }
    }
  }

`

/*lazy loading*/
const BackgroundController = lazy(() => import('./BackgroundController/index'));
const ProductView = lazy(() => import('./3DProducts/index'));
const USerModule = lazy(() => import('./UserModule/index'));
// const ColorWheel = lazy(() => import('./ColorWheel/index'));
const ProductDesc = lazy(() => import('./PrductsDesc/index'));
const Player = lazy(() => import('./AudioPlayer/index'));
// const ProductModel = lazy(() => import('./3DModels/index'));



const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);


  const selectedColor = useSelector((state: RootState) => state.app.selectedColor);


  const [ProductsLeft, ] = useState<Product[]>([
    {
      id: 1,
      name: 'ALVEA',
      imageUrl: shoe1,
      price: 650,
      // modelUrl: quartzModel
    },
    {
      id: 2,
      name: 'Adidas',
      imageUrl: shoe2,
      price: 750,
      // modelUrl: quartzModel
    },
    {
      id: 3,
      name: 'Shoe3',
      imageUrl: shoe3,
      price: 650,
      // modelUrl: quartzModel
    },
    {
      id: 4,
      name: 'Shoe4',
      imageUrl: shoe4,
      price: 750,
      // modelUrl: quartzModel
    }
  ])

  const onSizeSelected = (size: number) => {
    console.log(size, '>>> Selected Size')
  }

  // const yourDefaultColour = "rgb(255, 255, 255)";

  return (
    <>
      {loading ? <Loader /> :
        <MainContainer>
          <BackgroundController>
          </BackgroundController>

          <HeaderContainer>
            <ProductView products={ProductsLeft} />

            <MidContainer>
              <USerModule username='Anish Hassan' email='anish@gmail.com' imageUrl={user} />
              <WheelContainer><ColorWheel2 /></WheelContainer>
            </MidContainer>

            <ProductView products={ProductsLeft} right="0px" />

          </HeaderContainer>
          <ProductDesc />
          <ProductOptionsContainer>
            <Sizes onSizeSelected={onSizeSelected} />
            <Button color={selectedColor.hex}>
              <span>P</span><span>R</span><span>E</span><span>O</span><span>R</span><span>D</span><span>E</span><span>R</span> <span>N</span><span>O</span><span>W</span>
            </Button>
          </ProductOptionsContainer>

          <AudioContainer>
            <Player />
          </AudioContainer>

          <ModelContainer>
            <ProductModel2 />
          </ModelContainer>



          {/* <ColorWheel2 size={200} /> */}


          {/* <ColourWheelCustom
          radius={200}
          padding={10}
          lineWidth={50}
          onColourSelected={(rgb:any) => console.log(rgb, 'selected color')}
          presetColour={selectedColor}
          animated
        /> */}



          {/* <ProductModel /> */}
        </MainContainer>
      }
    </>

  );
};



export default App;

const MainContainer = styled.div`
position : relative;

`
// const ThreeDContainer = styled.div`
//  width:100%;
//  background:orange;
//  position:relative;
//  margin-top:500px;
// `

const WheelContainer = styled.div`
margin-top : -80px;
margin-left : -40px;
`

const HeaderContainer = styled.div`
display : flex;
justify-content : space-between;
position:relative;

`

const MidContainer = styled.div`
margin-left:auto;
margin-right:auto;
width:60px;
`

const ModelContainer = styled.div`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
   z-index : -1;
  @media(max-width:1023px){
    bottom:15rem;
  }
  @media(max-width:767px){
    bottom:17rem;
  }

  @media(max-width:874px){
    bottom:17rem;
  }
  

 
  `
const AudioContainer = styled.div`
 position: fixed;
bottom : 40px;
left : 30px;
width : 28rem;
$rhap_theme-color: #fff !important; 
@media (max-width: 1440px) {
  bottom : 30px;
left : 20px;
width : 22rem;

  }
  @media (max-width: 700px) {
  bottom : 11rem;
  margin-left:auto;
margin-right:auto;

width:80%;
left:52px


  }
  @media(max-width:576px){
    width : 13rem;
    margin-left:18%;
  }
  @media(max-width:445px){
   
    margin-left:13%;
  }
  
  @media(max-width:390px){
   
    margin-left:9%;
  }
  @media(max-width:360px){
   
    margin-left:8%;
  }
.rhap_container{
  background-color: transparent !important;
  border: none !important;
  @media(max-width:390px){
    .rhap_repeat-button{
      font-size:17px !important;
      width:14px !important;
    }
    .rhap_main-controls-button{
   width:17px !important;
f    ont-size:20px !important;
    }
    .rhap_play-pause-button{
      width:32px !important;
font-size:31px !important;
height:35px !important;
    }
    .rhap_volume-button{
      font-size:21px !important
    }
  }
}

`

const ProductOptionsContainer = styled.div`
position: fixed;
bottom : 40px;
right : 10px;
display : flex;
flex-direction: column;
align-items : center;
@media(max-width:700px){
  bottom : 0.5rem;
margin-left:auto;
margin-right:auto;

width:100%
}
`