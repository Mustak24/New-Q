import Link from "next/link"

export function LinkBtn (props){

    const {theme} = props
    const genBtnTailwindcss = (bgColor, textColor) => [`bg-${bgColor}`, `after:border-${textColor}`, `before:border-${textColor}`, `active:txt-${bgColor}`, `text-${textColor}`, `hover:text-${bgColor}`].join(' ')
    
    return (
        <Link
            href={props.url || '#'} 
            className={`relative z-[1] w-fit font-bold overflow-hidden shadow-[0_0_10px_rgb(0,0,0,.3)] px-5 h-fit min-h-10 z-1 rounded-full center flex-col text-center transition-all duration-500 active:after:content-[''] after:border-2 active:after:scale-[var(--s)] after:self-start after:z-[-1] after:rounded-full before:content-[''] before:self-end before:z-[-1] active:before:scale-[var(--s)] before:border-2 before:rounded-full before:transition-all after:transition-all max-sm:hover:before:scale-[150] max-sm:hover:after:scale-[150] max-md:hover:before:scale-[200] max-md:hover:after:scale-[200] max-lg:hover:before:scale-[400] max-lg:hover:after:scale-[400] hover:before:scale-[800] hover:after:scale-[800] ${genBtnTailwindcss(theme?.bg || 'white', theme?.text || 'black')} ${props.tailwindcss}`}
        >
            { props.innerHTML || 'Click' }
        </Link>
    )
}

export function LinkUnderline(props){
    return(
        <Link href={props.url || '#'} className="after:content-[''] after:absolute center after:top-full after:border-2 after:w-0 after:invisible hover:after:visible after:border-white relative px-1 after:rounded-full after:transition-all after:duration-200 hover:after:w-full ">{props.innerHTML || 'Link'}</Link>
    )
}

export function LinkDobbleUnderline(props){
    return(
        <Link href={props.url || '#'} className="hover:text-red-500 flex items-center justify-center gap-1 px-5 relative after:content-[''] after:absolute after:border-2 after:w-[80%] after:border-zinc-700 hover:after:border-red-500 after:transition-all after:duration-500 after:rounded-full hover:after:w-full after:bottom-0 before:content-[''] before:transition-all before:duration-500 before:rounded-full before:absolute before:border-2 before:border-zinc-700 hover:before:border-red-500 hover:before:w-[80%] before:bottom-[-6px] before:w-[40%] ">
            {props.innerHTML || "Link"}
        </Link>
    )
}