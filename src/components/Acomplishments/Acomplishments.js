import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxTime, BoxCompany } from './AcomplishmentsStyles';

const data = [
  { time: '2019.9 - 2020.3', company: 'RIVERIT-Intern'},
  { time: '2020.4 - 2021.4', company: 'RIVERIT-Frontend developer', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Work Experience</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxTime>{card.time}</BoxTime>
          <BoxCompany>{card.company}</BoxCompany>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
