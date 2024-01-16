import SocialMedia from "../../components/socialMedia/SocialMedia";
import {
  ContentContainer,
  EducationContainer,
  InnerEducationContainer,
  SocialMediaContainer,
  MainEducationContainer,
  GIFContainer,
  EducationContent,
  EducationImage,
  EducationDescription,
} from "./styled";
import education from "../../assets/education.gif";
import degree from "../../assets/mortarboard.png";
import book from "../../assets/books-stack-of-three.png";
import location from "../../assets/location.png";

const Education = (): JSX.Element => {
  return (
    <EducationContainer id="education">
      <ContentContainer>
        <InnerEducationContainer>
          <MainEducationContainer>
            <EducationContent>
              <EducationImage src={degree} />
              <EducationDescription>
                Bachelor of Technology
              </EducationDescription>
            </EducationContent>
            <EducationContent>
              <EducationImage src={book} />
              <EducationDescription>Computer Science</EducationDescription>
            </EducationContent>
            <EducationContent>
              <EducationImage src={location} />
              <EducationDescription>BVM,India</EducationDescription>
            </EducationContent>
          </MainEducationContainer>
          <MainEducationContainer>
            <EducationContent>
              <EducationImage src={degree} />
              <EducationDescription>
                Post Graduate Certificate
              </EducationDescription>
            </EducationContent>
            <EducationContent>
              <EducationImage src={book} />
              <EducationDescription>
                Mobile Solutions Development
              </EducationDescription>
            </EducationContent>
            <EducationContent>
              <EducationImage src={location} />
              <EducationDescription>
                Conestoga college, Waterloo
              </EducationDescription>
            </EducationContent>
          </MainEducationContainer>
        </InnerEducationContainer>
        <GIFContainer src={education} />
        <SocialMediaContainer>
          <SocialMedia isRotation={true} width={35} height={35} />
        </SocialMediaContainer>
      </ContentContainer>
    </EducationContainer>
  );
};

export default Education;
