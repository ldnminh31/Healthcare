import React from "react";
import ProfileName from "./ProfileName";
import styled from "styled-components";
import Image from "../../assets/images/profilelg.png";

const Container = styled.div`
  margin-top: 5rem;
  // background-color: red;
`;

const ProfileImg = styled.img`
  // height: 5rem;
  align-text: center;
  width: 100%;
  color: ${({ theme }) => theme.textColor};
  margin-bottom: 0.3rem;
`;

const Profile = () => {
  return (
    <Container>
      <ProfileImg src={Image} />
      <ProfileName />
    </Container>
  );
};

export default Profile;
