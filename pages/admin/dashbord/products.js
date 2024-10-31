import { Asidebar } from ".";
import Image from "next/image";
import { ButtonPc, RoundButton } from "@/Components/Button";
import { useEffect, useState, useContext, createContext } from "react";
import { useRouter } from "next/router";
import verifyAdminToken from "@/Function/verifyAdminToken";
import { fetchproductImg, fetchProducts } from "@/Function/fetch";
import Loading, { SpinLoader } from "@/Components/Loading";
import { ProductImg } from "@/Components/Image";

export const ProductContext = createContext();

export default function (props) {

  const router = useRouter();
  const { alerts, setAlert } = props;


  const overloadingUpdates = () => setAlert([...alerts, { type: 'info', title: 'Overloading', dec: 'One Products is already in updating proccess' }])

  async function updateProduct(e) {
    e.preventDefault();
    setAlert([...alerts, { type: 'info', title: 'Send', dec: 'Request will be submited.' }])
    setUpadting(true)
    let res = await fetch(`${window.location.origin}/api/products/update`, {
      method: 'POST',
      headers: { 'content-type': 'application/json', token: sessionStorage.getItem('token') },
      body: JSON.stringify(updateProductInfo)
    });
    res = await res.json()
    if (updateProductInfo.id) {
      setProducts((products) => products.map((product) => {
        if (product?._id == updateProductInfo.id) {
          product.img = updateProductInfo.img
        }
        return product
      }));
    } else {
      setProducts([...products, res.product])
    }
    setUpadting(false)
    if (res?.alert) setAlert((alerts) => [...alerts, res.alert]);
  }

  async function deleteProduct(product) {
    if (confirm(`Did you really want to delete this product {id : ${product._id}}`)) {
      setUpadting(true)
      let res = await fetch(`${window.location.origin}/api/products/delete?id=${product._id}`, {
        headers: { token: sessionStorage.getItem('token') }
      });
      res = await res.json();
      if (res.remove) {
        setAlert([...alerts, res.alert]);
        let index = products.indexOf(product)
        setProducts((product) => [...product.slice(0, index), ...product.slice(index + 1)])
      }
      setUpadting(false)
    }
  }




  useEffect(() => {

    verifyAdminToken().then((res) => {
      if (!res) return router.back()
      setLoading(true);
      fetchProducts().then((res) => {
        setLoading(false);
        setProducts(res?.products || []);
        if (res?.alert) setAlert([...alerts, res.alert]);
      });
    });

  }, []);


  const [products, setProducts] = useState([]);
  const [isloading, setLoading] = useState(false);
  const [isUpdating, setUpadting] = useState(false);
  const [updateProductInfo, setUpdateProductInfo] = useState({})

  const states = {
    deleteProduct, isUpdating, overloadingUpdates, setUpdateProductInfo
  }

  return (
    <ProductContext.Provider value={states}>
      <div className="w-screen relative flex max-sm:flex-col sm:flex-row ">
        <Asidebar />
        <main className="w-full h-full flex flex-col items-center px-10 max-sm:px-5">
          <form
            onSubmit={isUpdating ? overloadingUpdates : updateProduct}
            className="w-full max-w-[1000px] center flex-col my-10 gap-5"
          >
            <h1 className="text-2xl font-sans font-bold">Product Form</h1>
            <div className="flex items-center flex-row w-full gap-10 max-sm:flex-col">
              <div className="flex flex-col items-center w-full gap-5">
                <div className="w-full min-h-[50px] border-2 border-black rounded-full px-5 flex items-center"
                >
                  ID : {updateProductInfo.id || 'Auto Genreate'}
                </div>
                <div className="border-2 has-[.textarea:invalid:not(:placeholder-shown)]:border-red-500 has-[.textarea:valid:not(:placeholder-shown)]:border-green-500 border-black relative rounded-[20px] overflow-hidden min-w-[200px] w-full min-h-[80px] h-full px-[15px]">
                  <textarea
                    placeholder='Enter Description'
                    value={updateProductInfo.dec}
                    className="textarea bg-transparent font-[700] placeholder:font-[500] placeholder:text-gray-700 text-black text-sm flex items-center pt-[10px] w-full h-full outline-none resize-none"
                    style={{ scrollbarWidth: "none" }}
                    onChange={(e) => setUpdateProductInfo({...updateProductInfo, dec: e.target.value})}
                  ></textarea>
                </div>
              </div>
              <label
                htmlFor="productImg"
                className="bg-zinc-500 rounded-md sm:h-[150px] max-sm:h-[250px] sm:w-[200px] max-sm:w-full center text-xl font-serif font-semibold text-white cursor-pointer relative overflow-hidden"
              >
                <input id="productImg" type="file" hidden
                  onChange={(e) => {
                    let file = e.target.files[0]
                    if(!file) return;
                    let fileReader = new FileReader()
                    fileReader.readAsDataURL(file)
                    fileReader.addEventListener('load', () => setUpdateProductInfo({...updateProductInfo, img: fileReader.result}))
                  }}
                />
                {updateProductInfo.img ? (
                    <Image src={updateProductInfo.img} width={400} height={250} className="absolute w-full h-full object-cover" alt="404" />
                  ) : (
                   updateProductInfo.id ? <ProductImg id={updateProductInfo.id} width={400} height={250} tailwindClass="absolute" /> : 'Upload Img'
                )}
              </label>
            </div>
            <ButtonPc
              title={
                isUpdating ?
                  (
                    <div className="center gap-2">
                      <SpinLoader theme='black-white' size='sm' />
                      Product Updating ...
                    </div>
                  ) : ('Update Products')
              }
            />
          </form>

          <div className="flex flex-wrap items-center justify-center w-full h-full gap-5 py-10">
            {isloading ? <Loading title="Loading" /> : products.map((product, index) => <ProductCard key={index} info={product} />)}
          </div>
        </main>
      </div>
    </ProductContext.Provider>
  );
}

