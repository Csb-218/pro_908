import { useState, useEffect } from 'react'
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import Footer from './components/Footer';
import Alert  from "@/components/Alert";

// import { Button } from "@/components/ui/button"
import "./App.css";
import Brands from './components/Brands';
import HeroCTA from './components/HeroCTA';

function App() {
  const [showAlert, setShowAlert] = useState(false);


  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowAlert(true);
    }, 3000); // 5 seconds
    return () => clearTimeout(timeout);
    }, []);

  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-16">
        {/* Your main content goes here */}
        {
          showAlert && (
           <Alert setShowAlert={setShowAlert} />
          )
        }
        <Hero />
        <Brands />
        <HeroCTA/>
        
      </main>
      <Footer />
    </>
  );
}

export default App;
