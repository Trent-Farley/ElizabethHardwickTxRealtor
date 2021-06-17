import { Card , Button, Jumbotron, ButtonGroup} from "react-bootstrap";
import { Image } from "react-bootstrap";
import { useEffect, useState } from 'react'
import { get_listings } from "../../config";
import fetch from "node-fetch";

let STARTING_SCHEMA ={
    "price" : "",
    "remarks" : "",
    "city" : "",
    "rooms" : "",
    "lotSizeSquareFeet": "",
    "imgs" : [""],
    "bathrooms" : "",
    "bathroomsHalf" : "",
    "title" : ""
};


export default function Listings(){
    let [state, changeState] = useState({info:[STARTING_SCHEMA]});
    
    useEffect(()=>{
       getAPI(changeState);
    },[]);
    return(
        <div className="card-columns pt-lg-2">
            {state.info.map((e, i) =>{
                return(
                    <Card key={i}>
                        {e.imgs.length > 1 ?
                         <Image src={`${e.imgs[0]}`} layout="fill" className='card-img-top'  alt="Photo of house"/> 
                            : <p></p>
                        }
                        <h6 className="card-title">{e.title}</h6>
                    </Card>
                )
            })}
        </div>
    )
}
async function getAPI(changeState){
    try{
        let req = await fetch(get_listings);
        let res = await req.json();
        console.log(res);
        changeState({info: res.info});
    }catch(e){
        console.error("Failed to fetch client side");
    }

  } 
  