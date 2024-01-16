import Button from "../../components/button/Button";
import {
  ContentContainer,
  Description,
  Image,
  ImageContainer,
  InnerProjectsContainer,
  ProjectsContainer,
  Title,
  UpperDecoration,
} from "./styled";
import editor from "../../assets/editor.png";
import formFiller from "../../assets/formFiller.png";
import salesInsights from "../../assets/sales Insights.png";
import decoration from "../../assets/Decoration.png";
import { useCallback } from "react";

const Projects = (): JSX.Element => {
  const handleClick = useCallback((link: string) => {
    window.open(link, "_blank");
  }, []);
  return (
    <ProjectsContainer id="projects">
      <InnerProjectsContainer>
        <ContentContainer>
          <ImageContainer>
            <Image src={editor} />
          </ImageContainer>
          <Title>Editor</Title>
          <Description>
            With the use of RectJs, I have developed editor for merely HTML and
            CSS with preview using react library
          </Description>
          <Button
            text="Link"
            callback={() => handleClick("https://github.com/dhruvi1930/editor")}
          />
        </ContentContainer>
        <ContentContainer>
          <ImageContainer>
            <Image src={salesInsights} />
          </ImageContainer>
          <Title>Sales Insights</Title>
          <Description>
            The Power BI sales_insights dashboard uses dynamic charts and graphs
            to analyze different perspective, giving users real-time visibility
            into critical sales metrics.
          </Description>
          <Button
            text="Link"
            callback={() =>
              handleClick("https://github.com/dhruvi1930/sales_analyst")
            }
          />
        </ContentContainer>
        <ContentContainer>
          <ImageContainer>
            <Image src={formFiller} />
          </ImageContainer>
          <Title>Automatic Form Filler</Title>
          <Description>
            Built OCR model using ResNet and integrated it with Flask.
          </Description>
          <Button
            text="Link"
            callback={() =>
              handleClick("https://github.com/dhruvi1930/form-filler")
            }
          />
        </ContentContainer>
      </InnerProjectsContainer>
      <Button
        text="See More"
        callback={() =>
          handleClick("https://github.com/dhruvi1930?tab=repositories")
        }
      />
      <UpperDecoration src={decoration} alignRight />
    </ProjectsContainer>
  );
};

export default Projects;
