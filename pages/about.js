import Loading from "@/Components/Loading";
import { useEffect, useState } from "react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

export default function About(props) {
  const [visiter, setVisiter] = useState({ Home: 0, All: 0 });
  const { alerts, setAlert } = props;

  useEffect(() => {
    fetch(`${window.location.origin}/api/visiterCout`)
      .then((e) => e.json())
      .then((e) => {
        if (e.alert) setAlert([...alerts, e.alert]);
        if (e.cout) setVisiter(e.cout);
    });

    fetch(`${window.location.origin}/api/coutVisit?page=${window.location.pathname.slice(1,).toLocaleUpperCase() || 'HOME'}&time=${parseInt(new Date().getTime()/100000)}`);

  }, []);

  return (
    <>
      <div>
        <Navbar navigationType="user" />
        <div className="w-full h-screen center flex-col">
          <Loading title="On Working" />
          <div className="text-center font-serif text-lg font-bold">
            <span>{visiter.All}</span>.<span>{visiter.Home}</span>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
