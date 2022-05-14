import { Route, Routes } from 'react-router-dom';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Footer from './pages/Footer/Footer';
import Catalog from './pages/Catalog/Catalog';
import Delivery from './pages/Delivery/Delivery';
import Brand from './pages/Brand/Brand';
import AboutUs from './pages/AboutUs/AboutUs';
import Certificates from './pages/Certificate/Certificates';
import Help from './pages/Help/Help';
import Contact from './pages/Contact/Contact';


function App() {
  return (
    <div className="container mx-auto">
      <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path='/delivery' element={<Delivery />} />
            <Route path='/brand' element={<Brand />}/>
            <Route path='/aboutUs' element={<AboutUs />}/>
            <Route path='/certificates' element={<Certificates />} />
            <Route path='/help' element={<Help />} />
            <Route path='/contact' element={<Contact />} />
            <Route path="*" element={<NotFound />}/>
          </Routes>
      <Footer />
    </div>
  );
}

export default App;
