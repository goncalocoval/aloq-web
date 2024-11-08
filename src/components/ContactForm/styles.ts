import styled from "styled-components";

export const ContactContainer = styled("div")`
  padding: 5rem 0;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0;
  }
`;

export const FormGroup = styled("form")`
  width: 100%;
  max-width: 520px;

  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`;

export const Span = styled("span")`
  display: block;
  font-weight: 600;
  color: rgb(255, 130, 92);
  height: 0.775rem;
  padding: 0 0.675rem;
`;

export const ButtonContainer = styled("div")`
  text-align: end;
  position: relative;

  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`;

export const ProfilePicture = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto;
  display: block;
  margin-bottom:5px;
`;

export const TeamContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const TeamMemberC = styled.div`
  margin:0;
  align-items: center;
  width: calc(50% - 20px); // Two items per row with a gap of 20px
  margin-bottom: 20px;
  text-align: center;
`;

export const Role = styled("i")`
  font-size: 1rem;
  color: #666;
  margin-top: 0.5rem;
`;