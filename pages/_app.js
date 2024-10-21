import "@/styles/globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Alert from "@/Components/Alert";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
 
  const [alerts, setAlert] = useState([])
 
  useEffect(()=>{

    window.onoffline = () => {
      setAlert([...alerts, {type: 'error', title: 'Offline', dec: 'No Internet connetion.'}])
    }
    
    window.ononline = () => {
      setAlert([...alerts, {type: 'success', title: 'Online', dec: 'Internet connetion is back.'}])
    }
    
  }, [])

  useEffect(()=>{
    fetch(`${window.location.origin}/api/coutVisit?page=${window.location.pathname.slice(1,).toLocaleUpperCase() || 'HOME'}&time=${parseInt(new Date().getTime()/100000)}`)
  })
  
  return (<>
      <div className="scroll-bar"></div>
      <Navbar />
      <Alert alerts={alerts} />
      <Component {...pageProps} alerts={alerts} setAlert={setAlert} />
      <Footer />
    
  </>)
}
