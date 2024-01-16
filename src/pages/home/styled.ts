import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const HomeContainer = styled.div`
  display: flex;
  height: 730px;

  @media screen and (max-width: 850px) {
    flex-direction: column;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 30%;
  background-color: #eeeeee;
  padding: 20px;
  animation: ${fadeIn} 1s ease;

  @media screen and (max-width: 850px) {
    gap: 10px;
  }
`;

const ImageContainer = styled.div`
  flex: 60%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const SocialMediaContainer = styled.div``;

const RightContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  flex: 70%;
  animation: ${slideIn} 1s ease;
`;

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 20px;
`;

const HeroImage = styled.img`
  border-radius: 50%;
  width: 300px;
  height: 300px;

  @media screen and (max-width: 300px) {
    width: 240px;
    height: 240px;
  }
`;

const TitleContainer = styled.p`
  font-size: 42px;
  font-weight: 800;
  color: black;
  margin: 0px;
`;

const LabelContainer = styled.h3`
  margin: 0px;
  color: #6ab8ff;
`;

const DescriptionContainer = styled.p`
  margin: 5px;
`;

const DescriptionList = styled.ul`
  padding: 10px;
`;

const DescriptionListItem = styled.li`
  font-size: 16px;
  font-weight: 600;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

export {
  HomeContainer,
  LeftContainer,
  RightContainer,
  HeroImage,
  SocialMediaContainer,
  TitleContainer,
  LabelContainer,
  DescriptionContainer,
  ButtonContainer,
  InformationContainer,
  DescriptionList,
  DescriptionListItem,
  ImageContainer,
};
