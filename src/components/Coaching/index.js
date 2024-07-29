import React from "react";
import { HeroContainer, Column, Text } from "./coachingElements";
import Footer from "../Footer"

const CoachingComponent = () => {
    return (
        <HeroContainer>
            <Column>
                <Text>
                I’m excited to offer coaching for students who are passionate about entering the product design and engineering fields. My services include personalized sessions that cover writing compelling applications, creating standout portfolios, and preparing for mock interviews. Whether you're just starting out and need an initial consultation or you're looking for regular coaching throughout the entire process, I tailor my approach to meet your unique needs. Each applicant receives customized advice to highlight their strengths and ensure their materials stand out. My rates are determined based on individual cases, ensuring that the coaching is accessible and tailored to your specific requirements. Get in touch to learn more about how I can help you achieve your academic and career goals in design and engineering!
                </Text>
            </Column>
            <Footer/>   
        </HeroContainer>
    )
}

export default CoachingComponent