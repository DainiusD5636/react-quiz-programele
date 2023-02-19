import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Settings from "./pages/Settings";
import Questions from "./pages/Questions";
import FinalScreen from "./pages/FinalScreen";
import { Container } from "@mui/material";
import { Box } from "@mui/system";
import FotoQuiz from "./assets/quiz.png";

import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Header src={FotoQuiz}></Header>
      <div className="Content">
        <Router>
          <Container maxWidth="sm">
            <Box textAlign="center" mt={5}>
              <Routes>
                <Route path="/" element={<Settings />}></Route>
                <Route path="/questions" element={<Questions />}></Route>
                <Route path="/score" element={<FinalScreen />}></Route>
              </Routes>
            </Box>
          </Container>
        </Router>
      </div>

      <Footer />
    </div>
  );
}

export default App;
