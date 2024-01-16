import styled, { css } from "styled-components";

const ProjectsContainer = styled.div`
  height: 700px;
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 1120px) {
    height: auto;
  }
`;

const InnerProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1145px) {
    gap: 20px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 10px;
  background-color: #eeeeee;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  width: 300px;
  height: 500px;
  padding: 25px;

  @media screen and (max-width: 400px) {
    width: auto;
  }
`;

const ImageContainer = styled.div`
  width: 200px;
  height: 200px;
`;

const Image = styled.img`
  width: 200px;
`;

const Title = styled.h2`
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 14px;
`;

const UpperDecoration = styled.img<{ alignRight: boolean }>`
  width: 50%;
  ${(props) =>
    props.alignRight &&
    css`
      align-self: flex-end;
    `}
`;

export {
  ProjectsContainer,
  InnerProjectsContainer,
  ContentContainer,
  ImageContainer,
  Title,
  Description,
  Image,
  UpperDecoration,
};
