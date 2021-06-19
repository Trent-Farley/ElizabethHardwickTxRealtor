
import { Card , Button, Jumbotron, ButtonGroup} from "react-bootstrap";
import { Image } from "react-bootstrap";

export default function MainInfo(){
    return (
        <div>
            <div className="row pt-lg-4 pb-lg-5">
                <div className = "col-sm-4 shadow-lg pt-3 bg-dark">
                    <Card className="bg-dark">
                        <Image className="" src="/images/main_photo.jpg" alt="Elizabeth Hardwick"/>
                        <div className="card-footer">
                            <ButtonGroup className="d-flex">
                                <a className="btn btn-outline-light w-100 btn-lg" title="Link to phone number" href="tel:469-850-2170"><i className="fa fa-phone"></i></a>
                                <a className="btn btn-outline-success w-100 btn-lg" title="link to email" href="mailto:elizabeth@tomorrowsrealty.com" target="_blank" rel="noreferrer"><i className="fa fa-envelope"> </i></a>
                                <a className="btn btn-outline-primary w-100 btn-lg" title="link to Facebook" target="_blank" rel="noreferrer" href="https://www.facebook.com/hardwick4"><i className="fa fa-facebook"></i></a>
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