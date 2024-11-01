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

    const [inputValue, setInputValue] = useState('')
    const id = props.id || props.name || String(parseInt(Math.random()*100))
    
    const animationDir = (dir='top') => dir ? `animate-text-comefrom-${dir}` : '';

    useEffect(() => {
        let inputBox = document.querySelector(`div#inputBox${id}`)
        inputBox.scroll({left: inputBox.scrollWidth})
    }, [inputValue])

    return (
        <>
            <style jsx>{`
                .animate-text-comefrom-top{animation: text-comefrom-top 1s;}
                .animate-text-comefrom-bottom{animation: text-comefrom-bottom 1s;}
                .animate-text-comefrom-left{animation: text-comefrom-left 1s;}
                .animate-text-comefrom-right{animation: text-comefrom-right 1s;}

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
                    type={props.type || "text"}
                    name={props.name}
                    id={id}
                    placeholder={props.placeholder}
                    minLength={props.minLength}
                    className="input absolute scale-0 opacity-0 w-full h-full font-semibold"
                    onChange={(e) => setInputValue(e.target.value)}
                    onFocus={(e) => {
                        let inputBoxLine = e.target.nextElementSibling;
                        if (inputBoxLine.classList.contains('after:border-[0px]'))
                            return inputBoxLine.classList.replace('after:border-[0px]', 'after:border-[1px]')
                        return inputBoxLine.classList.add('after:border-[1px]')
                    }}
                    onBlur={(e) => {
                        let inputBoxLine = e.target.nextElementSibling;
                        if (inputBoxLine.classList.contains('after:border-[1px]'))
                            return inputBoxLine.classList.replace('after:border-[1px]', 'after:border-[0px]')
                        return inputBoxLine.classList.add('after:border-[0px]')
                    }}
                />
                <div id={`inputBox${id}`} className={`w-full h-full py-[5px] gap-[2px] relative font-semibold text-sm flex items-center after:mx-1 after:border-black after:animate-[h-full_.6s_infinite_alternate] after:border-[0px] overflow-x-scroll`}>
                    {
                        !inputValue ? (
                            <span className="text-nowrap absolute text-gray-700 font-medium pl-1 select-none">{props.placeholder}</span>
                        ) : (
                            inputValue.split('').map((char, index) => <span key={index} className={`text-sm font-semibold ${animationDir(props.animationDir)} ${char==' '?'mx-1':''}`}>{char}</span>)
                        )
                    }
                </div>
            </label>
        </>
    )
}



export function PasswordInput(props) {

    const [inputValue, setInputValue] = useState('')
    const [isPasswordShow, setPasswordShow] = useState(false);
    const id = props.id || props.name || String(parseInt(Math.random()*100))
    
    const animationDir = (dir='top') => dir ? `animate-text-comefrom-${dir}` : '';
   
    useEffect(() => {
        let inputBox = document.querySelector(`div#inputBox${id}`)
        inputBox.scroll({left: inputBox.scrollWidth})
    }, [inputValue])

    return (
        <>
            <style jsx>{`
                .animate-text-comefrom-top{animation: text-comefrom-top 1s;}
                .animate-text-comefrom-bottom{animation: text-comefrom-bottom 1s;}
                .animate-text-comefrom-left{animation: text-comefrom-left 1s;}
                .animate-text-comefrom-right{animation: text-comefrom-right 1s;}

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
            <label htmlFor={id} className={`flex items-center border-2 relative rounded-full overflow-hidden min-w-[200px] w-full h-[40px] pl-[15px] pr-10 transition-all cursor-text has-[.input:invalid:not(:placeholder-shown)]:border-red-500 has-[.input:valid:not(:placeholder-shown)]:border-green-500 has-[.input:focus]:border-sky-500 border-black`}>
                <input
                    type="password"
                    name={props.name}
                    id={id}
                    placeholder={props.placeholder}
                    minLength={props.minLength}
                    required={!!(props.required)}
                    className="input absolute scale-0 opacity-0"
                    onChange={(e) => setInputValue(e.target.value)}
                    onFocus={(e) => {
                        let inputBoxLine = e.target.nextElementSibling;
                        if (inputBoxLine.classList.contains('after:border-[0px]'))
                            return inputBoxLine.classList.replace('after:border-[0px]', 'after:border-[1px]')
                        return inputBoxLine.classList.add('after:border-[1px]')
                    }}
                    onBlur={(e) => {
                        let inputBoxLine = e.target.nextElementSibling;
                        if (inputBoxLine.classList.contains('after:border-[1px]'))
                            return inputBoxLine.classList.replace('after:border-[1px]', 'after:border-[0px]')
                        return inputBoxLine.classList.add('after:border-[0px]')
                    }}
                />
                <div id={`inputBox${id}`} className={`w-full h-full py-[5px] gap-[2px] relative font-semibold text-sm flex items-center after:mx-1 after:border-black after:animate-[h-full_.6s_infinite_alternate] after:border-[0px] overflow-x-scroll`}>
                    {
                        !inputValue ? (
                            <span className="text-nowrap absolute text-gray-700 font-medium pl-1">{props.placeholder}</span>
                        ) : (
                            inputValue.split('').map((char, index) => <span key={index} className={`text-sm font-semibold ${animationDir(props.animationDir)} ${char==' '&&isPasswordShow?'mx-1':''}`}>{isPasswordShow ? char : 'x'}</span>)
                        )
                    }
                </div>
                <div className="absolute center gap-5 right-0 translate-x-[50%] text-2xl text-zinc-700 hover:text-black cursor-pointer transition-all duration-1000" 
                    onClick={() => setPasswordShow(!isPasswordShow)}
                    style={{rotate: isPasswordShow ? '0deg' : '-180deg', transformOrigin: '100%'}}
                >
                    <IoMdEyeOff />
                    <IoMdEye />
                </div>
            </label>
        </>
    )
}