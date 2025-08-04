import { useState, useEffect } from "react";

import "./index.css";
import Bento from "./components/Bento";
import Loader from "./components/Loader";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Check on mount
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200); // fake delay
    return () => clearTimeout(timer);
  }, []);

  return <>{Loading ? <Loader /> : <Bento isMobile={isMobile} />}</>;
}

export default App;
