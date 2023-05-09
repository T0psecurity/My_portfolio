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
            Full-stack developer with 6+ years of experience and a proven track record of success in achieving extraordinary results.
          </StyledParagraph>
          <StyledParagraph>
            With a strong attention to detail and accuracy and the important ability to function well in a team setting.
          </StyledParagraph>
          <StyledParagraph>
            Cheryl is looking for a Full-Stack Developer job.
          </StyledParagraph>
      
          <Resume style={{textAlign: 'center', width: '100%'}}>
            <ResumeLink
              href={resume}
              icon={downloadIcon}
              download="resume-cheryl-phillips"
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
