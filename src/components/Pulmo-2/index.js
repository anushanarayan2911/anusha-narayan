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
              <Img2 src={require("../../Visuals/Portfolio/Pulmo-1/Future Contextual Studies.png")}/>
              <Heading>future contextual studies</Heading>
              <Text>
              To help define a future scenario, a STEEPV Wheel was created. Under the theme “The 
              Future of Healthcare”, the overarching drivers, trends and enablers that will drive 
              the project were identified. Key themes included the rise of telemedicine, development 
              of personalised point-of-care healthcare solutions, the shift towards preventative 
              models and the reduction of workload on healthcare workers through the integration of 
              data-driven systems and partial privatisation of the NHS.
              </Text>
            </SingleCol>
          </Row>
        </LeftWhiteBg>
        <RightWhiteBg>
          <Row>
            <SingleCol>
                <Img2 src={require("../../Visuals/Portfolio/Pulmo-1/Concepts.png")}/>
                <Heading>ideation</Heading>
                <Text>
                An ideation session was conducted, using the technologies that had been 
                researched as a basis. The aim of the session was to generate possible 
                ideas for a product service system that could detect lung disease early. 
                Any concept could be broken into 2 parts: data collection and data analysis. 
                Since the latter would be done using machine learning models combined with 
                the user's medical data, product ideation focussed on the first part. 
                Ideation was done as a group, with C-Sketching and SCAMPER techniques being 
                used. The top three ideas, a choker sensor, sleepmask sensor and chest ECG 
                were chosen to move forward through a Pugh chart analysis.
                </Text>
            </SingleCol>
          </Row>
        </RightWhiteBg>
        <LeftWhiteBg>
          <Row>
            <SingleCol>
                <Img2 src={require("../../Visuals/Portfolio/Pulmo-1/Final PSS.png")}/>
                <Heading>product service system</Heading>
                <Text>
                The final concept was chosen to be Pulmo, a wearable device that collects 
                data from a wide variety of biomarkers to detect lung disease. The product 
                service system surrounding Pulmo was also designed.
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
