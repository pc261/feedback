import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./pages/Home"

import {ThemeProvider} from "styled-components"
import {theme} from "./styles/theme.js"
import { GlobalStyle } from "./styles/global.js"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }
])

export  function App() {
  return (
    <ThemeProvider  theme={theme}>
      <RouterProvider router = {router} />
      <GlobalStyle/>
    </ThemeProvider>
  )
}

