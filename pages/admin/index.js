import { useRouter } from "next/router"
import { ClassicInput } from "@/Components/Input"
import { ButtonPc, ButtonMobile } from "@/Components/Button"
import { useEffect } from "react";
import verifyAdminToken from "@/Function/verifyAdminToken";

export default function (props) {
    const router = useRouter()
    const {alerts, setAlert} = props;
    

    if(router.query.username != process.env.NEXT_PUBLIC_ADMIN_USERNAME){
        return (
            <div className="w-screen h-screen center text-2xl font-serif">
                You are not Admin
            </div>
        )
    }


    async function Login(e) {
        e.preventDefault();
        if(!window.navigator.onLine) return setAlert([...alerts, {type: 'error', title: 'No Internet', dec: 'Query are not be Send due to no Internet connnection.'}]);
        let formData = Object.fromEntries(new FormData(e.target))
        setAlert([...alerts,{ type: "info", title: "Wait Sending...", dec: "Your messege will be sending to New Quality Marble.",},]);
        
        let time = 3000;
        let timer = setInterval(() => (time ? (time -= 100) : ""), 100);

        let res = await fetch(`${window.location.origin}/api/login`, {
            method: "POST",
            body: JSON.stringify(formData),
            headers: { "content-type": "application/json"},
        });
        res = await res.json();

        clearInterval(timer);
        setTimeout(() => {
            if (res?.alert) setAlert((alerts) => [...alerts, res.alert]);
            if(res.login){ 
                router.push('/admin/dashbord')
                sessionStorage.setItem('token', res.token)
            }
        }, time);
    }

    useEffect(()=>{
        verifyAdminToken().then(res => res && router.push('/admin/dashbord'));
    }, [])
   

    return (
        <div className="w-screen h-screen center px-10">
            <form onSubmit={Login} className="flex-col load-onetime-self center w-full max-w-[1000px] min-h-fit box-border gap-2">
                <h1 className="font-serif text-2xl font-semibold">Login for Dashbord</h1>
                <ClassicInput name='email' placeholder='Enter your Email' type='email' required={true} />
                <ClassicInput name='password' placeholder='Enter your Password' type='password' required={true} minLength={8} />
                <div className="w-full">
                    <ButtonPc title='Send' class='max-md:hidden' />
                    <ButtonMobile title='Send' class='md:hidden' scale='200' />
                </div>
            </form>
        </div>
    )
}