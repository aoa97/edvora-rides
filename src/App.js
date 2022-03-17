import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Container from "./components/styles/Container.styled";
import GlobalStyle from "./components/styles/Global.styled";
import NeasrestRides from "./pages/NearestRides";
import PastRides from "./pages/PastRides";
import UpcomingRides from "./pages/UpcomingRides";
import Navbar from "./components/Navbar";
import useFetch from "./hooks/useFetch";

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

const App = () => {
  const { loading, rides, error } = useFetch();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Router>
        <Container>
          {loading ? (
            <h1>Loading ..</h1>
          ) : error ? (
            <h1>There's something wrong.</h1>
          ) : (
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<NeasrestRides rides={rides} />} />
                <Route path="/upcoming-rides" element={<UpcomingRides />} />
                <Route path="/past-rides" element={<PastRides />} />
              </Routes>
            </>
          )}
        </Container>
      </Router>
    </ThemeProvider>
  );
};

export default App;
