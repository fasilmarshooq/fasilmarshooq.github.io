import styled from "styled-components"

export const DisplayPic = styled.img`
  border-radius: 50%;
  max-width: 100px;
  max-height: 100px;
  @media (max-width: 350px) {
    max-width: 50px;
    max-height: 50px;
  }
`

export const StyledBio = styled.section`
  display: flex;

  align-items: center;
  margin-left: 2rem;
  @media (max-width: 550px) {
    align-items: flex-start;
  }
  @media (max-width: 550px) {
    margin-bottom: 1.5rem;
  }
`
export const StyledTexts = styled.div`
  line-height: 1.2rem;
  font-weight: 300;
  margin-left: 2rem;
  a {
    color: cyan;
    border-bottom: 1px solid cyan;
  }

  p {
    margin-bottom: 1rem;
  }
  @media (max-width: 550px) {
    margin-left: 1rem;
  }
`

export const StyledSocials = styled.div`
  margin-top: 1rem;
  margin-left: 2rem;
  a {
    margin: 0 0.5rem 0 0;
    display: inline-block;
    padding: 0;
    width: 25px;
    line-height: 0;
  }

  img {
    filter: invert() !important;
    width: 100%;
    height: 100%;
    transition: all 0.2s ease-in-out;
  }

  img:hover {
    transform: scale(1.2);
  }
  @media (max-width: 550px) {
    margin-left: 1rem;
  }
`
