import React from "react"

const CodeBlock = props => {
  return (
    <div
      className="commands"
      style={{ width: "900pt", margin: "60pt auto 5pt auto" }}
    >
      <div
        className="header-codeblock"
        style={{ textAlign: "start", marginBottom: "5pt", maxWidth: "500pt" }}
      >
        <h3 style={{ marginBottom: "0" }}>{props.title}</h3>
      </div>
      <div
        className="codeblock"
        style={{
          backgroundColor: "#eef2ed",
          border: "1pt solid grey",
          width: "900pt",
          margin: "0 auto",
          borderRadius: "5pt",
          paddingTop: "5pt",
        }}
      >
        <div className="shell" style={{ width: "100pt", marginLeft: "50pt" }}>
          <span
            style={{
              border: "1pt solid inherit",
              backgroundColor: "rgb(209,221,204)",
              padding: "6pt",
              textTransform: "uppercase",
              borderRadius: "5pt",
            }}
          >
            Shell
          </span>
        </div>
        <p
          style={{
            textAlign: "start",
            marginLeft: "45pt",
            marginTop: "10pt",
            marginBottom: "10pt",
          }}
        >
          {props.code}
        </p>
      </div>
      <div
        className="description"
        style={{ maxWidth: "500pt", textAlign: "start", marginTop: "10pt" }}
      >
        <p style={{ textAlign: "start" }}>{props.description}</p>
      </div>
    </div>
  )
}

export default CodeBlock
