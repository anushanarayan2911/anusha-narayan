import React from 'react'
import CV from '../../Visuals/About/CV.pdf'
import Portfolio from '../../Visuals/About/Portfolio.pdf'

import {
    HeroContainer,
    HeroBg, 
    Row,
    LeftCol,
    RightCol,
    Image,
    Paragraph,
    BottomParapgraph,
    Btn,
    BtnLink,
    RightCol2,
    YoutubeEmbed
} from './AboutElements'

const AboutComponent = ({}) => {
  return (
    <HeroContainer id="about">
      <HeroBg>
        <Row>
          <LeftCol>
            <Image src={require("../../Visuals/About/Anusha.png")}/>
          </LeftCol>
          <RightCol>
            <Paragraph>Born and raised in North London, I am in my fourth year at Imperial College London, pursuing an MEng in Design Engineering. 
            My journey in design engineering has been driven by a passion for crafting data-driven, human-centered solutions that make a tangible 
            difference in people's lives. In particular, I have a deep-rooted interest in improving the health and wellbeing of children, and I am 
            committed to leveraging both my design and skills to address this vital aspect of our society.
            </Paragraph>
            <Paragraph>My approach to design is marked by close collaboration with users and stakeholders, a principle that has guided me through 
              diverse projects tackling complex issues. From developing medical wearables for lung disease detection, to creating communication 
              aids for severely autistic non-verbal children, to addressing the critical issue of period poverty in developing countries, I have
              harnessed my multidisciplinary education to drive positive change.
            </Paragraph>
            <BottomParapgraph>Currently, I am working on my Master's thesis, where I am developing interventions to reduce the likelihood of 
              mental health issues in preterm babies. I hope to extend this research into a doctoral degree. Through my work, I aspire to 
              transform ideas into impactful realities that enhance the quality of life for those who need it most.
            </BottomParapgraph>
            <Row>
              <LeftCol>
                <br/>
                <br/>
                <Btn>
                  <BtnLink to={CV} download="CV" target="_blank" rel="noreferrer">CV</BtnLink>
                </Btn>
                <br/>
                <br/>
                <br/>
                <Btn>
                  <BtnLink to={Portfolio} download="PDF Portfolio" target="_blank" rel="noreferrer">PDF Portfolio</BtnLink>
                </Btn>
              </LeftCol>
              <RightCol2>
                <YoutubeEmbed/>
              </RightCol2>
            </Row>
          </RightCol>
        </Row>
      </HeroBg>
    </HeroContainer>
  )
}

export default AboutComponent
