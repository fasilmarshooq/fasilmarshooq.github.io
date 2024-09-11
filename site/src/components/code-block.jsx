import React from "react"
import { Highlight, defaultProps, Prism } from "prism-react-renderer"
;(typeof global !== "undefined" ? global : window).Prism = Prism

require("prismjs/components/prism-csharp")

const CodeBlock = ({ children }) => {
  // Extract the className from the code child
  const className = children.props.className || ""
  const language = className.replace(/language-/, "")

  if (!language) return children

  return (
    <Highlight
      {...defaultProps}
      code={children.props.children.trim()}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{
            ...style,
            whiteSpace: "pre-wrap", // Enable word wrapping
            wordWrap: "break-word", // Break long words
          }}
        >
          {tokens.map((line, index) => (
            <div key={index} {...getLineProps({ line, key: index })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export default CodeBlock
