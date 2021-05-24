

import { Link } from 'react-router-dom';
import './card.css';


const Cards = ({ id, src, title, description, imgWidth, cardWidth }) => {

  

    return (

    /* <Card footer={footer} header={header} title={title} className="p-shadow-10 card"  style={{ width: `${cardWidth}`, height:"auto", border: "1px solid black" }}>
     {description}
     </Card>*/

    <div className="card" style={{ width: `${cardWidth}`, height: "auto", border: "1px solid black" }}>
      <img alt="Card" src={src} className="img-card" style={{ width: `${imgWidth}`, height: "auto" }} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <span>{imgWidth === "400px" ?
          <>
            <Link className="card-link p-m-2" to={`/conspiracy/${id}`} >
              <input type="button" value="Detalle" className="btn btn-primary" />
            </Link>
            <input type="button" value="Eliminar" className="btn btn-danger" />
          </>
          :
          <input type="button" value="Modificar" className="btn btn-warning" />
        }
        </span>
        </div>
    </div>

  );
}

export default Cards;