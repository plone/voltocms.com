import React from "react"

const CodeBlock = props => {
  return (
    <div
      className="commands"
      style={{ width: "900px", margin: "60px auto 5px auto" }}
    >
      <div
        className="header-codeblock"
        style={{ textAlign: "start", marginBottom: "5px", maxWidth: "500px" }}
      >
        <h3 style={{ marginBottom: "0" }}>{props.title}</h3>
      </div>
      <div
        className="codeblock"
        style={{
          backgroundColor: "#eef2ed",
          border: "1px solid grey",
          width: "900px",
          margin: "0 auto",
          borderRadius: "5px",
          paddingTop: "5px",
        }}
      >
        <div className="shell" style={{ width: "100px", marginLeft: "50px" }}>
          <span
            style={{
              border: "1px solid inherit",
              backgroundColor: "rgb(209,221,204)",
              padding: "6px",
              textTransform: "uppercase",
              borderRadius: "5px",
            }}
          >
            Shell
          </span>
        </div>
        <p
          style={{
            textAlign: "start",
            marginLeft: "45px",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          {props.code}
        </p>
      </div>
      <div
        className="description"
        style={{ maxWidth: "500px", textAlign: "start", marginTop: "10px" }}
      >
        <p style={{ textAlign: "start" }}>{props.description}</p>
      </div>
    </div>
  )
}

export default CodeBlock
