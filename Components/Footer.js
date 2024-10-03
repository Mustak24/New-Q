import { ButtonMobile, LinkButtonPc, ButtonPc } from "./Button";
import Link from "next/link";

export default function Footer() {
    return (<>
        <footer className="w-screen relative bg-black text-white p-10 flex max-lg:flex-col gap-20 items-center">

            <div className="max-w-1/3 max-lg:w-[80%]">
                <h1 className="font-serif text-[2em]">Get in Touch</h1>
                <p className="text-pretty">Subscribe to our newsletter for the latest updates on new features and product releases.</p>
                <form className="my-5 flex gap-5 max-sm:flex-col">
                    <input name="email" type="email" placeholder="Enter your Email" className="w-full h-10 rounded-full center text-center px-5 text-black outline-none border-2 [&:not(:placeholder-shown)]:invalid:border-red-500 [&:not(:placeholder-shown)]:valid:border-green-500" required />
                    <span className="hover:border-white border-2 border-transparent rounded-full">
                        <div className="max-sm:hidden">
                            <ButtonPc title='Subscribe' scale='70' />
                        </div>
                        <div className="sm:hidden">
                            <ButtonMobile title='Subscribe' />
                        </div>
                    </span>
                </form>
            </div>

            <div className="w-2/3 max-lg:w-full center p-5 flex-col">
                <div className="max-lg:hidden">
                    <div className="flex flex-wrap w-full p-5 items-center overflow-hidden rounded-xl gap-5">
                        <div className="hover:border-white border-2 border-transparent rounded-full"> <LinkButtonPc title='About Us' url='/about' scale='30' /> </div>
                        <div className="hover:border-white border-2 border-transparent rounded-full"> <LinkButtonPc title='Contact Info' url='/contact' scale='40' /> </div>
                        <div className="hover:border-white border-2 border-transparent rounded-full"> <LinkButtonPc title='Explore Us' url='/' scale='30' /> </div>
                        <div className="hover:border-white border-2 border-transparent rounded-full"> <LinkButtonPc title='Products' url='products' scale='30' /> </div>
                    </div>
                    <div className="flex flex-wrap w-full p-5 items-center overflow-hidden rounded-xl gap-5">
                        <div className="hover:border-white border-2 border-transparent rounded-full"> <LinkButtonPc title='Facebook' scale='30' /> </div>
                        <div className="hover:border-white border-2 border-transparent rounded-full"> <LinkButtonPc title='Whatsapp' scale='30' /> </div>
                    </div>
                </div>
                <div className="lg:hidden">
                    <div className="flex flex-wrap w-full p-5 items-center overflow-hidden rounded-xl gap-5">
                        <Link href={'/about'} className="after:content-[''] after:absolute center after:top-full after:border-2 after:w-0 after:invisible hover:after:visible after:border-white relative px-1 after:rounded-full after:transition-all after:duration-200 hover:after:w-full ">About Us</Link>
                        <Link href={'/contact'} className="after:content-[''] after:absolute center after:top-full after:border-2 after:w-0 after:invisible hover:after:visible after:border-white relative px-1 after:rounded-full after:transition-all after:duration-200 hover:after:w-full ">Contact Info</Link>
                        <Link href={'/'} className="after:content-[''] after:absolute center after:top-full after:border-2 after:w-0 after:invisible hover:after:visible after:border-white relative px-1 after:rounded-full after:transition-all after:duration-200 hover:after:w-full ">Explore Us</Link>
                        <Link href={'/products'} className="after:content-[''] after:absolute center after:top-full after:border-2 after:w-0 after:invisible hover:after:visible after:border-white relative px-1 after:rounded-full after:transition-all after:duration-200 hover:after:w-full ">Products</Link>
                    </div>
                    <div className="flex flex-wrap w-full p-5 items-center overflow-hidden rounded-xl gap-5">
                        <Link href={''} className="after:content-[''] after:absolute center after:top-full after:border-2 after:w-0 after:invisible hover:after:visible after:border-white relative px-1 after:rounded-full after:transition-all after:duration-200 hover:after:w-full ">Facebook</Link>
                        <Link href={''} className="after:content-[''] after:absolute center after:top-full after:border-2 after:w-0 after:invisible hover:after:visible after:border-white relative px-1 after:rounded-full after:transition-all after:duration-200 hover:after:w-full ">Whatsapp</Link>
                    </div>
                </div>
            </div>

        </footer>
    </>)
}