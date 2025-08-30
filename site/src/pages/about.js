import * as React from "react"
import { Link } from "gatsby"
import Seo from "../components/seo"
import styled from "styled-components"
import BackLink from "../components/common/BackLink"
import "../components/styles/blog.module.css"

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
`

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bolder;
  color: var(--white-1);
  margin-bottom: 2rem;
`

const BioSection = styled.div`
  line-height: 1.8rem;
  font-weight: 300;
  color: var(--white-1);
  
  p {
    margin-bottom: 1.5rem;
  }
  
  a {
    color: cyan;
    border-bottom: 1px solid cyan;
    text-decoration: none;
    
    &:hover {
      border-bottom-width: 2px;
    }
  }
`

const AboutPage = () => {
  return (
    <main>
      <Seo title="About" />
      <AboutContainer>
        <BackLink />
        <Title>About Me</Title>
        <BioSection>
          <p>
            Now that you already know I'm Fasil and I'm a software engineer, let's get to the fun part.
          </p>
          <p>
            I come from Coimbatore - a city in South India known for its calm energy and a knack for producing great inventors and entrepreneurs. It's a place where tradition meets innovation, and I like to think I carry a bit of both wherever I go.
          </p>
          <p>
            These days, you'll find me in the vibrant chaos of Bangkok, helping Agoda transform from a great travel platform into Asia's preferred travel marketplace. (Yes, I get to play with big systems and even bigger ideas.)
          </p>
          <p>
            Before Agoda, I sharpened my engineering chops at ThoughtWorks and Odessa, where I learned that "impossible" is just another way to say "give me a minute."
          </p>
          <p>
            I also co-founded <a href="https://dev-bee.com/" target="_blank" rel="noopener noreferrer">DevBee</a>, a software consultancy in Coimbatore. We've helped dozens of small and medium businesses embrace digital evolution - sometimes with code, sometimes with caffeine, always with results.
          </p>
          <p>
            Lately, AI - especially GPT - has been my playground. At Agoda, I'm part of the team building AI-powered apps that are changing how people travel. Whether it's integrating smart solutions or experimenting with the latest in generative AI, I love turning cutting-edge tech into real-world impact.
          </p>
          <p>
            <strong>What can I do for you?</strong><br />
            If you want to scale your systems, integrate AI, or finally get that CI/CD pipeline humming, I'm available for consulting.
          </p>
          <p>
            Let's talk tech, business, or the best filter coffee in South India—connect with me on{" "}
            <a href="https://www.linkedin.com/in/fasilmarshooq/" target="_blank" rel="noopener noreferrer">LinkedIn</a> and let's make your next project a success.
          </p>
        </BioSection>
      </AboutContainer>
    </main>
  )
}

export default AboutPage
