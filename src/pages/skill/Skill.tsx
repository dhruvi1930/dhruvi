import {
  BottomDecoration,
  Container,
  ImageSkillContainer,
  LeftToRightScrollContainer,
  MainSkillContainer,
  RightToLeftScrollContainer,
  SkillContainer,
  SkillImage,
  SkillName,
  UpperDecoration,
} from "./styled";
import decoration from "../../assets/Decoration.png";
import Javascript from "../../assets/js.png";
import Node from "../../assets/nodejs.png";
import React from "../../assets/React.png";
import Typescript from "../../assets/typescript.png";
import HTML from "../../assets/html.png";
import CSS from "../../assets/css.png";
import Python from "../../assets/python.png";
import Flask from "../../assets/flask.png";
import Java from "../../assets/java.png";
import PHP from "../../assets/php.png";
import Net from "../../assets/net.webp";
import Postman from "../../assets/postman.png";
import Selenium from "../../assets/Selenium.png";
import Jest from "../../assets/jest.png";
import PowerBI from "../../assets/powerbi.png";
import Firebase from "../../assets/firebase.png";
import MySQL from "../../assets/MySQL.png";
import MongoDB from "../../assets/mongodb.png";
import Bitbucket from "../../assets/bitbucket.png";
import SourceTree from "../../assets/sourceTree.png";
import GitHub from "../../assets/github1.png";
import Jira from "../../assets/jira.svg";
import Azure from "../../assets/Microsoft_Azure.png";
import Excel from "../../assets/excel.png";

const Skill = (): JSX.Element => {
  return (
    <SkillContainer id="skill">
      <UpperDecoration src={decoration} alignRight />
      <Container>
        <LeftToRightScrollContainer>
          <MainSkillContainer>
            <ImageSkillContainer>
              <SkillImage src={Javascript} />
              <SkillName>JavaScript</SkillName>
            </ImageSkillContainer>
          </MainSkillContainer>
          <MainSkillContainer>
            <ImageSkillContainer>
              <SkillImage src={Node} />
              <SkillName>Node.js</SkillName>
            </ImageSkillContainer>
          </MainSkillContainer>
          <MainSkillContainer>
            <ImageSkillContainer>
              <SkillImage src={Typescript} />
              <SkillName>TypeScript</SkillName>
            </ImageSkillContainer>
          </MainSkillContainer>
          <MainSkillContainer>
            <ImageSkillContainer>
              <SkillImage src={HTML} />
              <SkillName>HTML</SkillName>
            </ImageSkillContainer>
          </MainSkillContainer>
          <MainSkillContainer>
            <ImageSkillContainer>
              <SkillImage src={CSS} />
              <SkillName>CSS</SkillName>
            </ImageSkillContainer>
          </MainSkillContainer>
          <MainSkillContainer>
            <ImageSkillContainer>
              <SkillImage src={Python} />
              <SkillName>Python</SkillName>
            </ImageSkillContainer>
          </MainSkillContainer>
          <MainSkillContainer>
            <ImageSkillContainer>
              <SkillImage src={React} />
              <SkillName>React</SkillName>
            </ImageSkillContainer>
          </MainSkillContainer>
          <MainSkillContainer>
            <ImageSkillContainer>
              <SkillImage src={Flask} />
              <SkillName>Flask</SkillName>
            </ImageSkillContainer>
          </MainSkillContainer>
          <MainSkillContainer>
            <ImageSkillContainer>
              <SkillImage src={Java} />
              <SkillName>Java</SkillName>
            </ImageSkillContainer>
          </MainSkillContainer>
          <MainSkillContainer>
            <ImageSkillContainer>
              <SkillImage src={PHP} />
              <SkillName>PHP</SkillName>
            </ImageSkillContainer>
          </MainSkillContainer>
          <MainSkillContainer>
            <ImageSkillContainer>
              <SkillImage src={Net} />
              <SkillName>.Net</SkillName>
            </ImageSkillContainer>
          </MainSkillContainer>
          <MainSkillContainer>
            <ImageSkillContainer>
              <SkillImage src={Postman} />
              <SkillName>Postman</SkillName>
            </ImageSkillContainer>
          </MainSkillContainer>
        </LeftToRightScrollContainer>
      </Container>
      <Container>
        <RightToLeftScrollContainer>
          <MainSkillContainer>
            <ImageSkillContainer>
              <SkillImage src={Selenium} />
              <SkillName>Selenium</SkillName>
            </ImageSkillContainer>
          </MainSkillContainer>
          <MainSkillContainer>
            <ImageSkillContainer>
              <SkillImage src={Jest} />
              <SkillName>Jest</SkillName>
            </ImageSkillContainer>
          </MainSkillContainer>
          <MainSkillContainer>
            <ImageSkillContainer>
              <SkillImage src={PowerBI} />
              <SkillName>Power BI</SkillName>
            </ImageSkillContainer>
          </MainSkillContainer>
          <MainSkillContainer>
            <ImageSkillContainer>
              <SkillImage src={MySQL} />
              <SkillName>MySQL</SkillName>
            </ImageSkillContainer>
          </MainSkillContainer>
          <MainSkillContainer>
            <ImageSkillContainer>
              <SkillImage src={MongoDB} />
              <SkillName>Mongo DB</SkillName>
            </ImageSkillContainer>
          </MainSkillContainer>
          <MainSkillContainer>
            <ImageSkillContainer>
              <SkillImage src={Bitbucket} />
              <SkillName>Bitbucket</SkillName>
            </ImageSkillContainer>
          </MainSkillContainer>
          <MainSkillContainer>
            <ImageSkillContainer>
              <SkillImage src={SourceTree} />
              <SkillName>SourceTree</SkillName>
            </ImageSkillContainer>
          </MainSkillContainer>
          <MainSkillContainer>
            <ImageSkillContainer>
              <SkillImage src={GitHub} />
              <SkillName>GitHub</SkillName>
            </ImageSkillContainer>
          </MainSkillContainer>
          <MainSkillContainer>
            <ImageSkillContainer>
              <SkillImage src={Jira} />
              <SkillName>Jira</SkillName>
            </ImageSkillContainer>
          </MainSkillContainer>
          <MainSkillContainer>
            <ImageSkillContainer>
              <SkillImage src={Azure} />
              <SkillName>MS. Azure</SkillName>
            </ImageSkillContainer>
          </MainSkillContainer>
          <MainSkillContainer>
            <ImageSkillContainer>
              <SkillImage src={Excel} />
              <SkillName>Excel</SkillName>
            </ImageSkillContainer>
          </MainSkillContainer>
          <MainSkillContainer>
            <ImageSkillContainer>
              <SkillImage src={Firebase} />
              <SkillName>Firebase</SkillName>
            </ImageSkillContainer>
          </MainSkillContainer>
        </RightToLeftScrollContainer>
      </Container>
      <BottomDecoration src={decoration} alignLeft />
    </SkillContainer>
  );
};

export default Skill;
