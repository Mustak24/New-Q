
export default function (props){
    return (<>
        <style jsx>{`
            @keyframes loading-animation{
                100%{width: 100%;}
            }
        `}</style>
        <div className="relative overflow-hidden font-mono font-bold w-fit text-[4vmax] bg-zinc-100 z-[1] text-red-500 mx-5 px-10 h-[100px] center rounded-full after:content-[''] after:absolute after:h-full after:bg-sky-500 after:left-0 after:z-[-1] after:animate-[loading-animation_2s_infinite_alternate-reverse]" >
            <div className="center gap-2 mix-blend-difference">
                <div className="text-center">{props?.title || "Loading"}</div>
                <div className="pt-4 flex gap-3">
                    <div className="size-3 relative bg-red-500 rounded-full after:content-[''] after:absolute after:w-full after:h-full after:rounded-full after:animate-ping after:bg-red-500"></div>
                    <div className="size-3 relative bg-red-500 rounded-full after:content-[''] after:absolute after:w-full after:h-full after:rounded-full after:animate-ping after:bg-red-500"></div>
                </div>
            </div>
        </div>
    </>)
}