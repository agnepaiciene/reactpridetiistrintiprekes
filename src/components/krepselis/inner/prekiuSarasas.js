import Card from "../../UI/card";
import PrekeItem from "./prekeitem";

const PrekiuSarasas=(props)=>{

let prekiuSarasas=[];
    props.prekes.forEach((preke, index)=>{

    prekiuSarasas.push(
        (<PrekeItem key={index} preke={ {...preke, key:index} } onTrintiPreke={props.onTrintiPreke}></PrekeItem>)
    );
    })

return(

      <Card title="Prekiu sarasas">
         <ul className="list-group">
             {prekiuSarasas}
         </ul>
      </Card>


)

}
export  default PrekiuSarasas;