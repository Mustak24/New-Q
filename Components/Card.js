import Image from "next/image"

export function ProfileCardPc01(props){
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

export function CardPc01(props){
    return (<>
        <div className={`${props.class} w-full z-4 relative shadow-lg h-full flex flex-col p-5 gap-5 after:content-[''] after:absolute after:w-full after:h-full after:bg-orange-100 after:inset-[50%_0_0_50%] after:rounded-lg after:translate-x-[-50%] after:translate-y-[-50%] after:z-[-1] before:content-[''] before:absolute before:w-full before:rounded-lg before:h-full before:bg-orange-300 before:z-[-1] before:translate-x-[-50%] before:translate-y-[-50%] before:inset-[50%_0_0_50%] hover:after:rotate-[2deg] hover:rotate-[2deg] hover:before:rotate-[-4deg] transition-all after:transition-all before:transition-all duration-200 after:duration-200 before:duration-200`}>
            {props.innerHTML}
        </div>
    </>)
}
export function CardMobile01(props){
    return (<>
        <div className={`${props.class} w-full z-4 relative shadow-lg h-full flex flex-col p-5 gap-5 after:content-[''] after:absolute after:w-full after:h-full after:bg-orange-100 after:inset-[50%_0_0_50%] after:rounded-lg after:translate-x-[-50%] after:translate-y-[-50%] after:z-[-1] before:content-[''] before:absolute before:w-full before:rounded-lg before:h-full before:bg-orange-300 before:z-[-1] before:translate-x-[-50%] before:translate-y-[-50%] before:inset-[50%_0_0_50%] active:after:rotate-[2deg] active:rotate-[2deg] active:before:rotate-[-4deg] transition-all after:transition-all before:transition-all duration-200 after:duration-200 before:duration-200`}>
            {props.innerHTML}
        </div>
    </>)
}