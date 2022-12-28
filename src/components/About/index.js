import React from 'react'

import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    Subtitle,
    YoutubeEmbed,
    CVBtn,
    BtnLink,
    PortfolioBtn
} from './AboutElements'

const AboutComponent = ({}) => {
  return (
    <InfoContainer>
      <InfoWrapper>
        <InfoRow>
          <Column1><Subtitle>{"Born and raised in North London, I am in my third year at Imperial College London, pursuing an MEng in Design Engineering. My primary interests lie in the field of human-centred and UX design. In these areas, I can use the wide-ranging skillset (engineering, computing, aesthetic design etc.) that I am accumulating, to create products or services that works to solve a problem being faced by users."}</Subtitle></Column1>
          <Column2><YoutubeEmbed/></Column2>
        </InfoRow>
        <InfoRow>
          <Subtitle>
            {'Design and engineering can create timeless solutions to many problems being faced by the modern world, from poverty to climate change to mental health issues. I work in close collaboration with my users to ensure that my solution does address problems at their core. I have carried out projects for a wide cross-section of users: from games for young children (3-4) in order to make learning maths a fun and interactive experience, to mobility devices for elderly people to reduce their risk of falling when they are outside. By keeping in constant contact with users, as well as stakeholders throughout the design process, I am able to accurately identify points in their life which could serve as design opportunities.'}
          </Subtitle>
        </InfoRow>
      </InfoWrapper>
      <InfoRow>
        <Column1>
          <br></br>
          <CVBtn >
            <BtnLink to={"/CVPage"}>CV</BtnLink>
          </CVBtn>
        </Column1>
        <Column2>
            <br></br>
          <PortfolioBtn>
            <BtnLink to={"/PDFPortfolioPage"}>PDF Portfolio</BtnLink>
          </PortfolioBtn>
        </Column2>
      </InfoRow>
      

      
    </InfoContainer>
  )
}

export default AboutComponent
