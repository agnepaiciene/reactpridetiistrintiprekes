const Card=(props)=>{
    return(
        <div className="card">
            <div className="card-header">{props.title}</div>
            <div className="card-body"></div>
            {props.children}
        </div>
    )
}
export default Card;