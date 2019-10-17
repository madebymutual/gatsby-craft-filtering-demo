import React from "react"
import { Styled } from "theme-ui"
import Container from "../components/container"

const Layout = ({ children }) => (
  <>
    <Styled.root>
      <Container>{children}</Container>
    </Styled.root>
  </>
)

export default Layout
