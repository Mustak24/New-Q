import Button from "./Button";
import { LinkUnderline, LinkBtn } from "./Link";

export default function Footer() {
    return (<>
        <footer className="w-screen relative bg-black text-white p-10 flex max-lg:flex-col gap-20 items-center">

            <div className="max-w-1/3 max-lg:w-[80%]">
                <h1 className="font-serif text-[2em]">Get in Touch</h1>
                <p className="text-pretty">Subscribe to our newsletter for the latest updates on new features and product releases.</p>
                <form className="my-5 flex gap-5 max-sm:flex-col">
                    <input name="email" type="email" placeholder="Enter your Email" className="w-full h-10 rounded-full center text-center px-5 text-black outline-none border-2 [&:not(:placeholder-shown)]:invalid:border-red-500 [&:not(:placeholder-shown)]:valid:border-green-500" required />
                    <Button innerHTML='Subscribe' tailwindcss='border-2 w-[150px]'/>
                </form>
            </div>

            <div className="w-2/3 max-lg:w-full center p-5 flex-col">
                <div className="max-lg:hidden">
                    <div className="flex flex-wrap w-full p-5 items-center overflow-hidden rounded-xl gap-5">
                        <LinkBtn innerHTML='About Us' url='/about' tailwindcss='border-2' />
                        <LinkBtn innerHTML='Contact Info' url='/contact' scale='40' tailwindcss='border-2' />
                        <LinkBtn innerHTML='Explore Us' url='/' tailwindcss='border-2' />
                        <LinkBtn innerHTML='Products' url='products' tailwindcss='border-2' />
                    </div>
                    <div className="flex flex-wrap w-full p-5 items-center overflow-hidden rounded-xl gap-5">
                        <LinkBtn innerHTML='Facebook' tailwindcss='border-2' />
                        <LinkBtn innerHTML='Whatsapp' tailwindcss='border-2' />
                    </div>
                </div>
                <div className="lg:hidden">
                    <div className="flex flex-wrap w-full p-5 items-center overflow-hidden rounded-xl gap-5">
                        <LinkUnderline url='/about' innerHTML='About Us'/>
                        <LinkUnderline url='/contact' innerHTML='Contact Info'/>
                        <LinkUnderline url='/' innerHTML='Explore Us'/>
                        <LinkUnderline url='/' innerHTML='Products'/>
                    </div>
                    <div className="flex flex-wrap w-full p-5 items-center overflow-hidden rounded-xl gap-5">
                        <LinkUnderline url='#' innerHTML='Facebook'/>
                        <LinkUnderline url='#' innerHTML='Whatsapp'/>
                    </div>
                </div>
            </div>

        </footer>
    </>)
}