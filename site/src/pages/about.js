import * as React from "react"
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
      <AboutContainer>
        <BackLink />
        <Title>About Fasil Marshooq</Title>
        <BioSection>
          <p>
            I’m Fasil, a software engineer from Coimbatore, now based in Bangkok.
          </p>
          <p>
            At Agoda, I work on engineering tools and AI-powered applications. A
            lot of my recent work involves AI agents, engineering support, and
            figuring out how to make these systems useful in production. That
            includes building the tools around them, evaluating their answers,
            and investigating why something that worked yesterday has developed a
            personality today.
          </p>
          <p>
            Before Agoda, I worked at ThoughtWorks and Odessa. My interests span
            backend development, distributed systems, developer tooling, and
            running software in production. I enjoy understanding how the pieces
            fit together, especially when production politely disagrees with the
            design document.
          </p>
          <p>
            I also co-founded and later exited{" "}
            <a href="https://dev-bee.com/" target="_blank" rel="noopener noreferrer">
              DevBee
            </a>
            , a software consultancy based in Coimbatore. We helped small and
            medium businesses build software and improve their existing systems.
            That experience gave me another perspective on engineering:
            understanding the problem and the constraints matters as much as
            choosing the technology.
          </p>
          <p>
            This blog is where I share what I learn along the way. You’ll find
            posts about software engineering, AI, developer tools, and
            experiments that sometimes end differently from how they started. I
            try to include what we tried, what the results showed, and what I’d
            do differently. Some posts are explanations; others are me
            documenting a lesson before I forget it and learn it again.
          </p>
          <p>
            I’m still learning, particularly as more of my work takes me into AI
            and machine learning. Writing helps me organise that learning, and
            hopefully saves someone else a little time.
          </p>
          <p>
            Away from the keyboard, I’ve also got into running. I’ll be running my
            first marathon on December 29.
          </p>
          <p>
            If you’d like to discuss engineering or explore working together,
            you can find me on{" "}
            <a href="https://www.linkedin.com/in/fasilmarshooq/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            .
          </p>
        </BioSection>
      </AboutContainer>
    </main>
  )
}

export const Head = () => (
  <Seo
    title="About Fasil Marshooq"
    description="Learn about Fasil Marshooq, a software engineer from Coimbatore, now based in Bangkok, working on engineering tools, AI agents, and distributed systems."
    pathname="/about/"
  />
)

export default AboutPage
