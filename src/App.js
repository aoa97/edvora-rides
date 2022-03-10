import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Container from "./components/styles/Container.styled";
import GlobalStyle from "./components/styles/Global.styled";
import NeasrestRides from "./pages/NearestRides";
import PastRides from "./pages/PastRides";
import UpcomingRides from "./pages/UpcomingRides";
import Navbar from "./components/Navbar";
import { StoreProvider } from "./context/AppContext.js";

const theme = {
  colors: {
    header: "#101010",
    body: "#292929",
    rideItem: "#171717",
    rideItemTag: "#000",
    filterMenu: "#131313",
    filterMenuItem: "#232323",
  },
};

const App = () => (
  <StoreProvider>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Router>
        <Container>
          <Navbar />
          <Routes>
            <Route path="/" element={<NeasrestRides />} />
            <Route path="/upcoming-rides" element={<UpcomingRides />} />
            <Route path="/past-rides" element={<PastRides />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  </StoreProvider>
);

export default App;
