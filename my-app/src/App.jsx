import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Testimonial from './components/Testimonials/Testimonial';
import './App.css';
import "./bootstrap.min.css"
import "./responsive.css"
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="body">
      <Navbar/>
      <Hero />
      <About />
      <Testimonial/>
      <Footer />
    
    </div>
  );
}

export default App;
