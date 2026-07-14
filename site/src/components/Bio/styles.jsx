import styled from "styled-components"

export const DisplayPic = styled.div`
  width: clamp(118px, 16vw, 150px);
  aspect-ratio: 1;
  border-radius: 28px;
  padding: 4px;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  box-shadow: 0 22px 60px rgba(0, 0, 0, 0.34), 0 0 0 1px var(--border);

  .gatsby-image-wrapper,
  img {
    border-radius: 24px;
  }

  .gatsby-image-wrapper img,
  .gatsby-image-wrapper [data-main-image] {
    opacity: 1 !important;
    transition: none !important;
  }

  @media (max-width: 768px) {
    width: 128px;
    margin-bottom: 0;
  }
`

export const StyledBio = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
  padding: 1.5rem;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: linear-gradient(145deg, rgba(37, 40, 44, 0.82), rgba(21, 22, 24, 0.9));

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 1rem;
    padding: 1.2rem;
  }
`

export const BioContent = styled.section`
  min-width: 0;
`

export const StyledTexts = styled.div`
  line-height: 1.65rem;
  font-weight: 300;
  max-width: 32rem;

  a {
    color: var(--accent);
    border-bottom: 1px solid var(--accent);
  }

  p {
    margin-bottom: 1.1rem;
  }

  .bio-link {
    font-size: 0.9rem;
    opacity: 0.86;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export const StyledSocials = styled.div`
  margin-top: 1rem;
  a {
    margin: 0 0.5rem 0 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    width: 28px;
    height: 28px;
    line-height: 0;
    border-radius: 999px;
    background: var(--white-1);
    transition: transform 0.2s ease, background 0.2s ease;
  }

  img {
    filter: none !important;
    width: 18px;
    height: 18px;
    object-fit: contain;
  }

  a:hover {
    transform: translateY(-2px);
    background: var(--accent);
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0;
  }
`
