import Link from "next/link";
import { useState } from "react";
import { LinkButtonMobile } from "./Button";
import Image from "next/image";

export default function Navbar() {
    const [isNavOpen, setNav] = useState(false);

    return (
        <>
            <nav className="flex w-screen sticky top-0 z-10 backdrop-blur-sm min-h-[80px] items-center justify-between box-border max-sm:px-4 px-10 shadow-[0_1px_10px_rgb(0,0,0,.1)]">
                <Link href={"/"} className="flex items-center gap-3">
                    <div className="size-10 rounded-full center overflow-hidden">
                        <Image width={50} height={50} className="w-full h-full object-cover" src={'/logo.jpg'} alt="Internal server come" />
                    </div>
                    <span className="hover:text-red-500 transition-all duration-100 text-lg font-serif">Quality Marbles</span>
                </Link>

                {/* For pc nav menu */}
                <div className="max-md:hidden flex gap-5 items-center">
                    {["Home", "About", "Contact", "Products"].map((e, i) => {
                        return (
                            <div key={i}>
                                <Link href={`/${i ? e.toLocaleLowerCase() : ''}`}>
                                    <span className="hover:text-red-500 flex items-center justify-center px-5 relative after:content-[''] after:absolute after:border-2 after:w-[80%] after:border-zinc-700 hover:after:border-red-500 after:transition-all after:duration-500 after:rounded-full hover:after:w-full after:bottom-0 before:content-[''] before:transition-all before:duration-500 before:rounded-full before:absolute before:border-2 before:border-zinc-700 hover:before:border-red-500 hover:before:w-[80%] before:bottom-[-6px] before:w-[40%] ">
                                        {e}
                                    </span>
                                </Link>
                            </div>
                        );
                    })}
                </div>

                {/*  Fro mobile nav menu */}
                <div className="md:hidden flex">
                    <div
                        className="relative flex z-30 flex-col items-center justify-center gap-[4px] hover:w-10 w-8 h-8 transition-all duration-300 active:w-7 [&_.navIcon]:hover:border-red-500 [&_.navIcon:after]:hover:border-red-500 [&_.navIcon:before]:hover:border-red-500"
                        onClick={() => setNav(!isNavOpen)}
                    >
                        <div className="navIcon w-[80%] left-0 absolute border-2 border-black items-start justify-center rounded-full after:content-[''] after:absolute after:left-0 after:border-2 after:border-black after:w-[60%] after:bottom-2 after:rounded-full before:content-[''] before:w-[60%] before:rounded-full before:absolute before:border-2 before:border-black before:right-0 before:top-2"></div>
                    </div>
                    <div className="fixed overflow-x-hidden w-screen p-10 h-screen z-20 flex items-end left-0 flex-col top-0 pt-[100px] gap-[15px]" style={{
                        backgroundColor: isNavOpen ? 'rgb(0, 0, 0, .7)' : 'transparent',
                        visibility: isNavOpen ? 'visible' : 'hidden',
                        transition: 'all .5s'
                    }}>
                        {["Home", "About", "Contact", "Products"].map((e, i) => {
                            return (
                                <div key={i} onClick={() => setNav(!isNavOpen)}
                                    style={{
                                        transform: `translateX(${isNavOpen ? 0 : "100%"})`,
                                        opacity: isNavOpen ? 1 : 0,
                                        visibility: isNavOpen ? 'visible' : 'hidden',
                                        transition: `all .5s ${i * 100}ms`,
                                        width: '200px'
                                    }}>
                                    <LinkButtonMobile url={`/${i ? e.toLocaleLowerCase() : ''}`} title={e} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </nav>
        </>
    );
}