
const PrekeItem=(props)=>{

    const onIstrintiClick=()=>{
    props.onTrintiPreke(props.preke.key);
    };

return(
    <li className="list-group-item">
        <div className="row">
            <div className="col-md-6">{props.preke.pavadinimas}</div>
            <div className="col-md-3">{props.preke.kiekis}</div>
            <div className="col-md-3">
                <button className="btn btn-danger" onClick={onIstrintiClick}>Istrinti</button>
            </div>
        </div>
    </li>
)
};

export default PrekeItem;