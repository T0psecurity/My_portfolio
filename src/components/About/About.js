import React from "react";
import {
  AboutContent,
  AboutDetailsContainer,
  AboutImage,
  AboutImageContainer,
  Resume,
  ResumeLink,
  StyledAbout,
} from "../styles/About.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import { StyledParagraph } from "../styles/Typography.styled";
import myImage from "../../assets/my-image.jpg";
import downloadIcon from "../../assets/icons/download-icon.svg";
import resume from "../../assets/Resume.pdf";

const About = () => {
  return (
    <StyledAbout id="about">
      <SectionHeading dark="true" mb="3rem">
        <SectionTitle dark="true" number="02">
          About Me
        </SectionTitle>
      </SectionHeading>
      <AboutContent>
        <AboutImageContainer>

          <AboutImage src={myImage} />
        </AboutImageContainer>
        <AboutDetailsContainer>
          <StyledParagraph>
            Blockchain developer with 4 years of experience in developing and implementing blockchain solutions for various industries.
          
            Proficient in DeFi, Ethereum, and Hyperledger Fabric.
          
            Successfully led the development of a blockchain-based supply chain management system that improved transparency and traceability.
          
            Skilled in smart contract development, decentralized application (dApp) development, and blockchain architecture design.
          
            Strong analytical and problem-solving skills, with a track record of delivering high-quality solutions on time and within budget.

            Passionate about exploring the potential of blockchain technology to transform industries and create new opportunities.
          </StyledParagraph>

          <Resume style={{ textAlign: 'center', width: '100%' }}>
            <ResumeLink
              href={resume}
              icon={downloadIcon}
              download="resume-cobin-mao"
            >
              Download Resume
            </ResumeLink>
          </Resume>
        </AboutDetailsContainer>
      </AboutContent>
    </StyledAbout>
  );
};

export default About;
