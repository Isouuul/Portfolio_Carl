import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Screens/LandingPage";
import Navbar from "./components/Navbar";
import About from "./Screens/About";
import Footer from "./Screens/Footer";
import Projects from "./Screens/Projects";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <main style={{ paddingTop: '120px', flex: 1 }}>
          <Routes>
            <Route path="/" element={<>
              <LandingPage />
              <About />
              <Projects />
              <Footer />
            </>} />
            <Route path="/projects" element={<>
              <Projects />
              <Footer />
            </>} />
            <Route path="/about" element={<>
              <About />
              <Footer />
            </>} />

          </Routes>
        </main>
      </Router>
    </ThemeProvider>
  );
}

export default App;