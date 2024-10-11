export default function Loading(props) {
    return (<div className="text-black center w-full h-full rounded-full">
        {[1, 2, 3].map((i) => {
            return (
                <span key={i} className="relative center min-size-[50vw] size-[10vw]">
                    <span
                        className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"
                        style={{
                            animationDelay: `${5 * i}00ms`,
                            animationDuration: `2s`,
                        }}
                    ></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                </span>
            );
        })}
    </div>)
}