
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import './card.css';


const Cards = ({ id, src, title, description, imgWidth, cardWidth }) => {
    const header = <img alt="Card" src={src} className="img-card" style={{ width: `${imgWidth}`, height:"auto" }} />;
    const footer = <span>{imgWidth === "400px" ?
        <>
            <Link className="card-link p-m-2" to={`/conspiracy/${id}`} >
                <Button label="Detalle" icon="pi pi-check" className="p-button-primary" />
            </Link>
            <Button label="Eliminar" icon="pi pi-times" className="p-button-danger" />
        </>
        :
        <Button label="Modificar" icon="pi pi-times" className="p-button-warning" />
    }
    </span>;

    return (
        
            <Card footer={footer} header={header} title={title} className="p-shadow-10 card"  style={{ width: `${cardWidth}`, height:"auto", border: "1px solid black" }}>
                {description}
            </Card>
        
    );
}

export default Cards;