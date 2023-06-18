import { useEffect, useState } from "react"
import Card from "./Card"

export default function MainPage(props){
    const [allCoctails, setAllCoctails] = useState([])
    useEffect(()=>{
        fetch('http://127.0.0.1:8000/api/coctails/')
        .then(res => res.json())
        .then(data=>setAllCoctails(data))  
    },[])
    const coctails = allCoctails.map((item)=>{
        return <Card 
                    key={item.id}
                    id={item.id}
                    {...item}
        />
    }
    )
    
    return(
        <main className={props.dark ? "dark": ""}>
            <div className="card--holder">
                {coctails}
            </div>
        </main>
    )
}