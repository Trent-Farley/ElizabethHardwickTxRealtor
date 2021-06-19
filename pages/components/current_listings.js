import { Card , Image, Button, Modal} from "react-bootstrap";
import { useEffect, useState } from 'react'
import { get_listings } from "../../config";
import fetch from "node-fetch";
import ListingSchema from "../../models/ListingSchema";
import CustomModal from "./modal";
let LISTINGS = [];
export default function Listings(){
    let [state, changeState] = useState({
        info:[ListingSchema],
        listing: ListingSchema,
        modalShow: false
    });    
    useEffect(()=>{
       getAPI(changeState);
    },[]);

    return(
        <>
        {typeof state.listing !== 'undefined'? 
            <CustomModal
            title={state.listing.title}
            imgs={state.listing.imgs}
            remarks={state.listing.remarks}
            price={state.listing.price}
            city={state.listing.city}
            rooms={state.listing.rooms}
            lotsize={state.listing.lotSizeSquareFeet}
            bathrooms={state.listing.bathrooms}
            bathroomsHalf={state.listing.bathroomsHalf}
            show={state.modalShow}
            changeListingState={changeState}
            onClose={retrieveListings}
            /> : <></>
        }
         
            <div className="card-columns pt-lg-2">

            {typeof state.info !== 'undefined' ?  state.info.map((e, i) =>{
                if(state.info.length> 1){
                    return(
                        <Card key={i}>
                            {e.imgs.length > 1 ?
                            <Image src={`${e.imgs[0]}`} layout="fill" className='card-img-top'  alt="Photo of house"/> 
                            : <p></p>
                            }
                            <h6 className="card-title">{e.title}</h6>
                        
                            <Card.Footer>
                                <Button className="w-100" variant="outline-primary" size="lg" onClick={s => {
                                    showModal(e, changeState);
                                }}> <i className="fa fa-info"></i></Button>
                            </Card.Footer>
                        </Card>
                    ) 
                }
            }) : <> </>}
            </div>
        </>
       
    )
}
async function getAPI(changeState){
    try{
        let req = await fetch(get_listings);
        let res = await req.json();
        LISTINGS = res.info;
        changeState({info: LISTINGS});
    }catch(e){
        console.error("Failed to fetch client side");
    }

  } 
function showModal(listing, changeState){
    changeState({
        listing: listing,
        modalShow: true
    });
}

function retrieveListings(changeState){
    changeState({
        info: LISTINGS
    });
}