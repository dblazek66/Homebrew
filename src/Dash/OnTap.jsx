
import OnTapItem from "./OnTapItem"
import useFetch from "../useFetch"
export default function OnTap(){
    //custom hook
    const {data,isLoading,error} = useFetch('http://localhost:8000/ontap')
    
    return(
        <>
            <div className="card bg-dark">
                { error && <div>{error}</div>}
                { isLoading && <div>Loading...</div>}
                <div>
                    {
                    data && data.length>0 && data.map((item)=>{
                        return <OnTapItem key={crypto.randomUUID()} item={item}/>
                        
                    })}
                </div>
            </div>
       </>
    )
}