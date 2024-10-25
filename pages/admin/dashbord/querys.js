import { useEffect, useState } from "react";
import { Asidebar } from ".";
import { useRouter } from "next/router";
import Loading from "@/Components/Loading";
import verifyAdminToken from "@/Function/verifyAdminToken";
import { fetchQuerys } from "@/Function/fetchAll";

export default function (props) {

  const {alerts, setAlert} = props
  const router = useRouter()
  const [isLoading, setLoading] = useState(true);
  const [querys, setQuerys] = useState([])

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

  return (
    <div className="w-screen h-screen relative flex max-sm:flex-col sm:flex-row ">
      <Asidebar />
      <main className="p-5 w-full h-full relative px-10 mb-10 flex flex-col gap-5 max-sm:px-5">
        <h1 className="text-black text-2xl font-serif my-5">User Masseges : </h1>
        <div className="flex flex-wrap justify-center gap-5 w-full h-fit relative">
          {
            isLoading ? <Loading title='Loading' /> : querys.map((query, index) => <QueryCard key={index} info={query} alerts={alerts} setAlert={setAlert} /> )
          }
        </div>
      </main>
    </div>
  );
}

function QueryCard(props) {
  const {alerts, setAlert, info} = props
  const router = useRouter()
  
  async function deleteQuery(query) {
    if(confirm(`Did you want to delete the query from ${query.name} and ID is ${query._id}`)){
      let res = await fetch(`${window.location.origin}/api/querys/delete?id=${query._id}`, {
        headers: {token: sessionStorage.getItem('token')}
      })
      res = await res.json()
      if(res?.alert) setAlert([...alerts, res.alert]);
      if(res?.remove) router.reload()
    }
  }
  
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
        <div
          className="absolute text-[9px] font-bold font-sans cursor-pointer text-red-500 z-[1] transition-all duration-500 hover:text-white flex items-center justify-center size-10 overflow-hidden top-2 right-2 rounded-full border-2 border-red-500 after:contact-[''] after:z-[-1] after:absolute after:size-10 after:bg-red-500 after:top-[-80%] after:rounded-[40%] hover:after:top-[20%] after:duration-500 after:transition-all"
          onClick={()=>deleteQuery(info)}
        >
          Delete
        </div>
      </div>
    </div>
  );
}
