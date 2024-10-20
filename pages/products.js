import Head from "next/head"
import Image from "next/image"
import { CardPc01 } from "@/Components/Card"
import { LinkButtonMobile, LinkButtonPc } from "@/Components/Button";
import Loading from "@/Components/Loading";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaPhone } from "react-icons/fa6";


export default function Products(props) {

    const { alerts, setAlert } = props;
    const [products, setProducts] = useState([])
    const [isLoading, setLoading] = useState(false)

    async function gellAllProducts() {
        setLoading(true);
        if (!window.navigator.onLine) return setAlert([...alerts, { type: 'error', title: 'No Internet', dec: 'Products are not be load due to no Internet connnection.' }])
        let res = await fetch(`${window.location.origin}/api/getallproducts`);
        res = await res.json();
        setLoading(false);
        setProducts(res?.products || []);
        if (res.alert) setAlert([...alerts, res.alert])
    }

    useEffect(() => {
        gellAllProducts();

        window.ononline = () => { if(!+products) return getallproducts(); }
        
    }, []);

    return (<>
        <Head>
            <title>Products</title>
        </Head>
        <main className="flex flex-col items-center w-full text-lg">
            <div className="center load-onetime-child flex-col gap-5 relative w-full px-10 py-20 overflow-hidden text-black text-center" style={{ textShadow: '0 0 10px white' }}>
                <Image width={1200} height={700} className="w-full absolute h-full object-cover z-[-1]" src={'/products-bg.avif'} />
                <div className="font-serif font-bold text-[2em] leading-10">Transform Your Space with Exquisite Marble</div>
                <div className="max-w-[1000px] font-mono font-semibold">Elevate your home or business with our premium selection of marble products. From countertops to flooring, we have the perfect marble solutions for you.</div>
                <div className="center flex-col gap-2">
                    <div className="mt-10 font-sans font-extrabold text-[2em] leading-10" >
                        Explore Our Marble Collection
                        <div className="my-2">And</div>
                    </div>
                    <div className="[text-shadow:_none]">
                        <LinkButtonPc class='max-lg:hidden' title='Contact Us' url='/contact' scale='40' />
                        <LinkButtonMobile class='lg:hidden' title='Contact Us' url='/contact' scale='40' />
                    </div>
                </div>
            </div>

            <div className="w-full center max-sm:flex-col flex-wrap px-10 py-20 gap-10">
                {isLoading ? <Loading /> : products.map((e, i) => <div key={i} className="w-full max-w-[450px]"> <ProductCard info={e} /> </div>)}
            </div>
        </main>
    </>)
}



export function ProductCard(props) {
    const { info } = props;
    return (
        <div className="flex flex-col gap-3 items-center w-full max-w-[450px] p-5 bg-[rgb(0,0,0,0.1)]">
            <div className="center relative w-full h-[300px] max-sm:h-[250px] group overflow-hidden">
                <Image className="w-full h-full object-cover transition-all duration-200 group-hover:brightness-75 group-hover:scale-[1.1]" width={400} height={300} src={info?.img || '/bg-body.jpg'} />
                <Link href={'/contact'} className="center text-black group-hover:text-white bg-black hover:bg-zinc-800 absolute transition-all duration-300 py-2 px-10 origin-left scale-x-0 group-hover:scale-x-[1] text-center">Contact for Buy</Link>
            </div>
            <div className="flex items-center gap-2 px-1 self-start">
                <FaPhone className="size-[25px]" />
                <span className="font-semibold font-mono">9413313324</span>
            </div>
            <p className="text-sm line-clamp-1 self-start">{info?.dec || ''}</p>
        </div>
    );
}