import { useState,useEffect } from "react"
import stylesList from '../Dash/beerStyles.json';
import { FaTrash } from "react-icons/fa";
import useFetch from "../useFetch";

export default function Entry(){
    //const [data,setData]=useState([])    
    const [beerName, setBeerName]=useState('');
    const [beerStyle, setBeerStyle]=useState('American Amber Ale');
    const [description, setDescription]=useState('');
    const [ibu,setIbu]=useState('')
    const [color,setColor]=useState('amber')
    const [abv,setAbv]=useState('')

     const handleOnTap = (e)=>{
        e.preventDefault()
        const ontap ={
            beerName,
            beerStyle,
            description,
            ibu,
            abv,
            color
        }
      
        fetch('http://localhost:8000/ontap',
        {
            method:'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(ontap)
        })
        window.location.href="/maint"
        return
    }

    const handleStyleColor = (e) =>{
        const colorMatch = stylesList.find((item)=> item.style === e  ) 
        setColor(colorMatch.color)
        setBeerStyle(e)

    }

    const handleDelete =(id)=>{
        let result = confirm('Delete this item?')
        if(result){
            fetch('http://localhost:8000/ontap/'+ id,{
                method: 'DELETE'
            }).then(()=>{
                window.location.href="/"
            })
            
        } else return
    }
    
    const {data,isLoading,error} = useFetch('http://localhost:8000/ontap')

    return(
        <> 
        <h3>Tap List</h3>
            <div className="row">
                <div className="card column">
                    <form onSubmit={handleOnTap}>
                        <label>Beer Name</label>
                        <input 
                        className="input-control" 
                        type="text" 
                        value={beerName}
                        onChange={(e)=>setBeerName(e.target.value)}
                        />

                        <label>Beer Style</label>
                        <select 
                            className="input-control"
                            value={beerStyle}
                            //onChange={(e)=>setBeerStyle(e.target.value)}
                            onChange={(e)=>handleStyleColor(e.target.value)}
                            >
                            {stylesList && stylesList.length>0 && stylesList.map((item)=>{
                                return <option key={crypto.randomUUID()}>
                                    {item.style}
                                </option>
                            })}
                        </select>

                        <label>IBU</label>
                        <input
                            className="input-control"
                            value={ibu}
                            onChange={(e)=>setIbu(e.target.value)}
                        />

                        <label>Alcohol By Content %</label>
                        <input
                            className="input-control"
                            value={abv}
                            onChange={(e)=>setAbv(e.target.value)}
                        />

                        <label>Description</label>
                        <textarea
                        className="input-control"
                            onChange={(e)=>setDescription(e.target.value)}
                            value={description}>
                        </textarea>
                        
                        <button className="dropbtn">Submit</button>
                    </form>
                </div>

                <div className="card column">
                    <h3>Delete from Tap List</h3>
                    {
                        data && data.length>0 && data.map((item)=>{
                            return <p 
                                key={item.id}>
                                    <a href="#" className="link-icon" onClick={ ()=>handleDelete(item.id) }  >
                                        <FaTrash/>
                                    </a>
                                    {item.beerName}
                                </p>
                    })}
                </div>                
            </div>


        </>
      
    )
}