import React from "react"
import { Highlight, Prism } from "prism-react-renderer"
import { useState } from "react"
import CopyToClipboard from "react-copy-to-clipboard"
import { FaCopy } from "react-icons/fa"
import { MdOutlineDoneAll } from "react-icons/md"
import * as postStyles from "./styles/post.module.css"
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
      code={children.props.children.trim()}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className={postStyles.codeBlockShell}>
          <CopyToClipboard
            text={children.props.children.trim()}
            onCopy={handleCopy}
          >
            <button className={postStyles.copyButton} type="button">
              {copied ? <MdOutlineDoneAll /> : <FaCopy />}
            </button>
          </CopyToClipboard>
          <pre
            className={className}
            style={{
              ...style,
              whiteSpace: "pre",
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
