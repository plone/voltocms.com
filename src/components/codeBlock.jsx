import React, { useState } from "react"
import cx from "classnames"

const CodeBlock = props => {
  const [CodeToCopy, setCodeToCopy] = useState(props.code)
  const [ButtonCopy, setButtonCopy] = useState("Copy")

  return (
    <div className="commands">
      <div className="header-codeblock">
        <h3>{props.title}</h3>
      </div>
      <div className="codeblock">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div className="shell">
              <span>Shell</span>
            </div>
            <p id="code">{props.code}</p>
          </div>
          <div>
            {process.browser && document.queryCommandSupported("copy") && (
              <button
                onClick={() => {
                  navigator.clipboard.writeText(CodeToCopy)
                  setButtonCopy("Copied")
                }}
                class={cx("copy-to-clipboard", {
                  copied: ButtonCopy === "Copied",
                })}
              >
                {ButtonCopy}
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="description">
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default CodeBlock
