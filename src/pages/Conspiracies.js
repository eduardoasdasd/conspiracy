

import Cards from "../components/Card";
import './conspiracy.css';



const Conspiracies = ({ conspiracies}) => {
    return (
        <>
            <div className="p-d-flex p-flex-wrap">
               
                {conspiracies !== undefined &&
                    conspiracies.map(card =>
                    (<div className="p-mr-2 p-mb-2 p-m-2" key={card.id}>
                        <Cards id={card.id}
                            src={card.src}
                            title={card.title}
                            description=""
                            cardWidth="25em"
                            imgWidth="400px"
                        />
                        
                    </div>
                     ))  
                }
                    </div>
        </>
    )
}

export default Conspiracies;