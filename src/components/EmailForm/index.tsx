import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import emailjs from 'emailjs-com';
import { ContactProps, ValidationTypeProps } from "./types";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import { Button } from "../../common/Button";
import Block from "../Block";
import Input from "../../common/Input";
import { ContactContainer, FormGroup, Span, ButtonContainer } from "./styles";

const Email = ({ title, content, id, t }: ContactProps) => {
  const { values, errors, handleChange } = useForm(validate);

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type as keyof typeof errors];
    return <Span>{ErrorMessage}</Span>;
  };

  // Modificar o handleSubmit para incluir o envio de email pelo EmailJS
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.send(
      'service_p978f6r',    // Substitua pelo seu Service ID do EmailJS
      'template_lr626od',   // Substitua pelo seu Template ID do EmailJS
      {
        name: values.name,
        email: values.email,
      },
      'DvHqatJot8uIRZOs0'        // Substitua pelo seu User ID do EmailJS
    ).then((response) => {
        alert("Subscription successful! Check your email for confirmation.");
    }).catch((error) => {
        alert("Failed to send the email. Please try again later.");
    });
  };

  return (
    <ContactContainer id={id}>
      <Row justify="space-between" align="middle">
        <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="left" triggerOnce>
            <Block title={title} content={content} />
          </Slide>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide direction="right" triggerOnce>
            <FormGroup autoComplete="off" onSubmit={onSubmit}>
              <Col span={24}>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your or Company Name"
                  value={values.name || ""}
                  onChange={handleChange}
                />
                <ValidationType type="name" />
              </Col>
              <Col span={24}>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your or Company Email"
                  value={values.email || ""}
                  onChange={handleChange}
                />
                <ValidationType type="email" />
              </Col>
              <ButtonContainer>
                <Button name="submit">{t("Subscribe")}</Button>
              </ButtonContainer>
            </FormGroup>
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Email);