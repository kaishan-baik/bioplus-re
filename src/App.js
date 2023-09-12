import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import SocialLinks from "./components/SocialLinks";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="App w-screen">
      <Navbar />
      <Home />
      <About />
      <Products />
      <Testimonials />
      <Contact />
      <Footer />
      <SocialLinks />
    </div>
  );
}

export default App;
