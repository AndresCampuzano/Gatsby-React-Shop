import React from "react"
import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"
import { Link } from "gatsby"

export default function thanks() {
  return (
    <div>
      <SEO title="Cancel purchase" />
      <Purchase>
        <h2>Cancel purchase</h2>
        <p>We hope to see you soon!</p>
        <span role="img" aria-label="emoji">
          💚
        </span>
        <Link to="/">
          <Button>Back to Catalogue</Button>
        </Link>
      </Purchase>
    </div>
  )
}
