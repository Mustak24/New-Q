import { useEffect, useState } from "react"
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";




export function Textarea(props) {
    return (<>
        <div className="border-2 has-[.textarea:invalid:not(:placeholder-shown)]:border-red-500 has-[.textarea:valid:not(:placeholder-shown)]:border-green-500 border-black relative rounded-[20px] has-[.textarea:focus]:border-sky-500 overflow-hidden min-w-[200px] w-full min-h-[80px] h-full px-[15px] center">
            <textarea
                name={props.name}
                placeholder={props.placeholder}
                required={props?.required || false}
                className="textarea bg-transparent font-[700] placeholder:font-[500] placeholder:text-gray-700 text-black text-sm w-full h-full outline-none resize-none"
                style={{ scrollbarWidth: "none" }}
            ></textarea>
        </div>
    </>)
}



export function Input(props) {

    const [_, setPasswordShow] = useState(false)
    const [inputType, setInputType] = useState(props.type || 'text')
    const [iconRotation, setIconRotation] = useState(0)
    const id = props.id || props.name || String(parseInt(Math.random()*1000))

    return (
        <>
            <label htmlFor={id} className={`flex items-center border-2 relative rounded-full overflow-hidden min-w-[200px] w-full h-[40px] transition-all cursor-text has-[.input:invalid:not(:placeholder-shown)]:border-red-500 has-[.input:valid:not(:placeholder-shown)]:border-green-500 has-[.input:focus]:border-sky-500 border-black`}>
                <input
                    type={inputType}
                    name={props.name}
                    id={id}
                    placeholder={props.placeholder}
                    minLength={props.minLength}
                    className={`input px-[15px] bg-transparent font-[700] placeholder:font-[500] placeholder:text-gray-700 text-black text-sm w-full h-full outline-none ${props.type == 'password' && 'mr-8'}`}
                />
                {
                    props.type == 'password' &&
                        <div className="center absolute gap-5 right-[0px] translate-x-[50%] text-2xl text-zinc-700 hover:text-black cursor-pointer transition-all duration-1000" 
                        onClick={() => setPasswordShow((isPasswordShow) => {
                            setInputType(isPasswordShow ? 'password' : 'text');
                            setIconRotation(iconRotation + 180)
                            return !isPasswordShow;
                        })}
                        style={{rotate: `${iconRotation}deg`, transformOrigin: '100%'}}
                        >
                            <IoMdEye />
                            <IoMdEyeOff />
                        </div>
                }
            </label>
        </>
    )
}



