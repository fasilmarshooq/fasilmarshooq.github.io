import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledBackLink = styled(Link)`
  color: var(--white-1);
  text-decoration: none;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  display: inline-block;
  
  &:hover {
    text-decoration: underline;
  }
`

const BackLink = ({ children = "← Back to Home" }) => {
  return <StyledBackLink to="/">{children}</StyledBackLink>
}

export default BackLink
