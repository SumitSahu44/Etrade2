import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Global Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SocialWidget from './components/SocialWidget';
import Chatbot from './components/Chatbot';
// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Management from './pages/Management';
import BuyerPlatform from './pages/BuyerPlatform';
import SellerPlatform from './pages/SellerPlatform';
import Tenders from './pages/Tenders';
import Circular from './pages/Circular';
import Gallery from './pages/Gallery';
import Quotation from './pages/Quotation';
import Terms from './pages/Terms';
import TextileProducts from './pages/TextileProducts';
import EnquiryPage from './pages/EnquiryPage';
import ScrollToTop from './components/ScrollToTop';
import EQuotation from './pages/EQuotation';
import EAuction from './pages/EAuction';
import Careers from './pages/Careers';
import Blogs from './pages/Blogs';
import Media from './pages/MediaGallery';
import TextileAssociates from './pages/TextileAssociates';
import VisitAppointment from './pages/VisitAppointment';
import Map from './components/Map';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <ScrollToTop />


        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Products" element={<TextileProducts />} />
            <Route path="/services" element={<Services />} />
            <Route path="/management" element={<Management />} />
            <Route path="/buyer" element={<BuyerPlatform />} />
            <Route path="/seller" element={<SellerPlatform />} />
            <Route path="/tenders" element={<Tenders />} />
            <Route path="/circular" element={<Circular />} />
            {/* <Route path="/blog" element={<Blog />} /> */}
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/EQuotation" element={<EQuotation />} />
            <Route path="/EAuction" element={<EAuction />} />
            <Route path="/EnquiryPage" element={<EnquiryPage />} />
            <Route path="/media" element={<Media />} />
            <Route path="/VisitAppointment" element={<VisitAppointment />} />
            <Route path="/textile-associates" element={<Map />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>

        <Footer />
        <Chatbot />
        <SocialWidget /> {/* Handles WhatsApp & Social Icons */}
      </div>
    </Router>
  );
}

export default App;