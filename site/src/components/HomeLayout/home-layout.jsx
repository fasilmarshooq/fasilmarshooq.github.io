import React from "react"
import { Link } from "gatsby"
import { Bio } from "../Bio/bio"
import PostListLayout from "../blog-layout"
import styled from "styled-components"

const StyledHeader = styled.header`
  padding: 1rem 0 3rem 0;
  font-size: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;

  @media (max-width: 768px) {
    padding: 0 0 1.5rem 0;
    font-size: 2.5rem;
    align-items: flex-start;
    flex-direction: column;
    gap: 1rem;
  }

  @media (max-width: 550px) {
    padding: 0 0 1.2rem 0;
    font-size: 2rem;
  }

  @media (max-width: 350px) {
    padding: 0 0 2rem 0;
    font-size: 1.2rem;
  }
`

const SiteTitle = styled.h1`
  font-size: clamp(2rem, 5vw, 2.5rem);
  font-weight: bolder;
  line-height: 110%;
  color: var(--white-1);
`

const SiteNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.82rem;
  letter-spacing: 0;
  text-transform: uppercase;

  a {
    color: var(--white-2);
    border-bottom: 1px solid transparent;
    transition: color 0.2s ease, border-color 0.2s ease;
  }

  a:hover {
    color: var(--accent);
    border-color: var(--accent);
  }

  @media (max-width: 550px) {
    width: 100%;
    justify-content: space-between;
    font-size: 0.78rem;
  }
`

export const HomeLayout = () => {
  return (
    <main>
      <StyledHeader>
        <Link to="/">
          <SiteTitle>Fasil Marshooq</SiteTitle>
        </Link>
        <SiteNav aria-label="Primary navigation">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/tags/tech">Tags</Link>
        </SiteNav>
      </StyledHeader>
      <Bio />
      <PostListLayout />
    </main>
  )
}
