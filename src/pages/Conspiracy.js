import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Cards from "../components/Card";
import './conspiracy.css';


const Conspiracy = ({conspiracies}) =>{

    const { consp } = useParams();
    const [selectedConsp, setSelectedConsp] = useState(null)

    

    useEffect(()=>{

        const cardFilter = conspiracies.filter((card) =>card.id === parseInt(consp) ) 

       setSelectedConsp(cardFilter)
        
    },[])

    return(
        <>
            <div className="conspiracion-container">
                <div className="conspiracion-title"><h3>Conspiracion</h3></div>
                {selectedConsp && selectedConsp.map((conspiracy)=>
                <div className="div-card" key={conspiracy.id}>
                <Cards id={conspiracy.id}
                     src={conspiracy.src} 
                     title={conspiracy.title} 
                     description={conspiracy.description} 
                     imgWidth="50em"
                     cardWidth="50em"
                     />
                </div>
                )
                }
            </div>

        </>
        

    )


}

export default Conspiracy;