import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import { Content, Footer } from "../styles/components"
import "./layout.css"

const Layout = ({ children }) => (
  <>
    <Header />
    <Content>
      <main>{children}</main>
      <Footer>
        made with{" "}
        <span role="img" aria-label="emoji">
          💚
        </span>{" "}
        by
        <a href="https://www.andrescampuzano.com">Andres Campuzano</a>
      </Footer>
    </Content>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
