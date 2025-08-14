import './App.css'
import Footer from './component/Footer';
import Home from './component/Home';
import NavBar from './component/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ServiceDetailPage from './component/ServiceDetailPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './component/Aboutus';
import ScrollToTop from './component/ScrollToTop';
import ScrollToHashElement from './component/ScrollToHashElement';


function App() {

  return (
    <>
      {/* <Router> */}
      <BrowserRouter>
        <ScrollToHashElement />
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/services/:id" element={<ServiceDetailPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
