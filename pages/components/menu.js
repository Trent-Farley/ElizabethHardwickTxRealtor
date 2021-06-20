import {Navbar, Nav} from 'react-bootstrap'
import Link from 'next/link'
export default function Menu(){
    return(
        <>
          <Navbar variant='dark' className="pb-0 mb-0" bg='dark'>
            <Nav className="mr-auto">
              <Nav.Link >
              <Link passHref={true} href="/main"><p> <i className="fa fa-home"></i> Home</p></Link>
              </Nav.Link>
              <Nav.Link >
                <Link passHref={true} href="/search"><p> <i className="fa fa-search"></i> Search</p></Link>
              </Nav.Link>
              <Nav.Link href="https://www.remax.com/real-estate-agents/elizabeth-hardwick-mckinney-tx/100112450"><i className="fa fa-info"></i> More Information</Nav.Link>
            </Nav>
          </Navbar>
        </>
    )
}