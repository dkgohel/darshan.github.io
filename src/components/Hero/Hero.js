import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Darshan Gohel
          {/* Welcome To <br />
          My Personal Portfolio */}
        </SectionTitle>
        <SectionText>
          Welcome to my portfolio. A highly motivated, organized and experienced individual looking for a challenging position in a reputable organization to expand my learning, knowledge and skills for the growth of company.
        </SectionText>
        {/* <Button onClick={props.handleClick}>Learn More</Button> */}
      </LeftSection>
    </Section>
  </>
);

export default Hero;