import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navabar";
import { darkTheme, lightTheme } from "./utils/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";
import Signin from "./pages/Signin";
import Search from "./pages/Search";

//styled components for Menu
const Container = styled.div`
  display: flex;
`;

//styled components for Navbar
const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`;

const Wrapper = styled.div``;

function App() {
  const [mode, setMode] = useState(true);

  return (
    <ThemeProvider theme={mode ? lightTheme : darkTheme}>
      <Container>
        <BrowserRouter>
          {/* Main Menu */}
          <Menu mode={mode} setMode={setMode} />
          {/* Main Content */}
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path="/">
                  <Route index element={<Home type="random" />} />
                  <Route path="subscriptions" element={<Home type="sub" />} />
                  <Route path="trends" element={<Home type="trend" />} />
                  <Route path="signin" element={<Signin />} />
                  <Route path="search" element={<Search />} />
                  <Route path="video">
                    <Route path=":id" element={<Video />} />
                  </Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
