import React from "react"
import { Link } from "gatsby"
import Seo from "../seo"
import { Bio } from "../Bio/bio"
import PostListLayout from "../blog-layout"
import styled from "styled-components"

const StyledHeader = styled.header`
  padding: 2rem 0 4rem 0;
  font-size: 3rem;

  @media (max-width: 768px) {
    padding: 0 0 2rem 0;
    font-size: 2.5rem;
  }

  @media (max-width: 550px) {
    padding: 0 0 2rem 0;
    font-size: 2rem;
  }

  @media (max-width: 350px) {
    padding: 0 0 2rem 0;
    font-size: 1.2rem;
  }
`

const SiteTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bolder;
  line-height: 110%;
  color: var(--white-1);
`

export const HomeLayout = () => {
  return (
    <main>
      <Seo title="Home" />
      <StyledHeader>
        <Link to="/">
          <SiteTitle>Fasil Marshooq</SiteTitle>
        </Link>
      </StyledHeader>
      <Bio />
      <PostListLayout />
    </main>
  )
}
