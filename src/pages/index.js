import React from "react"
import { Match } from '@reach/router'

const isBrowser = () => typeof window !== "undefined"
export default function Home() {
  <>
    <Match path="/">
      {
        isBrowser() && window.location.replace("/User/Pages/homepage")
       
      }
    </Match>
  </>

}
