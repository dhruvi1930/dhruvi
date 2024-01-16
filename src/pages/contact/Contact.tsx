import { useRef, MutableRefObject } from "react";
import {
  ContactContainer,
  ContentContainer,
  FormButton,
  FormContainer,
  FormInput,
  FormTextArea,
  GIFContainer,
} from "./styled";
import emailjs from "@emailjs/browser";
import contact from "../../assets/contact.gif";

const Contact = (): JSX.Element => {
  const form: MutableRefObject<HTMLFormElement | null> = useRef(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_b53ii1t",
          "template_rce8s2l",
          form.current,
          "zOjjMoyFZOZ3omus-"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <ContactContainer id="contact">
      <ContentContainer>
        <FormContainer ref={form} onSubmit={sendEmail}>
          <FormInput type="text" name="from_name" placeholder="Name" />
          <FormInput type="text" name="from_email" placeholder="Email" />
          <FormTextArea name="message" placeholder="Message" />
          <FormButton type="submit" value="Send" />
        </FormContainer>
        <GIFContainer src={contact} />
      </ContentContainer>
    </ContactContainer>
  );
};

export default Contact;
