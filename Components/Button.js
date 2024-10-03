import Link from 'next/link'

export function LinkButtonMobile(props) {
    return (<>
        <Link href={props?.url || ''}>
            <span
                className={`${props.class} relative bg-white z-[1] w-fit font-bold overflow-hidden shadow-[0_0_10px_rgb(0,0,0,.3)] px-5 min-w-full h-fit min-h-10 z-1 rounded-full center flex-col text-center after:border-black before:border-black active:text-white text-black transition-all duration-500 active:after:content-[''] after:border-2 active:after:scale-[var(--s)] after:self-start after:z-[-1] after:rounded-full before:content-[''] before:self-end before:z-[-1] active:before:scale-[var(--s)] before:border-2 before:rounded-full before:transition-all after:transition-all`}
                style={{'--s': props?.scale || 70}}
            >
                {props?.title || 'Click'}
            </span>
        </Link>
    </>)
}

export function ButtonMobile(props) {
    return (<>
        <button
            className={`${props.class} relative bg-white z-[1] w-fit font-bold overflow-hidden shadow-[0_0_10px_rgb(0,0,0,.3)] px-5 min-w-full h-fit min-h-10 z-1 rounded-full center flex-col text-center after:border-black before:border-black active:text-white text-black transition-all duration-500 active:after:content-[''] after:border-2 active:after:scale-[var(--s)] after:self-start after:z-[-1] after:rounded-full before:content-[''] before:self-end before:z-[-1] active:before:scale-[var(--s)] before:border-2 before:rounded-full before:transition-all after:transition-all`}
            style={{'--s': props?.scale || 70}}
            onClick={(e)=>{
                e.preventDefault(); 
                props?.onClickFunction ? props.onClickFunction() : '';
            }}
        >
            {props?.title || 'Click'}
        </button>
    </>)
}




export function LinkButtonMobile_01(props) {
    return (<>
        <Link href={props.url}>
            <span
                className={`${props.class} relative bg-white z-[1] font-bold w-fit overflow-hidden shadow-[0_0_10px_rgb(0,0,0,.3)] px-5 min-w-full h-fit min-h-10 z-1 rounded-full center text-center flex-col after:border-red-500 before:border-red-500 active:text-white text-red-500 transition-all duration-500 active:after:content-[''] after:border-2 active:after:scale-[var(--s)] after:self-start after:z-[-1] after:rounded-full before:content-[''] before:self-end before:z-[-1] active:before:scale-[var(--s)] before:border-2 before:rounded-full before:transition-all after:transition-all`}
                style={{'--s': props?.scale || 70}}
            >
                {props?.title || 'Click'}
            </span>
        </Link>
    </>)
}

export function ButtonMobile_01(props) {
    return (<>
        <button
            className={`${props.class} relative bg-white z-[1] font-bold w-fit overflow-hidden shadow-[0_0_10px_rgb(0,0,0,.3)] px-5 min-w-full h-fit min-h-10 z-1 rounded-full center text-center flex-col after:border-red-500 before:border-red-500 active:text-white text-red-500 transition-all duration-500 active:after:content-[''] after:border-2 active:after:scale-[var(--s)] after:self-start after:z-[-1] after:rounded-full before:content-[''] before:self-end before:z-[-1] active:before:scale-[var(--s)] before:border-2 before:rounded-full before:transition-all after:transition-all`}
            style={{'--s': props?.scale || 70}}
            onClick={(e)=>{
                e.preventDefault(); 
                props?.onClickFunction ? props.onClickFunction() : '';
            }}
        >
            {props?.title || 'Click'}
        </button>
    </>)
}




export function LinkButtonPc(props) {
    return (<>
        <Link href={props?.url || ''}>
            <span
                className={`${props.class} relative w-fit bg-white z-[1] font-bold overflow-hidden shadow-[0_0_10px_rgb(0,0,0,.3)] min-w-full px-5 h-fit min-h-10 z-1 text-center rounded-full center flex-col after:border-black before:border-black hover:text-white text-black transition-all duration-500 hover:after:content-[''] after:border-2 hover:after:scale-[var(--s)] after:self-start after:z-[-1] after:rounded-full before:content-[''] before:self-end before:z-[-1] hover:before:scale-[var(--s)] before:border-2 before:rounded-full before:transition-all after:transition-all`}
                style={{'--s': props?.scale || 300}}
            >
                {props?.title || 'Click'}
            </span>
        </Link>
    </>)
}

export function ButtonPc(props) {
    return (<>
        <button
            className={`${props.class} relative w-fit bg-white z-[1] font-bold overflow-hidden shadow-[0_0_10px_rgb(0,0,0,.3)] min-w-full px-5 h-fit min-h-10 z-1 text-center rounded-full center flex-col after:border-black before:border-black hover:text-white text-black transition-all duration-500 hover:after:content-[''] after:border-2 hover:after:scale-[var(--s)] after:self-start after:z-[-1] after:rounded-full before:content-[''] before:self-end before:z-[-1] hover:before:scale-[var(--s)] before:border-2 before:rounded-full before:transition-all after:transition-all`}
            style={{'--s': props?.scale || 300}}
            onClick={(e)=>{
                e.preventDefault(); 
                props?.onClickFunction ? props.onClickFunction() : '';
            }}
        >
            {props?.title || 'Click'}
        </button>
    </>)
}




export function LinkButtonPc_01(props) {
    return (<>
        <Link href={props?.url || ''}>
            <span
                className={`${props.class} relative w-fit bg-white z-[1] font-bold overflow-hidden shadow-[0_0_10px_rgb(0,0,0,.3)] min-w-full px-5 h-fit min-h-10 z-1 rounded-full center text-center flex-col after:border-red-500 before:border-red-500 hover:text-white text-red-500 transition-all duration-500 hover:after:content-[''] after:border-2 hover:after:scale-[var(--s)] after:self-start after:z-[-1] after:rounded-full before:content-[''] before:self-end before:z-[-1] hover:before:scale-[var(--s)] before:border-2 before:rounded-full before:transition-all after:transition-all`}
                style={{'--s': props?.scale || 300}}
            >
                {props?.title || 'Click'}
            </span>
        </Link>
    </>)
}

export function ButtonPc_01(props) {
    return (<>
        <button
            className={`${props.class} relative w-fit bg-white z-[1] font-bold overflow-hidden shadow-[0_0_10px_rgb(0,0,0,.3)] min-w-full px-5 h-fit min-h-10 z-1 rounded-full center text-center flex-col after:border-red-500 before:border-red-500 hover:text-white text-red-500 transition-all duration-500 hover:after:content-[''] after:border-2 hover:after:scale-[var(--s)] after:self-start after:z-[-1] after:rounded-full before:content-[''] before:self-end before:z-[-1] hover:before:scale-[var(--s)] before:border-2 before:rounded-full before:transition-all after:transition-all`}
            style={{'--s': props?.scale || 300}}
            onClick={(e)=>{
                e.preventDefault(); 
                props?.onClickFunction ? props.onClickFunction() : '';
            }}
        >
            {props?.title || 'Click'}
        </button>
    </>)
}
