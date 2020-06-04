import React from "react"

const CodeBlock = props => {
  return (
    <div className="commands">
      <div className="header-codeblock">
        <h3>{props.title}</h3>
      </div>
      <div className="codeblock">
        <div className="shell">
          <span>Shell</span>
        </div>
        <p>{props.code}</p>
      </div>
      <div className="description">
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default CodeBlock
