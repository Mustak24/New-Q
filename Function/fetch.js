export function fetchProducts(){
    return new Promise(async (resolve)=>{
        let res = await fetch(`${window.location.origin}/api/products/getAllProductsInfo`)
        res = await res.json()
        let {products, alert} = res;
        resolve({products, alert})
    })
}

export function fetchproductImg(info){
    let {id, setLoading, setImg} = info;
    return new Promise((resolve) => {
        setLoading && setLoading(true)
        fetch(`${window.location.origin}/api/products/getProductImg?id=${id}`).then(res=>res.text()).then(res=>{
            setLoading && setLoading(false);
            setImg && setImg(res)
            resolve(res)
        })
    })
}

export async function fetchQuerys(){
    return new Promise((resolve)=>{
        fetch(`${window.location.origin}/api/querys/getall`, {
            headers: {token: sessionStorage.getItem('token')}
        }).then(res => res.json()).then(res => {
            let {querys, alert} = res;
            resolve({querys, alert})
        })
    })
}