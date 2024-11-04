
import { useEffect, useState } from 'react'
import { SpinLoader } from './Loading'


export default function Button(props) {

    let {isLoading, theme, loadingInnerHTML, effect} = props
    const bg = theme?.bg || 'white'
    const text = theme?.text || 'black'
    if(!effect) effect = 'hover'
    const id = props.id || parseInt(Math.random() * 1000)

    const [isHover, setHover] = useState(false)
    const [isActive, setActive] = useState(false)
    

    useEffect(() => {
        let button = document.getElementById(`button${id}`)
        if(!button) return;
        if(isHover || isActive){
            button.classList.replace(`text-${text}`, `text-${bg}`)
        } else {
            button.classList.replace(`text-${bg}`, `text-${text}`)
        }
    }, [isActive, isHover])

    const genBtnTailwindcss = (bgColor, textColor) => [`bg-${bgColor}`, `after:border-${textColor}`, `before:border-${textColor}`, `text-${textColor}`].join(' ')
    
    
    const Effects = {
        'hover': `max-sm:hover:before:scale-[150] max-sm:hover:after:scale-[150] max-md:hover:before:scale-[200] max-md:hover:after:scale-[200] max-lg:hover:before:scale-[400] max-lg:hover:after:scale-[400] hover:before:scale-[800] hover:after:scale-[800]`,
        'active': `max-sm:active:before:scale-[150] max-sm:active:after:scale-[150] max-md:active:before:scale-[200] max-md:active:after:scale-[200] max-lg:active:before:scale-[400] max-lg:active:after:scale-[400] active:before:scale-[800] active:after:scale-[800]`
    }

    return (
        <button 
            id={`button${id}`}
            className={`relative z-[1] font-bold overflow-hidden shadow-[0_0_10px_rgb(0,0,0,.3)] px-5 h-fit min-h-10 z-1 rounded-full center flex-col text-center transition-all duration-500 active:after:content-[''] after:border-2 after:self-start after:z-[-1] after:rounded-full before:content-[''] before:self-end before:z-[-1] before:border-2 before:rounded-full before:transition-all after:transition-all ${Effects[effect]}  ${genBtnTailwindcss(bg, text)} ${props.tailwindcss} `}
            onClick={props?.onClick || function(){}}
            
            onMouseEnter={() => (effect == 'hover') && setHover(true)}
            onMouseLeave={() => (effect == 'hover') && setHover(false)}

            onMouseDown={() => (effect == 'active') && setActive(true)}
            onMouseUp={() => (effect == 'active') && setActive(false)}
        >
            {
                isLoading ?
                  (
                    <div className="center gap-2">
                      <SpinLoader size='sm' theme='black-white' />
                      {loadingInnerHTML || 'Wait ...'}
                    </div>
                  ) : (props.innerHTML)
            }
        </button>
    )
}


export function RoundButton(props) {
    
    const types = {
        delete: {
            tailwindClasses: ['text-red-500', 'border-red-500', 'after:bg-red-500', 'hover:shadow-[0_0_20px_2px_crimson]'],
            innerHTML: 'Delete'
        },
        edit: {
            tailwindClasses: ['text-blue-500', 'border-blue-500', 'after:bg-blue-500', 'hover:shadow-[0_0_20px_2px_rgb(14,165,233)]'],
            innerHTML: 'Edit'
        }
    }

    return (
        <button
            className={`relative translate-y-[200%] group-hover:translate-y-0 text-[9px] font-bold font-sans cursor-pointer z-[1] transition-all duration-500 hover:text-white center size-10 overflow-hidden rounded-full border-2 after:contact-[''] after:z-[-1] after:absolute after:size-10 after:top-[-80%] after:rounded-[40%] hover:after:top-[20%] after:duration-500 after:transition-all ${(types[props.type].tailwindClasses).join(' ')}`}
            onClick={props?.onClick || null}
        >
            {props.innerHTML || types[props.type].innerHTML}
        </button>
    )
}