import styled from "styled-components";

const EducationContainer = styled.div`
  padding: 15px 15px;
  height: 500px;

  @media screen and (max-width: 860px) {
    height: auto;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 860px) {
    justify-content: center;
  }
`;

const InnerEducationContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  flex-wrap: wrap;
`;

const MainEducationContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 20px;
  width: 650px;
  border-radius: 10px;
  background-color: #eeeeee;

  @media screen and (max-width: 1190px) {
    width: auto;
  }
`;

const EducationContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 60px;
`;

const EducationImage = styled.img`
  width: 40px;
  height: 40px;
`;
const EducationDescription = styled.p`
  margin: 0px;
  font-size: 16px;
  font-weight: bold;
`;

const GIFContainer = styled.img`
  width: 450px;
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

const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0px;

  @media screen and (max-width: 860px) {
    display: none;
  }
`;

export {
  EducationContainer,
  InnerEducationContainer,
  MainEducationContainer,
  SocialMediaContainer,
  GIFContainer,
  ContentContainer,
  EducationContent,
  EducationDescription,
  EducationImage,
};
