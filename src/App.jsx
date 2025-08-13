import { useState, useEffect } from "react";
import "./index.css";
import Bento from "./components/Bento";
import Loader from "./components/Loader";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Simulate loading time (e.g., fetching data)
    setTimeout(() => setLoading(false), 1800);

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // ✅ Conditional rendering here
  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Bento isMobile={isMobile} />
    </>
  );
}

export default App;
