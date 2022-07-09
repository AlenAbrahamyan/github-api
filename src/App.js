import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import * as Styled from "./components/header/styled"
import UserInfo from "./components/userInfo"
import Header from "./components/header"
import { getLightMode } from "./features/lightModeSlice"
import { useSelector } from "react-redux"
import { getTheme } from "./features/getTheme"

function App() {

  const lightMode = useSelector(getLightMode)
  const theme = getTheme(lightMode)

  return (
    <Styled.App theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Header theme={theme}/>} />
            <Route
              path=":userId"
              element={
                <>
                  <Header theme={theme}/>
                  <UserInfo theme={theme}/>
                </>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </Styled.App>
  )
}

export default App
