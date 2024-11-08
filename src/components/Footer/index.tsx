import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <h6 style={{ margin: "0 auto" }}>Aloq: Coming in 2025</h6>
            
            <p style={{ marginTop: "50px", textAlign: "center" }}>We are getting ready to revolutionize the way companies find the perfect spaces to thrive. The official launch of the Aloq platform is set for 2025, introducing a new era of smart, criteria-based decision-making for startups and expanding businesses. Stay tuned and be among the first to experience a smarter way to choose your next workspace!</p>
            
            <img src="../../../img/svg/new-logo.svg" style={{ margin: "0 auto", width: "200px" }} alt="Aloq Logo" />

          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
