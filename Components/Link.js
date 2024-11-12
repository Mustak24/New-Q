import Link from "next/link"

export function LinkBtn ({url='#', tailwindcss='', onClick=()=>{}, text='black', bg='white', innerHTML='Link'}){ 
    const Effects = {
        'hover': `max-sm:hover:before:scale-[150] max-sm:hover:after:scale-[150] max-md:hover:before:scale-[200] max-md:hover:after:scale-[200] max-lg:hover:before:scale-[400] max-lg:hover:after:scale-[400] hover:before:scale-[800] hover:after:scale-[800]`,
        'active': `max-sm:active:before:scale-[150] max-sm:active:after:scale-[150] max-md:active:before:scale-[200] max-md:active:after:scale-[200] max-lg:active:before:scale-[400] max-lg:active:after:scale-[400] active:before:scale-[800] active:after:scale-[800]`
    }

    return (
        <Link
            href={url} 
            className={`${tailwindcss} relative z-[1] font-bold overflow-hidden shadow-[0_0_10px_rgb(0,0,0,.3)] px-5 h-fit min-h-10 z-1 rounded-full flex items-center justify-center flex-col text-center transition-all duration-500 text-[var(--text)] max-sm:active:text-[var(--bg)] sm:hover:text-[var(--bg)] bg-[var(--bg)] after:content-[''] after:border-2 after:border-[var(--text)] after:self-start after:z-[-1] after:rounded-full before:content-[''] before:self-end before:z-[-1] before:border-2 before:border-[var(--text)] before:rounded-full before:transition-all after:transition-all max-sm:active:before:scale-[150] max-sm:active:after:scale-[150] sm:hover:before:scale-[300] sm:hover:after:scale-[300]`}
            onClick={onClick || function(){}}
            style={{'--text': text, '--bg': bg}}
        >
            {innerHTML}
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