function ProductCard(props) {

  function editProduct(){
    setUpdateProductInfo({id: info._id, dec: info.dec, img});
    window.scroll({top: 0, behavior: 'smooth'})
  }
  
  const {deleteProduct, isUpdating, overloadingUpdates, setUpdateProductInfo} = useContext(ProductContext)
  
  const {info} = props

  const [img, setImg] = useState('')
  const [isLoading, setLoading] = useState(false);

  useEffect(()=>{
    fetchproductImg({id: info._id, setLoading, setImg})
  }, [])

  return (
    <div className="center relative overflow-hidden w-full max-w-[400px] h-[250px] rounded-lg bg-[#18181b] after:border-2 after:border-sky-500 hover:after:h-[90%] after:h-0 after:absolute after:left-2 after:duration-300 after:transition-all after:rounded-full before:size-[1px] before:absolute before:bg-[rgb(225,225,225,.1)] before:rounded-full before:left-1 before:top-1 hover:before:shadow-[0_0_100px_50px_rgb(225,225,255,.3)] before:transition-all duration-[1s] group">
      {isLoading ? (
        <SpinLoader theme='lightblue-blue' size='lg' />
      ) : (
        <Image
          className={`w-full h-full object-cover group-hover:scale-[1.05] transition-all`}
          width={props?.width || 400}
          height={props?.height || 250}
          src={info?.img || img || '/ProductsDefaultImg.jpg'}
          alt="404"
        />
      )}
      <div className="w-full h-full bg-[rgb(0,0,0,0.6)] text-white absolute p-5 self-start transition-all group-hover:opacity-[1] opacity-0">
        <div className="font-serif transition-all -translate-x-full group-hover:translate-x-0 opacity-0 group-hover:opacity-100">
          Date : {(info?.date).split('T')[0]}
        </div>
        <div className="font-serif text-sm transition-all -translate-x-full group-hover:translate-x-0 opacity-0 group-hover:opacity-100">
          ID : {info?._id || "1234567890"}
        </div>
        <div className="font-mono text-sm text-pretty transition-all -translate-x-full group-hover:translate-x-0 opacity-0 group-hover:opacity-100">
          {info?.dec || "Description .."}
        </div>
      </div>
      <div className="absolute right-3 bottom-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <RoundButton type='edit' onClick={() => isUpdating ? overloadingUpdates() : editProduct()} />
        <RoundButton type='delete' onClick={() => isUpdating ? overloadingUpdates() : deleteProduct(info)} />
      </div>
    </div>
  );
}
