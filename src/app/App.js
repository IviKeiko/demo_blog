import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Authors from "./Authors";
import About from "./About";
import SingleAuthor from "./SingleAuthor";
import SinglePost from "./SinglePost";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="authors" element={<Authors />} />
          <Route path="about" element={<About />} />
          <Route path="singleauthor" element={<SingleAuthor />} />
          <Route path="singlepost" element={<SinglePost />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
