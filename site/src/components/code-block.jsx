import React from "react"
import { Highlight, defaultProps, Prism } from "prism-react-renderer"
import { useState } from "react"
import CopyToClipboard from "react-copy-to-clipboard"
import { FaCopy, Fa } from "react-icons/fa"
import { MdOutlineDoneAll } from "react-icons/md"
;(typeof global !== "undefined" ? global : window).Prism = Prism

require("prismjs/components/prism-csharp")
require("prismjs/components/prism-json")
require("prismjs/components/prism-bash")

const CodeBlock = ({ children }) => {
  // Extract the className from the code child
  const [copied, setCopied] = useState(false)
  const className = children.props.className || ""
  const language = className.replace(/language-/, "")

  if (!language) return children

  const handleCopy = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 3000) // Reset after 3 seconds
  }

  return (
    <Highlight
      {...defaultProps}
      code={children.props.children.trim()}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div style={{ position: "relative" }}>
          <CopyToClipboard
            text={children.props.children.trim()}
            onCopy={handleCopy}
          >
            <button
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: copied ? "green" : "grey",
                color: "white",
                border: "none",
                borderRadius: "4px",
                padding: "2px 5px",
                cursor: "pointer",
              }}
            >
              {copied ? <MdOutlineDoneAll /> : <FaCopy />}
            </button>
          </CopyToClipboard>
          <pre
            className={className}
            style={{
              ...style,
              whiteSpace: "pre-wrap", // Enable word wrapping
              wordWrap: "break-word", // Break long words
              padding: "10px",
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
        </div>
      )}
    </Highlight>
  )
}

const InlineCode = ({ children }) => {
  return (
    <code
      style={{
        backgroundColor: "#2d2d2d",
        color: "#f8f8f2",
        padding: "0.2em 0.4em",
        borderRadius: "3px",
      }}
    >
      {children}
    </code>
  )
}

export { CodeBlock, InlineCode }
