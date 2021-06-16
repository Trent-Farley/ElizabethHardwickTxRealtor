
import { Card , Button, Jumbotron, ButtonGroup} from "react-bootstrap";
import Image from 'next/image'

export function MainInfo(){
    return (
        <div>
            <div className="row pt-lg-4 pb-lg-5">
                <div className = "col-sm-4 shadow-lg pt-3 bg-dark">
                    <Card className=" bg-dark">
                        <div className={"card-img bg-transparent w-100 h-100"}>
                            <Image height="200%" width="auto"  src="/images/main_photo.jpg" alt="Elizabeth Hardwick"/>
                        </div>
                        <div className="card-footer">
                            <ButtonGroup className="d-flex">
                                <Button className="w-100" size='lg' variant="outline-primary"><i className="fa fa-facebook"></i></Button>
                                <Button className="w-100" size='lg' variant="outline-success"><i className="fa fa-twitter"></i></Button>
                                <Button className="w-100" size='lg' variant="outline-light"><i className="fa fa-phone"></i></Button>
                            </ButtonGroup>
                        </div>
                    </Card>
                </div>
                <div className = "col" >
                    <Jumbotron className="shadow-lg  p-4 m-1">
                        <h2 className="card-title border-bottom">
                            About me
                        </h2>
                        <p className="card-text"> 
                            As a RE/MAX® agent, I’m dedicated to helping my clients find the home of their dreams. Whether you are buying or selling a home or just curious about the local market, I would love to offer my support and services. I know the local community — both as an agent and a neighbor — and can help guide you through the nuances of our local market. With access to top listings, a worldwide network, exceptional marketing strategies and cutting-edge technology, I work hard to make your real estate experience memorable and enjoyable.
                            I look forward to the opportunity to work with you. Please don’t hesitate to contact me today!
                        </p>
                    </Jumbotron>
                </div>

            </div>
        </div>
    );
}