import React from 'react';
import { AnimatedPanel, Hero, Panel, Sponsors, WhatIsJdoodle } from '../../components';
import { sectionsData, topheroData } from '../../data';

function Home() {
  return (
    <>
      <Hero {...topheroData} />
      <WhatIsJdoodle />
      <AnimatedPanel/>
      <Panel/>
      {sectionsData.map((sectionData) => (
        <Hero {...sectionData} />
      ))}
      <Sponsors />
    </>
  );
}

export default Home;
