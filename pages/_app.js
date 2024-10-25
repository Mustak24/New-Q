import "@/styles/globals.css";
import Alert from "@/Components/Alert";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";


export default function App({ Component, pageProps }) {
 
  const [alerts, setAlert] = useState([])
  const router = useRouter()
  const Loader = useRef()

  useEffect(()=>{
    router.events.on('routeChangeStart', ()=>{
        Loader.current.style.display = 'block'
        setTimeout(()=>{
            Loader.current.style.transition = 'all 8s'
            Loader.current.style.width = '80%';
        },1)
    })
    router.events.on('routeChangeComplete', ()=>{
        setTimeout(() => {
            Loader.current.style.transition = 'all .1s'
            Loader.current.style.width = '100%';   
            setTimeout(()=>{
                Loader.current.style.display = 'none'
                Loader.current.style.width = '0%'
            },100)
        });
    })
  },[])

 
  useEffect(()=>{

    window.onoffline = () => {
      setAlert([...alerts, {type: 'error', title: 'Offline', dec: 'No Internet connetion.'}])
    }
    
    window.ononline = () => {
      setAlert([...alerts, {type: 'success', title: 'Online', dec: 'Internet connetion is back.'}])
    }
    
  }, [])
  
  return (<>
      <div className="scroll-bar"></div>
      <div ref={Loader} className="w-0 h-1 bg-red-500 fixed top-0 left-0 rounded-full z-[800]"></div>
      <Alert alerts={alerts} />
      <Component {...pageProps} alerts={alerts} setAlert={setAlert} />    
  </>)
}
