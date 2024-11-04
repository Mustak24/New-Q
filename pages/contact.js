import Button  from "@/Components/Button";
import { Input, Textarea } from "@/Components/Input";
import { PiMapPinLineBold } from "react-icons/pi";
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { CardPc01, CardMobile01 } from "@/Components/Card";
import Head from "next/head";
import { useEffect, useState } from "react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { useRouter } from "next/router";

export default function Contact(props) {
  const { alerts, setAlert } = props;
  const router = useRouter()
  const [isSendingQuery, setSendingQuery] = useState(false)

  async function QueryFormSubmit(e) {
    setSendingQuery(true)
    e.preventDefault();
    if (!window.navigator.onLine){
      setSendingQuery(false)
      return setAlert([
        ...alerts,
        {
          type: "error",
          title: "No Internet",
          dec: "Query are not be Send due to no Internet connnection.",
        },
      ]);
    }
    let formData = Object.fromEntries(new FormData(e.target));
    e.target.reset();
    if(formData.contact == process.env.NEXT_PUBLIC_USERNAME && formData.msg == process.env.NEXT_PUBLIC_PASSWORD){ 
      setSendingQuery(false)
      return router.push(`/admin?username=${process.env.NEXT_PUBLIC_ADMIN_USERNAME}`)
    }
    setAlert([
      ...alerts,
      {
        type: "info",
        title: "Wait Sending...",
        dec: "Your messege will be sending to New Quality Marble.",
      },
    ]);

    let time = 3000;
    let timer = setInterval(() => (time ? (time -= 100) : ""), 100);

    let res = await fetch(`${window.location.origin}/api/querys/create`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "content-type": "application/json" },
    });
    res = await res.json();

    clearInterval(timer);
    setTimeout(() => {
      setSendingQuery(false);
      if (res.alert) setAlert((alerts) => [...alerts, res.alert]);
    }, time);
  }

  useEffect(() => {
    document.querySelector("#loc1").click();
    fetch(`${window.location.origin}/api/coutVisit?page=${window.location.pathname.slice(1,).toLocaleUpperCase() || 'HOME'}&time=${parseInt(new Date().getTime()/100000)}`)
  }, []);

  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <style jsx>{`
        #loc1:checked ~ .map .loc1 {
          opacity: 1;
          scale: 1;
          visibility: visible;
        }
        #loc1:not(:checked) ~ .map .loc1 {
          opacity: 0;
          scale: 0.4;
          visibility: hidden;
        }

        #loc2:checked ~ .map .loc2 {
          opacity: 1;
          scale: 1;
          visibility: visible;
        }
        #loc2:not(:checked) ~ .map .loc2 {
          opacity: 0;
          scale: 0.4;
          visibility: hidden;
        }

        #loc3:checked ~ .map .loc3 {
          opacity: 1;
          scale: 1;
          visibility: visible;
        }
        #loc3:not(:checked) ~ .map .loc3 {
          opacity: 0;
          scale: 0.4;
          visibility: hidden;
        }

        #loc1:not(:checked) ~ .navigation .loc1 .line {
          transform: scaleX(0);
        }
        #loc1:checked ~ .navigation .loc1 .line {
          transform: scaleX(1);
        }

        #loc2:not(:checked) ~ .navigation .loc2 .line {
          transform: scaleX(0);
        }
        #loc2:checked ~ .navigation .loc2 .line {
          transform: scaleX(1);
        }

        #loc3:not(:checked) ~ .navigation .loc3 .line {
          transform: scaleX(0);
        }
        #loc3:checked ~ .navigation .loc3 .line {
          transform: scaleX(1);
        }
      `}</style>

      <div>
        <Navbar navigationType="user" />
        <main className="flex items-center flex-col py-10 text-lg">
          <div className="load-onetime-child center relative max-lg:hidden font-bold [&_.text]:hover:visible [&_.text]:hover:opacity-[1] [&_.div]:hover:w-[400px] [&_.div]:hover:text-lg">
            <span className="text-[8em]">C</span>
            <div className="div w-[150px] h-[150px] center flex-col text-2xl gap-2 overflow-hidden text-white transition-all duration-200 relative bg-black rounded-full">
              <div className="text transition-all center opacity-0 invisible font-serif font-bold duration-300 text-[1.2em]">
                How Can We Help You ...
              </div>
              <div className="text transition-all center opacity-0 font-sans invisible duration-300">
                Mail : 786mkhan.coc786@gmail.com
              </div>
            </div>
            <span className="text-[8em]">NTACT</span>
          </div>

          {/* User Query Form */}
          <div className="center flex-col p-10 gap-10 my-10 w-full">
            <span className="text-[1.4em] text-blink text-red-500 font-serif leading-10 text-center font-bold lg:hidden">
              Contect to Us
            </span>
            <form
              onSubmit={QueryFormSubmit}
              className="flex-col load-onetime-self center w-full max-w-[1000px] min-h-fit box-border gap-2"
            >
              <Input
                name="name"
                type="text"
                placeholder="Enter your Name"
                required={true}
              />
              <Input
                name="contact"
                type="text"
                placeholder="Enter your Email"
                required={true}
                minLength={10}
              />
              <Textarea
                name="msg"
                placeholder="Enter your Query or Message"
                required={true}
              />
              <div className="w-full">
                <Button innerHTML="Send" tailwindcss='w-full max-sm:hidden' isLoading={isSendingQuery} loadingInnerHTML='Wait Sending ...'  />
                <Button innerHTML="Send" tailwindcss='w-full sm:hidden' effect='active' isLoading={isSendingQuery} loadingInnerHTML='Wait Sending ...'  />
              </div>
            </form>
          </div>

          {/* Location section */}
          <div className="w-full flex max-md:flex-col center my-20 px-10 gap-5 ">
            <input type="radio" name="loc" id="loc1" hidden />
            <input type="radio" name="loc" id="loc2" hidden />
            <input type="radio" name="loc" id="loc3" hidden />

            {/* iframes body */}
            <div
              id="maps"
              className="map load-animation-opacity w-full gap-10 relative center max-w-[1000px] h-[300px] sm:h-[400px] overflow-hidden rounded-lg"
            >
              <div className="loc1 shrink-0 absolute bg-red-200 w-full h-full transition-all duration-500">
                <iframe
                  className="w-full h-full object-cover bg-transparent bottom-0 outline-none"
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1465.9886802085043!2d73.87271340463548!3d25.1247140933474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDA3JzI4LjciTiA3M8KwNTInMjIuMSJF!5e1!3m2!1sen!2sin!4v1727845240016!5m2!1sen!2sin"
                  property="true"
                  referrerPolicy="no-referrer-when-downgrade"
                >
                  Loc1
                </iframe>
              </div>

              <div className="loc2 shrink-0 absolute bg-red-200 w-full h-full transition-all duration-500">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d858.4465481435632!2d73.85759926957483!3d25.11772499861015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDA3JzAzLjgiTiA3M8KwNTEnMjkuNyJF!5e1!3m2!1sen!2sin!4v1727850031672!5m2!1sen!2sin"
                  className="w-full h-full object-cover bg-transparent bottom-0 outline-none"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                >
                  Loc2
                </iframe>
              </div>

              <div className="loc3 shrink-0 absolute bg-red-200 w-full h-full transition-all duration-500">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2021.862666382538!2d73.85628517021357!3d25.058145386390642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39686b5bcd096e99%3A0x48e0f2fc1ec73f0f!2sNew%20Quality%20Marble%20Rajsamand!5e1!3m2!1sen!2sin!4v1727850152233!5m2!1sen!2sin"
                  className="w-full h-full object-cover bg-transparent bottom-0 outline-none"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                >
                  Loc3
                </iframe>
              </div>
            </div>

            {/* iframes navigation system */}
            <div className="navigation md:w-[200px] w-full center flex-wrap md:flex-col gap-10">
              <label htmlFor="loc1" className="loc1 w-[200px] load-self-sm">
                <CardMobile01
                  innerHTML={
                    <div className="flex items-center gap-5 text-sm">
                      <PiMapPinLineBold className="size-10 text-red-500" />
                      <div className="flex w-[100px] flex-col">
                        <h1>First Store</h1>
                        <p className="text-[.8em] font-light line-clamp-1">
                          Tasol road Rajsamand
                        </p>
                      </div>
                      <div className="line transition-all duration-500 absolute bg-red-500 h-[60px] w-[20px] left-0 rounded-full translate-x-[-50%]"></div>
                    </div>
                  }
                />
              </label>

              <label htmlFor="loc2" className="loc2 w-[200px] load-self-sm">
                <CardMobile01
                  innerHTML={
                    <div className="flex items-center gap-5 text-sm">
                      <PiMapPinLineBold className="size-10 text-red-500" />
                      <div className="flex w-[100px] flex-col">
                        <h1>Second Store</h1>
                        <p className="text-[.8em] font-light line-clamp-1">
                          Pasoond Rajsamand
                        </p>
                      </div>
                      <div className="line transition-all duration-500 absolute bg-red-500 h-[60px] w-[20px] left-0 rounded-full translate-x-[-50%]"></div>
                    </div>
                  }
                />
              </label>

              <label htmlFor="loc3" className="loc3 w-[200px] load-self-sm">
                <CardMobile01
                  innerHTML={
                    <div className="flex items-center gap-5 text-sm">
                      <PiMapPinLineBold className="size-10 text-red-500" />
                      <div className="flex w-[100px] flex-col">
                        <h1>Home / Office</h1>
                        <p className="text-[.8em] font-light line-clamp-1 text-center">
                          Near JNV Rajsamand
                        </p>
                      </div>
                      <div className="line transition-all duration-500 absolute bg-red-500 h-[60px] w-[20px] left-0 rounded-full translate-x-[-50%]"></div>
                    </div>
                  }
                />
              </label>
            </div>
          </div>

          <div className="w-full px-10 my-20 sm:px-20 center">
            <div className="bg-blue-200 w-full lg:load-animation-opacity box-content p-10 rounded-lg">
              <div className="w-full h-full center flex-col gap-5">
                <div className="text-sm text-center">
                  You can also visit our showroom during business hours to
                  explore our marble collection.
                </div>
                <div className="text-[2em] text-center font-serif mt-4">
                  Contact Us
                </div>
                <div className="text-center opacity-[.7]">
                  Feel free to reach out to us for any inquiries or to request a
                  quote. Our team is here to assist you.
                </div>
                <div className="center gap-10 flex-wrap">
                  <div className="w-[250px]">
                    <CardPc01
                      innerHTML={
                        <div className="relative gap-2 flex-col text-center center pb-8">
                          <IoIosMail className="size-[100px] text-blink" />
                          <div className="text-center font-sans font-bold opacity-75 text-black text-xl">
                            Email
                          </div>
                          <div className="text-sm">
                            We look forward to hearing from you!
                          </div>
                          <div className="font-bold my-2 text-[.9em]">
                            786mkhan.coc786@mail.com
                          </div>
                        </div>
                      }
                    />
                  </div>

                  <div className="w-[250px]">
                    <CardPc01
                      innerHTML={
                        <div className="relative gap-2 flex-col center pb-8 text-center">
                          <FaPhone className="size-[100px] text-blink p-4" />
                          <div className="text-center font-sans font-bold opacity-75 text-black text-xl">
                            Phone
                          </div>
                          <div className="text-sm">
                            Follow us for updates and inspiration.
                          </div>
                          <div className="font-bold my-2">+91 9413313324</div>
                        </div>
                      }
                    />
                  </div>

                  <div className="w-[250px]">
                    <CardPc01
                      innerHTML={
                        <div className="relative gap-2 flex-col center pb-8 text-center">
                          <PiMapPinLineBold className="size-[100px] text-blink" />
                          <div className="text-center font-sans font-bold opacity-75 text-black text-xl">
                            Location
                          </div>
                          <div className="text-sm">Connect With Us</div>
                          <div className="font-bold my-2">
                            Rajsamand, Rajasthan, India
                          </div>
                        </div>
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
