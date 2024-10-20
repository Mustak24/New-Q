import Loading from "@/Components/Loading";

export default function About(props){
    const {alerts, setAlert} = props
    return(<>
        <div className="w-full h-screen center">
            <Loading title="On Working" />
        </div>
    </>)
}