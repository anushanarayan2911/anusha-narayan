import React from 'react'
import { HeroContainer, Row, Column, Text, HeaderText, BlogTitle, BlogList } from './blogElements'
import Footer from "../Footer"

const BlogComponent = () => {
    return (
        <HeroContainer id="blog">
            <Row>
                <Text>
                    In this blog, I delve into fascinating topics surrounding UX in STEM, digital design and engineering and entrepreneurship in the tech space. Updated fortnightly, the blog offers insights, tips and my take on progressions in these areas. Whether you're an experienced professional or new to the industry, there will be something here for you! 
                </Text>
            </Row>
            <Row>
                <Column>
                    <HeaderText>UX in STEM</HeaderText>
                    <BlogList>
                        <BlogTitle>the role of UX in STEM</BlogTitle>
                        <BlogTitle>successful UX in STEM</BlogTitle>
                        <BlogTitle>accessibility in UX for STEM</BlogTitle>
                        <BlogTitle>designing for complex data visualisations</BlogTitle>
                    </BlogList>
                </Column>
                <Column>
                    <HeaderText>Digital Design & Engineering</HeaderText>
                    <BlogList>
                        <BlogTitle>the human-centred design process for digital design</BlogTitle>
                        <BlogTitle>the impact of AI on digital design</BlogTitle>
                        <BlogTitle>sustainable digital design practices</BlogTitle>
                    </BlogList>
                </Column>
                <Column>
                    <HeaderText>Entrepreneurship in Tech</HeaderText>
                    <BlogList>
                        <BlogTitle>innovation in the digital space</BlogTitle>
                        <BlogTitle>ethical considerations in tech entrepreneurship</BlogTitle>
                        <BlogTitle>future proofing your tech startup</BlogTitle>
                    </BlogList>
                </Column>
            </Row>
            <Footer/>
        </HeroContainer>
    )
}

export default BlogComponent