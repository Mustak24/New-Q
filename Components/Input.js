export function Input(props) {
    return (<>

        <div className="border-2 has-[.input:invalid:not(:placeholder-shown)]:border-red-500 has-[.input:valid:not(:placeholder-shown)]:border-green-500 has-[.input:valid]: border-black relative rounded-full overflow-hidden min-w-[200px] w-full h-[40px] px-[15px]">
            <input
                name={props.name}
                type={props.type}
                placeholder={props.placeholder}
                minLength={props?.minLength || ''}
                required={props?.required || false}
                className="input bg-transparent font-[700] placeholder:font-[500] placeholder:text-gray-700 text-black text-sm flex items-center w-full h-full outline-none "
            />
        </div>

    </>)
}

export function Textarea(props) {
    return (<>
        <div className="border-2 has-[.textarea:invalid:not(:placeholder-shown)]:border-red-500 has-[.textarea:valid:not(:placeholder-shown)]:border-green-500 border-black relative rounded-[20px] overflow-hidden min-w-[200px] w-full min-h-[80px] h-full px-[15px]">
            <textarea
                name={props.name}
                placeholder={props.placeholder}
                required={props?.required || false}
                className="textarea bg-transparent font-[700] placeholder:font-[500] placeholder:text-gray-700 text-black text-sm flex items-center pt-[10px] w-full h-full outline-none resize-none"
                style={{ scrollbarWidth: "none" }}
            ></textarea>
        </div>
    </>)
}