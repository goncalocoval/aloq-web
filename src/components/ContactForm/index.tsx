import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { ContactProps, ValidationTypeProps } from "./types";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import Block from "../Block";
import { ContactContainer, Span, ProfilePicture, TeamContainer, TeamMemberC, Role } from "./styles";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
}

const teamMembers: TeamMember[] = [
  { id: 1, name: 'Gonçalo Coval', role: 'Founder & Lead Developer', imageUrl: 'img/pic.jpg' },
  { id: 1, name: 'Tiago Dias', role: 'Startup Strategy Specialist', imageUrl: 'img/tiago.jpg' },
  { id: 1, name: 'Diogo Curralo', role: 'Technology Solutions Architect', imageUrl: 'img/curralo.jpg' },
  { id: 1, name: 'Gonçalo Silva', role: 'Marketing and Growth Director', imageUrl: 'img/tako.jpg' },
  { id: 1, name: 'Rafael Santos', role: 'User Experience (UX) Designer', imageUrl: 'img/rafael.jpeg' },
  // Add more team members here
];

const Contact = ({ title, content, id, t }: ContactProps) => {
  const { errors } = useForm(validate);

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
            <TeamContainer>
              {teamMembers.map(member => (
                  <TeamMemberC>
                      <ProfilePicture src={member.imageUrl} alt={member.name} />
                      <p>{member.name}<br></br><Role className="role">{member.role}</Role></p>
                      
                  </TeamMemberC>
              ))}
          </TeamContainer>
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);
