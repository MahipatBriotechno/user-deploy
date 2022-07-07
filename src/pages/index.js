import React from "react"
import { Match,Redirect } from '@reach/router'
import { Router } from "@reach/router"
const isBrowser = () => typeof window !== "undefined"
export default function Home() {
  <>
    <Match path="/">
      {
        isBrowser() && window.location.assign("/User/Pages/homepage")
      //  <Redirect to="/User/Pages/homepage"/>
      }
    </Match>
  
  </>

}
