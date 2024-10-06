import Head from "next/head"
import Image from "next/image"
import { CardPc01, CardMobile01 } from "@/Components/Card"
import { LinkButtonMobile, LinkButtonPc } from "@/Components/Button";
import { useEffect, useState } from "react";

export function ProductCard(props) {
    const { info } = props;
    return (<>
        <div className="flex flex-col gap-3 items-center w-full max-w-[450px] p-5 bg-[rgb(0,0,0,.05)]">
            <CardPc01 class='max-h-[300px] w-full' innerHTML={
                <div className="w-full relative overflow-hidden rounded-lg center h-full">
                    <Image width={300} height={400} className="w-full h-full object-cover" src={info?.img || '/bg-body.jpg'} alt="Intarlan server error" />
                    <div className="absolute text-sm font-bold font-mono top-1 right-2">{info?.size || ''}</div>
                </div>
            } />
            <div className="flex justify-between w-full ">
                <h1 className="font-sans font-bold">{info.price}</h1>
                <div className="center gap-1 text-red-500" style={{ display: !info.available ? 'flex' : 'none' }}>
                    <span>(</span><h1 className="w-fit text-sm">Out of Stock</h1><span>)</span>
                </div>
                <div className="center gap-1 text-green-500" style={{ display: info.available ? 'flex' : 'none' }}>
                    <span>(</span><h1 className="w-fit text-sm">Available</h1><span>)</span>
                </div>
            </div>
            <p className="text-sm h-10 font-sans line-clamp-2 w-full px-2 text-pretty">{info.dec}</p>
        </div>
    </>)
}

export default function Products() {

    const [products, setProducts] = useState([])

    async function gellAllProducts() {
        let res = await fetch(`${window.location.origin}/api/getallproducts`);
        let data = await res.json()
        setProducts(data);
    }

    useEffect(()=>{
        gellAllProducts();
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

            <div className="w-full center flex-wrap px-10 py-20 gap-10">
                {products.map((e, i)=> <div key={i}> <ProductCard info={e} /> </div>  )}   
            </div>
        </main>
    </>)
}