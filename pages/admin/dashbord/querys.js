import { useEffect, useState } from "react";
import { Asidebar } from ".";
import { useRouter } from "next/router";
import Loading from "@/Components/Loading";
import verifyAdminToken from "@/Function/verifyAdminToken";
import { fetchQuerys } from "@/Function/fetch";
import { RoundButton } from "@/Components/Button";
import Head from "next/head";

export default function (props) {

  const {alerts, setAlert} = props
  const router = useRouter()
  const [isLoading, setLoading] = useState(true);
  const [querys, setQuerys] = useState([])

  async function deleteQuery(query) {
    if(confirm(`Did you want to delete the query from ${query.name} and ID is ${query._id}`)){
      let res = await fetch(`${window.location.origin}/api/querys/delete?id=${query._id}`, {
        headers: {token: sessionStorage.getItem('token')}
      })
      res = await res.json()
      if(res?.alert) setAlert([...alerts, res.alert]);
      if (res.remove) {
        setAlert([...alerts, res.alert]);
        let index = querys.indexOf(query)
        setQuerys((querys)=>[...querys.slice(0,index),...querys.slice(index+1)])
      }
    }
  }

  useEffect(()=>{
    
    verifyAdminToken().then(res => {
      if(!res) return router.back()
        setLoading(true);
      fetchQuerys().then(res => {
        setLoading(false);
        setQuerys(res?.querys || []);
        if(res?.alert) setAlert([...alerts, res.alert]);
      });
    });
      
  },[])

  return (<>
  <Head><title>Query Dashbord</title></Head>
    <div className="w-screen h-screen relative flex max-sm:flex-col sm:flex-row ">
      <Asidebar />
      <main className="p-5 w-full h-full relative px-10 mb-10 flex flex-col gap-5 max-sm:px-5">
        <h1 className="text-black text-2xl font-serif my-5">User Masseges : </h1>
        <div className="flex flex-wrap justify-center gap-5 w-full h-fit relative">
          {
            isLoading ? <Loading title='Loading' /> : querys.map((query, index) => <QueryCard key={index} info={query} deleteQuery={deleteQuery} /> )
          }
        </div>
      </main>
    </div>
  </>);
}

function QueryCard(props) {
  
  const {info, deleteQuery} = props
  
  return (
    <div className="w-[300px] h-[180px] relative">
      <div className="w-full z-4 relative shadow-lg h-full flex flex-col justify-between p-5 gap-2 after:content-[''] after:absolute after:w-full after:h-full after:bg-orange-100 after:inset-[50%_0_0_50%] after:rounded-lg after:translate-x-[-50%] after:translate-y-[-50%] after:z-[-1] before:content-[''] before:absolute before:w-full before:rounded-lg before:h-full before:bg-orange-300 before:z-[-1] before:translate-x-[-50%] before:translate-y-[-50%] before:inset-[50%_0_0_50%] hover:after:rotate-[2deg] hover:rotate-[2deg] hover:before:rotate-[-4deg] transition-all after:transition-all before:transition-all duration-200 after:duration-200 before:duration-200">
        <div className={`text-sm line-clamp-1 font-sans ${info?.new ? 'text-bold' : ''} `}>
          {info?.name || "Name"}
        </div>
        <div className={`text-pretty line-clamp-3 font-serif ${info?.new ? 'text-bold' : ''} `}>
          {info?.msg || "Description ..."}
        </div>
        <div className="self-end text-sm line-clamp-1">
          {info?.contact || "Contact"}
        </div>
        <div className="absolute top-4 right-4">
          <RoundButton text='red' innerHTML="Delete" onClick={()=>deleteQuery(info)} />
        </div>
      </div>
    </div>
  );
}
