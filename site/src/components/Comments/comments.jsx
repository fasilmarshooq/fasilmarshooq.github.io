import * as React from "react"
import Giscus from "@giscus/react"

const Comments = () => {
  return (
    <div style={{ marginTop: "50px" }}>
      <div
        style={{
          height: "2px",
          background:
            "linear-gradient(to right, transparent, grey, transparent)",
          margin: "10px 10px",
        }}
      />
      <Giscus
        id="comments"
        repo="fasilmarshooq/fasilmarshooq.github.io"
        repoId="R_kgDOLkbzKg"
        category="General"
        categoryId="DIC_kwDOLkbzKs4CieJh"
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="dark"
        lang="en"
        loading="lazy"
        crossorigin="anonymous"
      />
    </div>
  )
}

export default Comments
