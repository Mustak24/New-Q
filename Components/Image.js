import Image from "next/image"


export function ImageSliderLeft(props){
  return(<>
    <div className="absolute w-full h-full center p-2 gap-2 " 
      style={{
        animation: 'slideLeft',
        animationTimeline: 'view()',
      }}>
        {(
          props?.imgs || [1,2,3,4,5]).map((e, i)=>{
          return(
            <div key={e+i} className="h-full shrink-0 overflow-hidden aspect-square bg-red-200">
              <Image width={300} height={300} className="w-full h-full object-cover" alt="Internal server come" src={e} loading="lazy" />
            </div>
          )
        })}
        {(props?.imgs || [1,2,3,4,5]).map((e, i)=>{
          return(
            <div key={i+e} className="h-full shrink-0 overflow-hidden aspect-square bg-red-200">
              <Image width={300} height={300} className="w-full h-full object-cover" src={e} alt="Internal sever come" loading="lazy" />
            </div>
          )
        })}
    </div>
  </>)
}

export function ImageSliderRight(props){
  return(<>
    <div className="absolute w-full h-full center  p-2 gap-2" 
      style={{
        animation: 'slideRight',
        animationTimeline: 'view()',
      }}>
        {(props?.imgs || [1,2,3,4,5]).map((e, i)=>{
          return(
            <div key={e+i} className="h-full shrink-0 overflow-hidden aspect-square bg-red-200">
              <img className="w-full h-full object-cover" src={e} alt="Internal server come" />
            </div>
          )
        })}
        {(props?.imgs || [1,2,3,4,5]).map((e, i)=>{
          return(
            <div key={i+e} className="h-full shrink-0 overflow-hidden aspect-square bg-red-200">
              <img className="w-full h-full object-cover" src={e} alt="Internal server come" />
            </div>
          )
        })}
    </div>
  </>)
}