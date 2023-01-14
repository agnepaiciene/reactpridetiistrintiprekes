import PrekiuSarasas from "./inner/prekiuSarasas";
import PridetiPreke from "./inner/pridetiPreke";
import Card from "../UI/card";
import {useState} from "react";


const Krepselis=()=>{

    let initPrekes=[
        {pavadinimas: "Pienas", kiekis:1},
        {pavadinimas: "Duona", kiekis:2}
    ]


    const data=localStorage.getItem("prekes")
    if(data!=null) {
        initPrekes = JSON.parse(data)
    }

    const [prekes, setPrekes]=useState(initPrekes);

    const [prekiuKiekis, setPrekiuKiekis]=useState(2);

    const issaugotiPrekes=()=>{
        localStorage.setItem("prekes", JSON.stringify(prekes));
    }
    const pridetiPreke=(preke)=>{
        prekes.push(preke);
        issaugotiPrekes();
        setPrekes(Array.from(prekes));

        console.log("Preke gauta ir prideta");
        console.log(preke);
        console.log(prekes);
    }

    const trintiPreke=(index)=>{
        prekes.splice(index, 1);
        issaugotiPrekes();
        setPrekes(Array.from(prekes));
        console.log(prekes);
        console.log("Triname:" +index);

    };

    return(
        <div className="row mt-5">
           <div className="col-md-6">
               <PridetiPreke onPridetiPreke={pridetiPreke}></PridetiPreke>
           </div>

            <div className="col-md-6">

                <PrekiuSarasas prekes={prekes} onTrintiPreke={trintiPreke}></PrekiuSarasas>
                {/*{prekiuKiekis}*/}
            </div>
            {/*<div className="col-md-12 mt-3">*/}
            {/*    <Card title="Naujas">*/}
            {/*      <div className="alert alert-danger">Labas</div>*/}
            {/*    </Card>*/}

            {/*</div>*/}
        </div>
    )
}

export default  Krepselis;