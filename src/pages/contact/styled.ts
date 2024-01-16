import styled from "styled-components";

const ContactContainer = styled.div`
  height: 700px;
  padding: 35px 15px;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 1120px) {
    height: auto;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  width: 100%;
  justify-content: space-evenly;
`;

const FormContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 650px) {
    align-items: normal;
  }
`;

const FormInput = styled.input`
  border: none;
  padding: 10px;
  width: 400px;
  background-color: #eeeeee;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  border-radius: 20px;

  @media screen and (max-width: 650px) {
    width: auto;
  }
`;

const FormTextArea = styled.textarea`
  border: none;
  padding: 10px;
  width: 400px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  border-radius: 20px;
  background-color: #eeeeee;

  @media screen and (max-width: 650px) {
    width: auto;
  }
`;

const FormButton = styled.input`
  border: none;
  cursor: pointer;
  padding: 10px;
  width: 100px;
  background-color: #6ab8ff;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  border-radius: 20px;
  color: white;
  font-size: bold;
  &:hover {
    background-color: #000000;
  }
`;

const GIFContainer = styled.img`
  width: 600px;
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

export {
  ContactContainer,
  FormContainer,
  FormInput,
  FormTextArea,
  ContentContainer,
  FormButton,
  GIFContainer,
};
