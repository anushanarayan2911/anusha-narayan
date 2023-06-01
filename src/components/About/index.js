import React from 'react'
import styled from 'styled-components'
import CV from '../../Visuals/About/CV.pdf'
import Portfolio from '../../Visuals/About/Portfolio.pdf'
import {Link as LinkR} from 'react-router-dom' 

import {
    HeroContainer,
    HeroBg, 
    Row,
    LeftCol,
    RightCol,
    Image,
    Paragraph,
    BottomParapgraph,
    Row2,
    LeftCol2,
    RightCol2,
    Btn,
    BtnLink,
    YoutubeEmbed
} from './AboutElements'

const AboutComponent = ({}) => {
  return (
    <HeroContainer id="about">
      <HeroBg>
        <Row>
          <LeftCol>
            <Image src={require("../../Visuals/About/Talk.png")}/>
          </LeftCol>
          <RightCol>
            <Paragraph>Born and raised in North London, I am in my third year at Imperial College London, pursuing an MEng in Design Engineering. My primary interests lie in the field of human-centred and UX design. In these areas, I can use the wide-ranging skillset (engineering, computing, aesthetic design etc.) that I am accumulating, to create products or services that works to solve a problem being faced by users.</Paragraph>
            <Paragraph>Design and engineering can create timeless solutions to many problems being faced by the modern world, from poverty to climate change to mental health issues. I work in close collaboration with my users to ensure that my solution does address problems at their core. I have carried out projects for a wide cross-section of users: from games for young children (3-4) in order to make learning maths a fun and interactive experience, to medical wearables that can detect when a user is at risk of developing long disease. </Paragraph>
            <BottomParapgraph>The skills I have accumulated have helped me to advocate for users in a variety of situations, most recently as a UX Design Intern at MathWorks Inc. As part of the Parallel Computing and Deep Learning teams, I helped to design new features for MATLAB Desktop, as well as extending accessibility support for MATLAB Online.</BottomParapgraph>
            <Row2>
              <LeftCol2>
                <Btn>
                  <BtnLink to={CV} download="CV" target="_blank" rel="noreferrer">CV</BtnLink>
                </Btn>
                <br/>
                <br/>
                <br/>
                <Btn>
                  <BtnLink to={Portfolio} download="PDF Portfolio" target="_blank" rel="noreferrer">PDF Portfolio</BtnLink>
                </Btn>
              </LeftCol2>
              <RightCol2>
                <YoutubeEmbed/>
              </RightCol2>
            </Row2>
          </RightCol>
        </Row>
      </HeroBg>
    </HeroContainer>
  )
}

export default AboutComponent
