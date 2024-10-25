import { RiHome6Line } from "react-icons/ri";
import { AiOutlineProduct } from "react-icons/ai";
import { TbMessageUser } from "react-icons/tb";
import { IoAnalyticsOutline } from "react-icons/io5";
import Image from "next/image";
import { useEffect, useState } from "react";
import Loading from "@/Components/Loading";
import Link from "next/link";
import { useRouter } from "next/router";
import verifyAdminToken from "@/Function/verifyAdminToken";
import { fetchProducts, fetchQuerys } from "@/Function/fetchAll";

export default function (props) {

  const {alerts, setAlert} = props;
  const router = useRouter()
  
  const [products, setProducts] = useState([])
  const [productsLoading, setProductsLoading] = useState(false);
  const [querys, setQuerys] = useState([])
  const [querysLoading, setQuerysLoading] = useState(false);
  
  useEffect(()=>{
    
    verifyAdminToken().then(res => {
      if(! res) return router.back()
      
      setProductsLoading(true);
      fetchProducts().then(res => {
        setProductsLoading(false);
        setProducts(res?.products || [])
        if(res?.alert) setAlert([...alerts, res.alert]);
      });
      
      setQuerysLoading(true);
      fetchQuerys().then(res => {
        setQuerysLoading(false);
        setQuerys(res?.querys || []);
        if(res?.alert) setAlert([...alerts, res.alert]);
      })
      
    });
}, [])

  return (
    <div className="w-screen h-screen relative flex max-sm:flex-col sm:flex-row overflow-hidden">
      <Asidebar/>
      <main className="flex items-center w-full h-full flex-col p-10 gap-10 overflow-y-scroll">
        <div className="center w-full gap-10 max-md:flex-col">
          <div className="w-full max-w-[500px] h-[300px] backdrop-blur-sm rounded-lg overflow-y-scroll relative p-2 border-2 border-white flex flex-col gap-2 [&_div]:shrink-0">
            {
              !querys.toString() ? <div className="w-full h-full center font-serif text-2xl">{querysLoading ? 'Loading ...' : 'No Query Found'}</div> : querys.map((query, index) => <QueryCard key={index} info={query} />)
            }
          </div>
          <div className="w-full max-w-[500px] h-[300px] backdrop-blur-sm rounded-lg overflow-y-scroll flex justify-center flex-wrap p-2 gap-2 gap-y-2 [&_div]:shrink-0 border-2 border-white">
            {
              !products.toString() ? <div className="w-full h-full center font-serif text-2xl">{productsLoading ? 'Loading ...' : 'No Products Found'}</div> : products.map((product, index) => <div key={index} className="w-[48%] min-w-[200px] h-[150px] bg-orange-300 overflow-hidden hover:[&_.img]:scale-[1.02] border-zinc-500 border-2 rounded-md">
                <Image className="w-full h-full object-cover img" width={200} height={150} src={product?.img || '/bg-body.jpg'} alt="404" />
              </div>)
            }  
          </div>
        </div>
        <div className="w-full max-w-[1040px] min-h-[300px] backdrop-blur-sm rounded-lg border-2 border-white center">
          <Loading title='On Working'/>
        </div>
      </main>
    </div>
  );
}

export function Asidebar(){
  return (
    <aside className="sm:w-fit max-sm:w-full sticky max-sm:h-20 sm:h-screen top-0 left-0 z-20 p-10 flex items-center max-sm:justify-around max-sm:flex-row sm:flex-col gap-10 backdrop-blur-sm sm:border-r-2 max-sm:border-b-2 border-zinc-400">
        <Link href={'/admin/dashbord'} className="flex items-center gap-2 text-zinc-500 hover:text-black transition-all text-md font-[600]">
          <RiHome6Line className="size-6" />
          {/* <span className="max-md:hidden">Dashbord</span>  */}
        </Link>
        <Link href={'/admin/dashbord/products'} className="flex items-center gap-2 text-zinc-500 hover:text-black transition-all text-md font-[600]">
          <AiOutlineProduct className="size-6" />
          {/* <span className="max-md:hidden">Products</span> */}
        </Link>
        <Link href={'/admin/dashbord/querys'} className="flex items-center gap-2 text-zinc-500 hover:text-black transition-all text-md font-[600]">
          <TbMessageUser className="size-6" />
          {/* <span className="max-md:hidden">User-Query</span> */}
        </Link>
        <Link href={'/admin/dashbord/analytics'} className="flex items-center gap-2 text-zinc-500 hover:text-black transition-all text-md font-[600]">
          <IoAnalyticsOutline className="size-6" />
          {/* <span className="max-md:hidden">Analytics</span> */}
        </Link>
      </aside>
  )
}

export function QueryCard(props) {
  let {info} = props
  return (
    <div className="w-full h-20 bg-blue-300 hover:scale-[1.01] hover:opacity-[.9] transition-all rounded-md flex flex-col p-2 cursor-pointer">
      <div className="flex justify-between items-center font-serif text-md">
        <span>{info?.name || 'Name'}</span>
        <span>{info?.contact || 'Contact Info'}</span>
      </div>
      <p className="font-mono text-sm text-pretty line-clamp-2">{info?.msg || 'Description'}</p>
    </div>
  );
}

