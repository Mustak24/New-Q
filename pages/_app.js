import "@/styles/globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Alert from "@/Components/Alert";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [alerts, setAlert] = useState([])
  return (<>
      <div className="scroll-bar"></div>
      <Navbar />
      <div className="relavite">
        <Alert alerts={alerts} />
        <Component {...pageProps} alerts={alerts} setAlert={setAlert} />
      </div>
      <Footer />
    
  </>)
}
