import Image from "next/image"
import { Warning } from "postcss"
import { useEffect, useRef } from "react"

export function ProfileCardPc01(props) {
    return (<>
        <div className="w-full z-4 relative h-full flex flex-col p-5 gap-5 after:content-[''] after:absolute after:w-full after:h-full after:bg-orange-100 after:inset-[50%_0_0_50%] after:rounded-lg after:translate-x-[-50%] after:translate-y-[-50%] after:z-[-1] before:content-[''] before:absolute before:w-full before:rounded-lg before:h-full before:bg-orange-300 before:z-[-1] before:translate-x-[-50%] before:translate-y-[-50%] before:inset-[50%_0_0_50%] hover:after:rotate-[2deg] hover:rotate-[2deg] hover:before:rotate-[-4deg] transition-all after:transition-all before:transition-all duration-200 after:duration-200 before:duration-200">
            <div className="flex gap-5">
                <div className="size-[55px] bg-black relative rounded-full overflow-hidden">
                    <Image width={40} height={40} className="w-full h-full object-cover" src={props?.profileImg || '/profileDefaultImg.webp'} alt="Internal server come" />
                </div>
                <div className="flex flex-col text-md">
                    <div className="font-semibold">{props.name}</div>
                    <div className="opacity-[.7]">{props.role}</div>
                </div>
            </div>
            <p className="text-pretty text-[.95em] font-sans line-clamp-3">{props.dic}</p>
        </div>
    </>)
}

export function CardPc01(props) {
    return (<>
        <div className={`${props.class} w-full z-4 relative shadow-lg h-full flex flex-col p-5 gap-5 after:content-[''] after:absolute after:w-full after:h-full after:bg-orange-100 after:inset-[50%_0_0_50%] after:rounded-lg after:translate-x-[-50%] after:translate-y-[-50%] after:z-[-1] before:content-[''] before:absolute before:w-full before:rounded-lg before:h-full before:bg-orange-300 before:z-[-1] before:translate-x-[-50%] before:translate-y-[-50%] before:inset-[50%_0_0_50%] hover:after:rotate-[2deg] hover:rotate-[2deg] hover:before:rotate-[-4deg] transition-all after:transition-all before:transition-all duration-200 after:duration-200 before:duration-200`}>
            {props.innerHTML}
        </div>
    </>)
}
export function CardMobile01(props) {
    return (<>
        <div className={`${props.class} w-full z-4 relative shadow-lg h-full flex flex-col p-5 gap-5 after:content-[''] after:absolute after:w-full after:h-full after:bg-orange-100 after:inset-[50%_0_0_50%] after:rounded-lg after:translate-x-[-50%] after:translate-y-[-50%] after:z-[-1] before:content-[''] before:absolute before:w-full before:rounded-lg before:h-full before:bg-orange-300 before:z-[-1] before:translate-x-[-50%] before:translate-y-[-50%] before:inset-[50%_0_0_50%] active:after:rotate-[2deg] active:rotate-[2deg] active:before:rotate-[-4deg] transition-all after:transition-all before:transition-all duration-200 after:duration-200 before:duration-200`}>
            {props.innerHTML}
        </div>
    </>)
}


export function AlertCard(props) {
    const { info } = props;
    const alertBox = useRef(null);
    const cardTypes = {
        info: { afterBorder: 'after:border-blue-500', text: 'text-blue-500', bg: 'bg-[rgb(59,130,246,.1)]' },
        success: { afterBorder: 'after:border-green-500', text: 'text-green-500', bg: 'bg-[rgb(34,197,94,.1)]' },
        warning: { afterBorder: 'after:border-yellow-500', text: 'text-yellow-500', bg: 'bg-[rgb(234,179,8,.1)]' },
        error: { afterBorder: 'after:border-red-500', text: 'text-red-500', bg: 'bg-[rgb(239,68,68,.1)]' },
    }
    useEffect(() => {
        setTimeout(() => {
            alertBox.current.classList.replace('opacity-0', 'opacity-1')
            alertBox.current.classList.replace('scale-[.8]', 'scale-1')
            alertBox.current.classList.replace('after:h-0', 'after:h-full')
            setTimeout(() => {
                alertBox.current.classList.replace('opacity-1', 'opacity-[.8]')
                alertBox.current.classList.replace('scale-1', 'scale-0')
                alertBox.current.classList.add('invisible')
                setTimeout(() => { alertBox.current.remove() }, 500)
            }, 4000)
        },100)
    })
    return (<>
        <div ref={alertBox} className={`w-[250px] h-[80px] scale-[.8] opacity-0 transition-all duration-500 relative flex flex-col backdrop-blur-sm rounded-sm p-2 overflow-hidden after:content-[''] after:absolute after:translate-y-[-50%] after:top-[50%] after:left-0 after:duration-[3s] after:transition-all after:ease-linear after:h-0 after:border-2 ${cardTypes[info.type].afterBorder} ${cardTypes[info.type].bg} ${cardTypes[info.type].text}`}>
            <h1 className="font-bold">{info?.title || ''}</h1>
            <p className="text-sm font-sans line-clamp-2 text-pretty">{info?.dec || ''}</p>
        </div>
    </>)
}