import React from 'react'
import Pulmo2 from '../../Visuals/Portfolio/Pulmo-2/Pulmo2.pdf'
import { HeroContainer,  
    HeroBg, 
    LeftWhiteBg,
    RightWhiteBg,
    Row,
    Column1,
    Column2,
    SingleCol,
    Heading,
    Text,
    Img1,
    Img2,
    Img3,
    BtnRow,
    Btn,
    BtnLink,
} from './Pulmo-2-Elements'

const Pulmo2Component = () => {

  return (
    <HeroContainer id="portfolio">
      <HeroBg>
        <RightWhiteBg>
          <Row>
            <Column1>
              <Heading>pulmo - part II</Heading>
              <Text>By 2050, 75% of the world’s population will live in cities, 
                leading to heavy overcrowding in urban centres. Indoor air quality 
                in the UK is poor, and the increase in vehicular transport will 
                damage outdoor air quality further. The combination of these three 
                factors spell a bleak future for lung health, especially for those 
                in urban centres.  
              </Text>
              <Text>
              Pulmo monitors a variety of data points of the lungs to detect and 
              generate a preliminary diagnosis of lung diseases.
              </Text>
            </Column1>
            <Column2>
              <Img1 src={require("../../Visuals/Portfolio/Pulmo-2/Pulmo - 2.png")}/>
            </Column2>
          </Row>
        </RightWhiteBg>
        <LeftWhiteBg>
          <Row>
            <SingleCol>
              <Img2 src={require("../../Visuals/Portfolio/Pulmo-2/Technological Development.png")}/>
              <Heading>technological development</Heading>
              <Text>
              Technological development of the patch can be categorised into 4 groups: MEMS, 
              materials, wearable technology and machine learning. 4 types of MEMS sensors were 
              used to collect data: acoustic, resistive, EKG and PPG. These would all monitor 
              different aspects of lung health.
              </Text>
            </SingleCol>
          </Row>
        </LeftWhiteBg>
        <RightWhiteBg>
          <Row>
            <SingleCol>
                <Img2 src={require("../../Visuals/Portfolio/Pulmo-2/App Design.png")}/>
                <Heading>app design</Heading>
                <Text>
                The app will be paired with each user’s Pulmo. It will keep the user 
                informed on their lung status, capitalising on the trend of self-monitoring 
                health. It will also help to ensure proper usage of the device, and reminds 
                the user to keep it well-maintained. In the event that inconsistencies are 
                detected, the app will generate a preliminary diagnosis that the user can 
                then share with their doctor, who can then validate it.
                </Text>
            </SingleCol>
          </Row>
        </RightWhiteBg>
        <LeftWhiteBg>
          <Row>
            <SingleCol>
                <Img2 src={require("../../Visuals/Portfolio/Pulmo-2/Pulmo and IoT.png")}/>
                <Heading>IoT system</Heading>
                <Text>
                As home IOT systems become more common, Pulmo will integrate fully with other 
                smart devices in the home. By connecting with other devices linked to air quality, 
                the air that the user breathes in will be optimised, improving the user's lung 
                health, and subsequently, quality of life.
                </Text>
            </SingleCol>
          </Row>
        </LeftWhiteBg>
        
        <BtnRow>
          <Btn>
            <BtnLink to={Pulmo2} download="Portfolio" target="_blank" rel="noreferrer">Download Portfolio</BtnLink>
          </Btn>
        </BtnRow>
      </HeroBg>
    </HeroContainer>
  )
}

export default Pulmo2Component
