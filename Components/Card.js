

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


