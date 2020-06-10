import React from "react"
import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"
import { Link } from "gatsby"

export default function thanks() {
  return (
    <div>
      <SEO title="Successful purchase" />
      <Purchase>
        <h2>Successful purchase</h2>
        <p>We hope you enjoy your swap, wear it with proud!</p>
        <span role="img" aria-label="emoji">
          🛒👕
        </span>
        <Link to="/">
          <Button>Back to Catalogue</Button>
        </Link>
      </Purchase>
    </div>
  )
}
