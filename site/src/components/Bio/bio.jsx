import React from "react"
import {
  StyledBio,
  BioContent,
  DisplayPic,
  StyledTexts,
  StyledSocials,
} from "./styles"
import { StaticImage } from "gatsby-plugin-image"

const socials = {
  github: {
    title: "github",
    username: `fasilmarshooq`,
    url: `https://github.com/`,
  },
  linkedin: {
    title: "linkedin",
    username: `fasilmarshooq`,
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
        <StaticImage
          src={"../../images/dp.jpeg"}
          alt="Fasil Marshooq speaking at an event"
          loading="eager"
          placeholder="none"
          imgStyle={{ objectFit: "cover", objectPosition: "50% 38%" }}
        />
      </DisplayPic>

      <BioContent>
        <StyledTexts>
          <p>
            Hey, I am Fasil Marshooq (@fasilmarshooq), a software engineer
            writing about software engineering, distributed systems, AI, and
            developer tools.
          </p>
          <p className="bio-link">
            <a href="/about">You can read more about me here</a>
          </p>
        </StyledTexts>
        <StyledSocials>
          {Object.keys(socials).map((social_id, i) => (
            <a
              href={socials[social_id].url + socials[social_id].username}
              target="_blank"
              rel="noreferrer"
              key={i}
              aria-label={socials[social_id].title}
            >
              <img
                src={`/icons/${socials[social_id].title}.png`}
                alt={socials[social_id].title}
              />
            </a>
          ))}
        </StyledSocials>
      </BioContent>
    </StyledBio>
  )
}
