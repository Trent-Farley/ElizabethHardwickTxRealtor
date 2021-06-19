import { Modal, Card, Image, Carousel, ListGroup } from "react-bootstrap"
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CustomModal({title, imgs, remarks, price, city, rooms, lotsize, bathrooms, bathrromsHalf, show, onClose, changeListingState}){
    let [state, changeState] = useState({showModal:show});
    if(typeof title !== 'undefined' || title !== ""){
        return(
            <Modal animation="false" onHide={() => {changeState({showModal: false}); onClose(changeListingState);}} size="lg"  dialogClassName="modal-90w" show={state.showModal} backdrop="static">
                <Modal.Header closeButton >      
                    <Modal.Title>
                        {title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Card>
                        <Carousel>
                            {typeof imgs !== 'undefined' ?  imgs.map((i, k) => {
                                return (
                                    <Carousel.Item key={k}>
                                        <Image src={i} alt="photo of house" className="d-block w-100"/>
                                    </Carousel.Item>
                                );
                            }): <> </>}
                        </Carousel>
                        <Card.Body>
                            <div className="row">
                                
                                    <Card className="w-100">
                                        <Card.Title>
                                            Quick information
                                        </Card.Title>
                                        <ListGroup>
                                            <ListGroup.Item>
                                                Bedrooms: {rooms}
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                Full bathrooms: {bathrooms}
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                Half bathrooms: {bathrromsHalf}
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                Lot size: {lotsize}
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                City: {city}
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                Price: ${price}
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Card>
                                </div>
                                
                                <div className="row">
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>
                                                Description
                                            </Card.Title>
                                        <Card.Text>
                                            {remarks}
                                        </Card.Text>
                                        </Card.Body>
                                    </Card> 
                                </div>
                           
                        </Card.Body>
                    </Card>
                </Modal.Body>
            </Modal >
        )
    } else {
        return (<></>)
    }
   
}