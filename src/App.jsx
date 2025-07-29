import { useState, useEffect } from "react";

import "./index.css";
import Bento from "./components/Bento";
import MobileNotice from "./components/MobileNotice";

function App() {
  const [isMobile, setIsMobile] = useState(false);

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

  return (
    <>
      <div className="h-full bg-black flex justify-center items-center">
        <div className="    ">
          <Bento isMobile={isMobile} />
        </div>
      </div>
    </>
  );
}

export default App;
