import styled, { css, keyframes } from "styled-components";

const SkillContainer = styled.div`
  height: 600px;
  display: flex;
  flex-direction: column;
  padding: 35px 35px;
  justify-content: space-between;
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

const Container = styled.div`
  overflow: hidden;
`;

const scroll = keyframes`
0%{
  transform: translateX(0);
}
100%{
  transform: translateX(calc(-240px * 6));
}`;

const LeftToRightScrollContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: calc(240px * 12);
  animation: ${scroll} 8s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

const MainSkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  width: 170px;
  height: 200px;
  margin: 10px;
  box-shadow: 0 0 15px rgb(23 171 255 / 10.2);

  &:hover {
    transform: translateZ(20px);
  }
`;

const ImageSkillContainer = styled.div`
  width: 100px;
  display: flex;
  height: 100px;
  flex-direction: column;
  justify-content: center;
`;

const SkillName = styled.p`
  font-weight: 600;
`;

const SkillImage = styled.img`
  width: 100px;
  height: 100px;
`;

const scrollRightToLeft = keyframes`
100%{
  transform: translateX(0);
}
0%{
  transform: translateX(calc(-240px * 6));
}`;

const RightToLeftScrollContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: calc(240px * 12);
  animation: ${scrollRightToLeft} 8s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

export {
  SkillContainer,
  UpperDecoration,
  BottomDecoration,
  ImageSkillContainer,
  SkillName,
  LeftToRightScrollContainer,
  MainSkillContainer,
  SkillImage,
  Container,
  RightToLeftScrollContainer,
};
