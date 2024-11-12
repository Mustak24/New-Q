import { useRouter } from "next/router"
import { Input } from "@/Components/Input"
import Button from "@/Components/Button"
import { useEffect, useState } from "react";
import verifyAdminToken from "@/Function/verifyAdminToken";
import Head from "next/head";

export default function (props) {
    const router = useRouter()
    const { alerts, setAlert } = props;
    const [isLoading, setLoading] = useState(false)
    const isAdmin = router.query.username != process.env.NEXT_PUBLIC_ADMIN_USERNAME


    async function Login(e) {
        e.preventDefault();
        setLoading(true)
        if (!window.navigator.onLine) {
            setLoading(false)
            return setAlert([...alerts, { type: 'error', title: 'No Internet', dec: 'Login fail due to no Internet connnection.' }]);
        }
        let formData = Object.fromEntries(new FormData(e.target))
        setAlert([...alerts, { type: "info", title: "Wait Sending..." },]);

        let time = 3000;
        let timer = setInterval(() => (time ? (time -= 100) : ""), 100);

        let res = await fetch(`${window.location.origin}/api/login`, {
            method: "POST",
            body: JSON.stringify(formData),
            headers: { "content-type": "application/json" },
        });
        res = await res.json();
        setLoading(false)
        clearInterval(timer);
        setTimeout(() => {
            if (res?.alert) setAlert((alerts) => [...alerts, res.alert]);
            if (res.login) {
                router.push('/admin/dashbord')
                sessionStorage.setItem('token', res.token)
            }
        }, time);
    }

    useEffect(() => {
        verifyAdminToken().then(res => res && router.push('/admin/dashbord'));
    }, [])


    return (<>
        <Head>
            <title>Admin Login</title>
        </Head>
        {isAdmin ? (<div className="w-screen h-screen center text-2xl font-serif">
            You are not Admin
        </div>) : (<div className="w-screen h-screen center px-10">
            <form onSubmit={Login} className="flex-col load-onetime-self center w-full max-w-[1000px] min-h-fit box-border gap-2">
                <h1 className="font-serif text-2xl font-semibold">Login for Dashbord</h1>
                <Input name='email' placeholder='Enter your Email' type='email' required={true} />
                <Input name='password' placeholder='Enter your Password' type='password' required={true} minLength={8} />
                <div className="w-full">
                    <Button innerHTML='Send' tailwindcss='w-full max-sm:hidden' isLoading={isLoading} />
                    <Button innerHTML='Send' tailwindcss='w-full sm:hidden' effect='active' isLoading={isLoading} />
                </div>
            </form>
        </div>)}
    </>)
}