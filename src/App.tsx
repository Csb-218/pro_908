import { useState } from 'react'
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import Footer from './components/Footer';
import { Alert, AlertDescription,  } from "@/components/ui/alert";
import { Button } from "./components/ui/button";

// import { Button } from "@/components/ui/button"
import "./App.css";
import Brands from './components/Brands';
import HeroCTA from './components/HeroCTA';

function App() {
  const [showAlert, setShowAlert] = useState(true);

  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-16">
        {/* Your main content goes here */}
        {
          showAlert && (
            <Alert className="bg-[#0064a0] border-l-4 py-4 px-6 rounded-full ">
              {/* <AlertTitle>Heads up!</AlertTitle> */}
              <AlertDescription className="text-white flex items-center">
                <span className="flex gap-x-1">
                  <span>Slack is your </span>
                  <span className="font-bold"> digital HQ.</span>
                  <span>
                    Meet the new features keeping teams connected in a
                    work-from-anywhere world.
                  </span>
                  <span className="font-bold underline">Let's go</span>
                  <span className="text-base">→</span>
                </span>
                <Button 
                 variant="ghost" 
                 className="ml-auto text-2xl hover:bg-transparent hover:text-white cursor-pointer"
                 onClick={() => setShowAlert(false)}
                 >
                  x
                </Button>
              </AlertDescription>
            </Alert>
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
