import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: "85th", text: 'Global rank on July Codechef 2020' },
  { number: "Winner", text: 'Coderage coding university level competition', },
  { number: "24th", text: 'Global rank codezen 2.0 codechef 2020', },
  { number: "1946", text: 'Highest codechef rating 4 star', }
];

const Acomplishments = () => (
  <Section id="accomplishment">
    <SectionDivider divider />

    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    {/* <SectionDivider/> */}
  </Section>
);

export default Acomplishments;
