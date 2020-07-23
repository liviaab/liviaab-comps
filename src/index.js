import React from "react"
import ReactDOM from "react-dom"
import { PrimaryButton, OutlinedButton, QuietButton } from "./lib"

ReactDOM.render(
  <div>
      <PrimaryButton />
      <br/><br/>
      <OutlinedButton />
      <br/><br/>
      <QuietButton />
      <br/><br/>
  </div>,
  document.getElementById("root")
);
