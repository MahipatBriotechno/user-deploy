
import { Match } from "@reach/router";
import { Router } from "@reach/router";
import React from "react"

import Home from "../Component/Home/Home"

export default function HomePage() {
  
  return (

    <div style={{ background: 'white' }}>
      <Router  >
        <Home path="User/Pages/*" />
      </Router>
    
    </div>

  )
}
