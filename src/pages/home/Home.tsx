import React, { useCallback } from "react";
import Button from "../../components/button/Button";
import { Typewriter } from "react-simple-typewriter";
import {
  ButtonContainer,
  DescriptionContainer,
  DescriptionList,
  DescriptionListItem,
  HeroImage,
  HomeContainer,
  ImageContainer,
  InformationContainer,
  LabelContainer,
  LeftContainer,
  RightContainer,
  TitleContainer,
} from "./styled";
import dhruvi from "../../assets/Dhruvi.jpeg";

const Home = (): JSX.Element => {
  const handleClick = useCallback((link: string) => {
    window.open(link, "_blank");
  }, []);
  return (
    <HomeContainer id="home">
      <LeftContainer>
        <ImageContainer>
          <HeroImage src={dhruvi} />
        </ImageContainer>
      </LeftContainer>
      <RightContainer>
        <InformationContainer>
          <TitleContainer>Dhruvi Lad</TitleContainer>
          <LabelContainer>
            <Typewriter
              words={[
                "Full Stack Developer",
                "Data Analyst",
                "Web Developer",
                "Software Engineer",
                "Front End Developer",
              ]}
              loop={5}
              cursor
              cursorStyle="|"
              cursorColor="#6AB8FF"
              typeSpeed={120}
              deleteSpeed={80}
            />
          </LabelContainer>
          <DescriptionContainer>
            <DescriptionList>
              <DescriptionListItem>
                Assured Confidence and Optimal Efficiency
              </DescriptionListItem>
              <DescriptionListItem>
                Mastery in Agile Workflows
              </DescriptionListItem>
              <DescriptionListItem>
                Proficiency Across Back-end and Front-end Development
              </DescriptionListItem>
              <DescriptionListItem>Detail Documentation</DescriptionListItem>
              <DescriptionListItem>
                Systems Oriented Approach
              </DescriptionListItem>
              <DescriptionListItem>GoodCommunicator</DescriptionListItem>
            </DescriptionList>
          </DescriptionContainer>
        </InformationContainer>
        <ButtonContainer>
          <Button
            text="Resume"
            callback={() =>
              handleClick(
                "https://drive.google.com/file/d/1pz4AMTglAsCH6Yo8Yb5XM2j0tGHr8u_t/view?usp=sharing"
              )
            }
          />
        </ButtonContainer>
      </RightContainer>
    </HomeContainer>
  );
};

export default Home;
