import {
  AboutContainer,
  BottomDecoration,
  Description,
  DescriptionContainer,
  GIFContainer,
  InnerAboutContainer,
  SocialMediaContainer,
  Title,
  UpperDecoration,
} from "./styled";
import decoration from "../../assets/Decoration.png";
import about from "../../assets/about.gif";
import SocialMedia from "../../components/socialMedia/SocialMedia";

const About = (): JSX.Element => {
  return (
    <AboutContainer id="about">
      <UpperDecoration src={decoration} alignRight />
      <InnerAboutContainer>
        <SocialMediaContainer>
          <SocialMedia isRotation={true} width={35} height={35} />
        </SocialMediaContainer>
        <GIFContainer src={about} />
        <DescriptionContainer>
          <Title>Who am I ?</Title>
          <Description>
            I am a full stack developer working at Northern Devs , a software as
            a service company. I bring assured confidence and optimal efficiency
            to my work, mastering Agile workflows and excelling in both back-end
            and front-end development. I prioritize clear documentation, adopt a
            systems-oriented approach.
          </Description>
        </DescriptionContainer>
      </InnerAboutContainer>
      <BottomDecoration src={decoration} alignLeft />
    </AboutContainer>
  );
};

export default About;
