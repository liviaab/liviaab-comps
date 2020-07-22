import React from "react"
import ReactDOM from "react-dom"
import { MyAvatar, PrimaryButton, OutlinedButton, QuietButton } from "./lib"

ReactDOM.render(
  <div>
      <MyAvatar />
      <br/><br/>
      <PrimaryButton />
      <br/><br/>
      <OutlinedButton />
      <br/><br/>
      <QuietButton />
      <br/><br/>
  </div>,
  document.getElementById("root")
);
