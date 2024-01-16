import styled from "styled-components";

const VerticalLine = styled.div`
  border-left: 3px solid black;
  border-radius: 5px;
  height: 100px;
`;

const Text = styled.p`
  transform: rotate(270deg);
  color: black;
  font-size: 20px;
  font-weight: bold;
  padding: 20px;
`;

export { VerticalLine, Text };
