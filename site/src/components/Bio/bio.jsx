import React from "react"
import { StyledBio, DisplayPic, StyledTexts, StyledSocials } from "./styles"
import Skeleton from "react-loading-skeleton"
import { StaticImage } from "gatsby-plugin-image"

const socials = {
  github: {
    title: "github",
    username: `fasilmarshooq`,
    url: `https://github.com/`,
  },
  linkedin: {
    title: "linkedin",
    username: `srsmaurya`,
    url: `https://linkedin.com/in/`,
  },
  email: {
    title: "email",
    username: `fasilmarshooq@gmail.com`,
    url: `mailto:`,
  },
}

export const Bio = () => {
  return (
    <StyledBio>
      <DisplayPic>
        <StaticImage src={"../../images/dp.jpeg"} alt="DP" />
      </DisplayPic>

      <section style={{ marginLeft: "1rem" }}>
        <StyledTexts>
          <p>I talk about Dotnet, Sql and others</p>
          <p>
            You can follow me on{" "}
            <a href="https://www.linkedin.com/in/fasilmarshooq/">LinkedIn</a>
          </p>
        </StyledTexts>
        <StyledSocials>
          {Object.keys(socials).map((social_id, i) => (
            <a
              href={socials[social_id].url + socials[social_id].username}
              target="_blank"
              rel="noreferrer"
              key={i}
            >
              <img
                src={`/icons/${socials[social_id].title}.png`}
                alt={socials[social_id].title}
              />
            </a>
          ))}
        </StyledSocials>
      </section>
    </StyledBio>
  )
}
