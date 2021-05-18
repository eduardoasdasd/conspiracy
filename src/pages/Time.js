import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Timeline } from 'primereact/timeline';
import { Link } from 'react-router-dom';

const Time = ({conspiracies}) =>{

    const customizedMarker = (item) => {
        return (
            <span className="custom-marker p-shadow-2" style={{ backgroundColor: "blue", borderRadius: "50%", textAlign:"center"  }}>
                
                <i className="pi pi-clock " style={{width: "20px", height: "auto"  }}></i>
                
            </span>
        );
    };

    const customizedContent = (item) => {
        return (
            <Card title={item.title} subTitle={item.date} style={{backgroundColor: "black"}}>
                { item.src && <img src={item.src} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.title} width={200} className="p-shadow-2" />}
                <p></p>
                <Link className="card-link p-m-2" to={`/conspiracy/${item.id}`} >
                <Button label="Detalle" className="p-button-text"></Button>
                </Link>
            </Card>
        );
    };



 
return (
    <Timeline value={conspiracies} align="alternate" className="customized-timeline" marker={customizedMarker} content={customizedContent} />
    
);
}
export default Time;