export function fetchProducts(){
    return new Promise(async (resolve)=>{
        let res = await fetch(`${window.location.origin}/api/products/getAllProductsInfo`)
        res = await res.json()
        let {products, alert} = res;
        resolve({products, alert})
    })
}

export async function fetchQuerys(){
    return new Promise(async(resolve)=>{
        let res = await fetch(`${window.location.origin}/api/querys/getall`, {
            headers: {token: sessionStorage.getItem('token')}
        })
        res = await res.json()
        let {querys, alert} = res;
        resolve({querys, alert})
    })
}