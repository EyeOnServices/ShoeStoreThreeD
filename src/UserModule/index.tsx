import React, { useState } from 'react';
import styled from 'styled-components';
import Dialog from './Dialog';

interface Props {
  imageUrl: string;
  username: string;
  email: string;
}




const USerModule = ({ imageUrl, username, email }: Props) => {
  const [showUserInfo, setShowUserInfo] = useState(false);

  const handleAvatarClick = () => {
    setShowUserInfo(!showUserInfo);
  };
  const handleCloseDialog = () => {
    setShowUserInfo(!showUserInfo);
  };

  return (
    <AvatarContainer onClick={handleAvatarClick}>
      <AvatarImg src={imageUrl} alt="User Avatar" />
      <Dialog isOpen={showUserInfo} onClose={handleCloseDialog} />
      {/* <AvatarOverlay>{showUserInfo ? <span>2</span> : null}</AvatarOverlay>
      {showUserInfo && (
        <UserInfoDialog>
          <UserInfoLabel>Username: {username}</UserInfoLabel>
          <UserInfoLabel>Email: {email}</UserInfoLabel>
        </UserInfoDialog>
      )} */}
    </AvatarContainer>
  );
};

const AvatarContainer = styled.div`
  position: relative;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  margin-top : 30px;
   @media (max-width: 1440px) {
  width: 60px;
  height: 60px;
margin-top : 25px;
  }
`;

const AvatarOverlay = styled.div`
  position: absolute;
  top: 3;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 20px;
`;

const AvatarImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const UserInfoDialog = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  z-index: 1;
  width: 200px;
  height: 120px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UserInfoLabel = styled.span`
  margin-bottom: 5px;
`;
export default USerModule;
