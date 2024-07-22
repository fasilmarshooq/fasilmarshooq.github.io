import styled from "styled-components"

export const DisplayPic = styled.div`
  max-width: 100px;
  max-height: 100px;
  img {
    border-radius: 50%;
  }
  @media (max-width: 768px) {
    max-width: 150px;
    max-height: 150px;
    margin-bottom: 10px;
  }
`

export const StyledBio = styled.div`
  display: flex;
  align-items: center; // Keeps items aligned at the center vertically
  justify-content: flex-start; // Aligns items to the start of the container

  @media (max-width: 768px) {
    flex-direction: column; // Stacks items vertically on smaller screens
    align-items: center; // Centers items horizontally in the container
    justify-content: center; // Adjusts content to be centered vertically, if needed
    text-align: center; // Centers the text within each child component
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
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 0;
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
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 0;
    margin-bottom: 10px;
  }
`
