import './App.css'
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/about/About.jsx";
import Services from "./components/services/Services.jsx";
import Examples from "./components/examples/Examples.jsx";
import Contacts from "./components/contacts/Contacts.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/works" element={<Examples />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
