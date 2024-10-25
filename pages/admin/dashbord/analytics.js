import Loading from "@/Components/Loading";
import { Asidebar } from ".";
import { useEffect } from "react";
import { useRouter } from "next/router";
import verifyAdminToken from "@/Function/verifyAdminToken";

export default function (){
   
    const router = useRouter()

    useEffect(()=>{
        verifyAdminToken().then(res => res || router.back());
    }, []);

    return(
        <div className="w-screen h-screen relative flex max-sm:flex-col sm:flex-row ">
            <Asidebar/>
            <main className="w-full h-full center">
                <Loading title='On Working' /> 
            </main>
        </div>
    )
}