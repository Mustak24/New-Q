import { AlertCard } from "./Card";

export default function Alert(props){
    const {alerts} = props
    return (<div className="flex flex-col gap-1 fixed top-[100px] left-2 z-20 cursor-default">
        {(alerts || []).map((alert, i)=><div key={i}>
            <AlertCard info={alert} />
        </div>)}
    </div>)
}