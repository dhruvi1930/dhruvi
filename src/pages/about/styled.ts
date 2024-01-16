import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const AboutContainer = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px 15px;
  animation: ${fadeIn} 1s ease;

  @media screen and (max-width: 850px) {
    height: auto;
  }
`;

const UpperDecoration = styled.img<{ alignRight: boolean }>`
  width: 50%;
  ${(props) =>
    props.alignRight &&
    css`
      align-self: flex-end;
    `}
`;
const BottomDecoration = styled.img<{ alignLeft: boolean }>`
  width: 50%;
  transform: rotate(180deg);
  ${(props) =>
    props.alignLeft &&
    css`
      align-self: flex-start;
    `}
`;

const InnerAboutContainer = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  animation: ${slideUp} 1s ease;

  @media screen and (max-width: 850px) {
    flex-direction: column;
  }
`;

const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0px;

  @media screen and (max-width: 860px) {
    display: none;
  }
`;

const FollowContainer = styled.p`
  padding-top: 40px;
  font-size: 12px;
  font-weight: bold;
  transform: rotate(270deg);
`;

const GIFContainer = styled.img`
  @media screen and (max-width: 520px) {
    width: 400px;
  }
  @media screen and (max-width: 420px) {
    width: 300px;
  }
  @media screen and (max-width: 320px) {
    width: 220px;
  }
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 500px;
  @media screen and (max-width: 560px) {
    width: auto;
  }
`;

const Title = styled.p`
  font-size: 42px;
  font-weight: 800;
  color: #6ab8ff;
  margin: 0px;
`;

const Description = styled.p`
  font-size: 16px;
  font-weight: 600;
`;

export {
  AboutContainer,
  UpperDecoration,
  InnerAboutContainer,
  SocialMediaContainer,
  FollowContainer,
  GIFContainer,
  DescriptionContainer,
  Title,
  Description,
  BottomDecoration,
};
