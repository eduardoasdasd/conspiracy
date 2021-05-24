
import { useEffect, useState } from 'react'
import astro from '../../images/astro.png'
//import './js/jquery.svg3dtagcloud.min.js'
import './intro.css'

const Intro = () =>{
    const [widthAstro, setWidthAstro] = useState("100%");
    const [displayText, setDisplayText] = useState("none");
    
    const load = () =>{
        setWidthAstro("30%")
        
        setTimeout(() => {
            setDisplayText("flex");
        }, 3000);

    }


    useEffect(()=>{ 
        
        
    },[])

    //style={{backgroundImage: `url(${stars})`}}

    return(
        <>
            <div className="intro-container" onLoad={load} >

                <div className="astro-container" style={{width:widthAstro}}>
                <img src={astro} className="img-astro" alt="astro"/>
                </div>
                <div className="text-intro-container" style={{display: displayText }}>
                    <h1> Entra al universo de las conspiraciones abriendo tu mente y dejandote llevar por un sin fin de conocimiento sin limite </h1>
                </div>
                <div className="holder" >
                    
                </div>
            </div>
        </>
    )
}

export default Intro;