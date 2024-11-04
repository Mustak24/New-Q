
import { LinkBtn } from "@/Components/Link";
import { ImageSliderRight, ImageSliderLeft } from "@/Components/Image";
import Head from "next/head";
import Image from "next/image";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { useEffect } from "react";

export default function Index() {

  useEffect(()=>{
    fetch(`${window.location.origin}/api/coutVisit?page=${window.location.pathname.slice(1,).toLocaleUpperCase() || 'HOME'}&time=${parseInt(new Date().getTime()/100000)}`)
  }, [])

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <div>
        <Navbar navigationType="user" />

        <main className="flex items-center flex-col py-[80px] text-lg">
          {/* Index page Heading */}
          <div className="absolute top-0 w-full z-[-1] h-full blur-sm">
            <Image
              width={1200}
              height={700}
              className="w-full h-full top-0 object-cover z-[-1]"
              src={"/background.avif"}
              priority
            />
          </div>

          <div className="center w-full h-srecc load-onetime-child p-10 py-20 flex-col text-lg font-bold gap-10 font-serif">
            <div
              className="center flex-col gap-5"
              style={{ textShadow: "0 0 10px white" }}
            >
              <div className="text-[2em] text-center leading-10">
                New Quality Marble
              </div>
              <div className=" text-center font-mono font-thin text-[.9em]">
                Elevate your space with the timeless beauty of marble. Discover
                our premium options.
              </div>
            </div>
            <div className="center gap-3 flex-wrap">
                <LinkBtn url="/about" innerHTML="Explore About Us" tailwindcss='max-sm:hidden' />
                <LinkBtn url="/about" innerHTML="Explore About Us" effect='active' tailwindcss='sm:hidden' />

                <LinkBtn url="/contact" innerHTML="Get in Touch" theme={{bg: 'white', text: 'red-500'}} tailwindcss='max-sm:hidden' />
                <LinkBtn url="/contact" innerHTML="Get in Touch" theme={{bg: 'white', text: 'red-500'}} effect='active' tailwindcss='sm:hidden' />
            </div>
          </div>

          {/* Image Slider */}
          <div className="my-[80px] relative overflow-clip">
            <div className="w-screen h-[300px] relative">
              <ImageSliderLeft
                imgs={[
                  "/img11.webp",
                  "/img12.webp",
                  "/img13.webp",
                  "/img14.webp",
                  "/img15.webp",
                ]}
              />
            </div>
            <div className="w-screen h-[300px] relative">
              <ImageSliderRight
                imgs={[
                  "/img21.webp",
                  "/img22.webp",
                  "/img23.webp",
                  "/img24.webp",
                  "/img25.webp",
                ]}
              />
            </div>
          </div>

          {/* Stiky slider */}
          <div className="w-full relative p-5 flex max-md:flex-col items-start gap-10 max-sm:text-sm sm:text-lg">
            <div className="md:sticky p-5 top-20 md:w-1/2 center flex-col gap-5">
              <h1 className="font-serif font-semibold text-[2em] leading-10 text-pretty">
                Discover the Power of Our Products
              </h1>
              <p className="font-sans text-pretty">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </p>
              <div className="self-start">
                <LinkBtn innerHTML="Explore Our Products" url="/products" theme={{text: 'red-500'}} tailwindcss='max-sm:hidden' />
                <LinkBtn innerHTML="Explore Our Products" url="/products" theme={{text: 'red-500'}} effect='active' tailwindcss='sm:hidden' />
              </div>
            </div>
            {/* Stiky Cards */}
            <div className="md:w-1/2 center flex-col gap-10">
              <div className="center bg-white sticky top-[100px] flex-col w-full shadow-md rounded-lg rotate-1">
                <div className="flex items-center justify-between gap-10 p-5">
                  <h1 className="font-serif text-[2em] leading-10">
                    Choose Your Marble
                  </h1>
                  <h1 className="text-[2em]">01</h1>
                </div>
                <p className="text-center p-5 font-sans">
                  Browse through our wide selection of high-quality marble
                  options to find the perfect match for your project.
                </p>
              </div>

              <div className="center bg-orange-200 sticky top-[100px] flex-col w-full shadow-md rounded-lg -rotate-1">
                <div className="flex items-center justify-between gap-10 p-5">
                  <h1 className="text-[2em] leading-10 font-serif">
                    Request a Quote
                  </h1>
                  <h1 className="text-[2em]">02</h1>
                </div>
                <p className="text-center p-5 font-sans">
                  Fill out our simple online form with your project details to
                  receive a personalized quote from our team.
                </p>
              </div>

              <div className="center bg-white sticky top-[100px] flex-col w-full shadow-md rounded-lg rotate-1">
                <div className="flex items-center justify-between gap-10 p-5">
                  <h1 className="text-[2em] leading-10 font-serif">
                    Customize Your Order
                  </h1>
                  <h1 className="text-[2em]">03</h1>
                </div>
                <p className="text-center p-5 font-sans">
                  Work with our experts to customize your marble order according
                  to your specific requirements and preferences.
                </p>
              </div>

              <div className="center bg-orange-200 sticky top-[100px] flex-col w-full shadow-md rounded-lg -rotate-1">
                <div className="flex items-center justify-between gap-10 p-5">
                  <h1 className="text-[2em] leading-10 font-serif">
                    Fast Delivery
                  </h1>
                  <h1 className="text-[2em]">04</h1>
                </div>
                <p className="text-center p-5 font-sans">
                  Enjoy fast and reliable delivery services to get your marble
                  products to your doorstep in no time.
                </p>
              </div>
            </div>
          </div>

          <div className="center p-10 w-full flex-col my-20 max-sm:text-sm sm:text-lg">
            <div className="w-full load-child my-10 center flex-col gap-8">
              <h1 className="font-serif text-center text-[2.2em]">
                Testimonials
              </h1>
              <p className="text-center max-w-[900px] font-sans]">
                We have been using marble products from this company for years,
                and we are always impressed with the quality and craftsmanship.
                Highly recommend!
              </p>
            </div>

            <div className="center flex-col gap-10">
              <div className="center load-child-sm flex-wrap w-full gap-10">
                <div className="w-full max-w-[300px] h-[200px] relative">
                  <ProfileCardPc01 name="Name" role="Role / Position" />
                </div>
                <div className="w-full max-w-[300px] h-[200px] relative">
                  <ProfileCardPc01 name="Name" role="Role / Position" />
                </div>
                <div className="w-full max-w-[300px] h-[200px] relative">
                  <ProfileCardPc01 name="Name" role="Role / Position" />
                </div>
                <div className="w-full max-w-[300px] h-[200px] relative">
                  <ProfileCardPc01 name="Name" role="Role / Position" />
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


export function ProfileCardPc01(props) {
  return (<>
      <div className="w-full z-4 relative h-full flex flex-col p-5 gap-5 after:content-[''] after:absolute after:w-full after:h-full after:bg-orange-100 after:inset-[50%_0_0_50%] after:rounded-lg after:translate-x-[-50%] after:translate-y-[-50%] after:z-[-1] before:content-[''] before:absolute before:w-full before:rounded-lg before:h-full before:bg-orange-300 before:z-[-1] before:translate-x-[-50%] before:translate-y-[-50%] before:inset-[50%_0_0_50%] hover:after:rotate-[2deg] hover:rotate-[2deg] hover:before:rotate-[-4deg] transition-all after:transition-all before:transition-all duration-200 after:duration-200 before:duration-200">
          <div className="flex gap-5">
              <div className="size-[55px] bg-black relative rounded-full overflow-hidden">
                  <Image width={40} height={40} className="w-full h-full object-cover" src={props?.profileImg || '/profileDefaultImg.webp'} alt="Internal server come" />
              </div>
              <div className="flex flex-col text-md">
                  <div className="font-semibold">{props.name}</div>
                  <div className="opacity-[.7] text-[.9em]">{props.role}</div>
              </div>
          </div>
          <p className="text-pretty text-[.95em] font-sans line-clamp-3">{props.dic}</p>
      </div>
  </>)
}