export function ClassicInput(props){

    const [_, setPasswordShow] = useState(false)
    const [inputType, setInputType] = useState(props.type || 'text')
    const [iconRotation, setIconRotation] = useState(0)
    const [inputValue, setInputValue] = useState(props.value || '')
    const [cursorIndex, setCursorIndex] = useState(inputValue.length)

    const id = props.id || props.name || String(parseInt(Math.random()*100))
    
    const animationDir = (dir='top') => dir ? `animate-text-comefrom-${dir}` : '';

    useEffect(() => {
        let inputBox = document.getElementById(`inputBox${id}`)
        inputBox && inputBox.scroll({left: inputBox.scrollWidth})
    }, [inputValue])

    useEffect(() => {
        let inputBox = document.getElementById(`inputBox${id}`)
        let cursor = document.getElementById(`inputCursor${id}`)
        if(!(inputBox && cursor)) return ;
        document.getElementById(`inputCursor${id}`).remove()
        if(inputValue.length == cursorIndex){
            inputBox.appendChild(cursor)
        } else {
            inputBox.insertBefore(cursor, inputBox.children[cursorIndex])
            for(let i=0; i<=inputValue.length; i++){
                inputBox.children[i]?.classList.remove(animationDir('top'))
            }
            inputBox.children[cursorIndex-1]?.classList.add(animationDir('top'))
        }
    }, [cursorIndex])

    function handleKeyUp(key) {
        if(key.length == 1) {
            setInputValue((text) => {
                text = text.split('')
                text.splice(cursorIndex,0,key)
                return [...text].join('')
            })
            return setCursorIndex((index) => index + 1)
        } else if (key == 'Backspace' || key == 'Delete') {
            setInputValue((text) => {
                text = text.split('')
                text.splice(cursorIndex - (key == 'Backspace'), 1, )
                return [...text].join('')
            })
            return key == 'Delete' || setCursorIndex((index) => index  && index - 1)
        } else if(key == 'ArrowLeft') {
            return setCursorIndex((index) => index && index - 1)
        } else if(key == 'ArrowRight') {
            return  setCursorIndex((index) => index == inputValue.length ? index : index + 1)
        } else if(key == 'ArrowUp') {
            return setCursorIndex(inputValue.length)
        } else if(key == 'ArrowDown') {
            return setCursorIndex(0);
        }
    }

    return (
        <>
            <style jsx>{`
                .animate-text-comefrom-top{animation: text-comefrom-top .5s;}
                .animate-text-comefrom-bottom{animation: text-comefrom-bottom .5s;}
                .animate-text-comefrom-left{animation: text-comefrom-left .5s;}
                .animate-text-comefrom-right{animation: text-comefrom-right .5s;}

                @keyframes text-comefrom-top{
                    0%{opacity: 0; transform: translateY(-100%);}
                    100%{opacity: 1; transform: translateY(0%);}
                }
                @keyframes text-comefrom-bottom{
                    0%{opacity: 0; transform: translateY(100%);}
                    100%{opacity: 1; transform: translateY(0%);}
                }
                @keyframes text-comefrom-left{
                    0%{opacity: 0; transform: translateX(-100%);}
                    100%{opacity: 1; transform: translateX(0%);}
                }
                @keyframes text-comefrom-right{
                    0%{opacity: 0; transform: translateX(100%);}
                    100%{opacity: 1; transform: translateX(0%);}
                }

                @keyframes h-full{
                  0%{height: 10%; opacity: 0;}
                  100%{height: 100%; opacity: 1;}
                }
            `}</style>
            <label htmlFor={id} className={`flex items-center border-2 relative rounded-full overflow-hidden min-w-[200px] w-full h-[40px] px-[15px] transition-all cursor-text has-[.input:invalid:not(:placeholder-shown)]:border-red-500 has-[.input:valid:not(:placeholder-shown)]:border-green-500 has-[.input:focus]:border-sky-500 border-black`}>
                <input
                    type={inputType}
                    name={props.name}
                    id={id}
                    placeholder={props.placeholder}
                    minLength={props.minLength}
                    className="input absolute scale-0 opacity-0 w-full h-full font-semibold z-[-1]"
                    value={inputValue}
                    autoComplete="off"
                    onFocus={(e) => {
                        document.getElementById(`inputCursor${id}`).classList.replace('border-0', 'border-[1px]')   
                    }}
                    onKeyDown={(e) => handleKeyUp(e.key)}
                    onBlur={(e) => {
                        document.getElementById(`inputCursor${id}`).classList.replace('border-[1px]', 'border-0')
                    }}
                />
                <div 
                    id={`inputBox${id}`} 
                    className={`w-full h-full py-[5px] relative font-semibold text-sm flex items-center overflow-x-scroll ${props.type == 'password' ? 'mr-5': ''}`}
                    onClick={(e) => {
                        let index = e.target.dataset?.index || inputValue.length
                        setCursorIndex(() => parseInt(index))
                    }} 
                >
                    <span id={`inputCursor${id}`} className="border-0 border-black h-full relative animate-[h-full_.6s_infinite_alternate]"></span>
                    {
                        !inputValue ? (
                            <span className="text-nowrap absolute text-gray-700 font-medium pl-1 select-none">{props.placeholder}</span>
                        ) : (
                            inputValue.split('').map((char, index) => <span key={index} data-index={index} className={`text-sm font-semibold ${char==' ' && inputType!='password'?'mx-1':''} ${animationDir('top')}`}>{inputType == 'password' ? 'x' : char}</span>)
                        )
                    }
                </div>
                {
                    props.type == 'password' &&
                        <div className="center absolute gap-5 right-0 translate-x-[50%] text-2xl text-zinc-700 hover:text-black cursor-pointer transition-all duration-1000" 
                        onClick={() => setPasswordShow((isPasswordShow) => {
                            setInputType(isPasswordShow ? 'password' : 'text');
                            setIconRotation(iconRotation + 180)
                            return !isPasswordShow;
                        })}
                        style={{rotate: `${iconRotation}deg`, transformOrigin: '100%'}}
                        >
                            <IoMdEye />
                            <IoMdEyeOff />
                        </div>
                }
            </label>
        </>
    )
}