import React, {useState} from "react";
import { Nav, Navbar, Image, Button, Offcanvas } from 'react-bootstrap';
import { Link } from "react-router-dom";
import WebLogo from "../../../../assets/WebLogo.png";
import HomeMenu from "../../../Home/HomeMenu/HomeMenu";
import './HomeNavbar.css'

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
      <>
          <Button className="btn-ticket__menu me-5" variant="primary" onClick={handleShow}>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
              </svg>
          </Button>
          <Offcanvas style={{backgroundColor: '#f5f0d7', height: '40%', with: "100%"}} show={show} onHide={handleClose} {...props}>
              <Offcanvas.Header closeButton>
                  <Offcanvas.Title>
                    <Link className="navigation__link" to='/'>
                    Saigon Zoo
                    </Link>
                  </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                  <HomeMenu />
              </Offcanvas.Body>
          </Offcanvas>
      </>
  );
}

const HomeNavbar = () => {
  return (
    <>
      <Image className="home-view__logo ms-5" src={WebLogo}></Image>
      <div className="home-view__top navbar-fixed-top">
        <Link to="/news">
          <Button className="btn-news__homeview">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="47" fill="currentColor" class="bi bi-newspaper" viewBox="0 1 16 16">
              <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z" />
              <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z" />
            </svg>
            News
          </Button>
        </Link>
        <Link to="/buyingticket">
          <Button className="btn-ticket__homeview">
            <svg width="50" height="47" viewBox="0 5 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.86619 16.3642C0.825263 16.2942 0.82592 16.1152 1.02197 16.0006L26.7689 0.948466C26.965 0.833854 27.1212 0.921052 27.1621 0.991058L29.7473 5.41299C29.4078 5.81094 29.2948 6.38434 29.5843 6.87952C29.8737 7.3747 30.4289 7.55751 30.9422 7.4569L33.5559 11.9276C33.5968 11.9977 33.5961 12.1766 33.4001 12.2912L7.65315 27.3434C7.4571 27.458 7.30086 27.3708 7.25994 27.3008L4.6565 22.8476C5.02983 22.4487 5.16524 21.8477 4.86357 21.3317C4.56189 20.8157 3.97177 20.6389 3.44108 20.7686L0.86619 16.3642Z" fill="white" stroke="black" />
              <path d="M5.5 17.78C5.5 17.6092 5.62956 17.5 5.754 17.5H33.246C33.3704 17.5 33.5 17.6092 33.5 17.78V23.2505C33.0182 23.4442 32.688 23.9262 32.688 24.47C32.688 25.0138 33.0182 25.4958 33.5 25.6895V31.22C33.5 31.3908 33.3704 31.5 33.246 31.5H5.754C5.62956 31.5 5.5 31.3908 5.5 31.22V25.7112C6.01316 25.5339 6.37 25.0354 6.37 24.47C6.37 23.9046 6.01316 23.4061 5.5 23.2288V17.78Z" fill="white" stroke="black" />
            </svg>
            Ticket
          </Button>
        </Link>
        {['top'].map((placement, idx) => (
          <OffCanvasExample key={idx} placement={placement} name={placement} />
        ))}

      </div>
      {/* // <Container fluid>
    //     <Navbar expand="lg" variant="light" fixed="top" className="ps-4">
    //     <Navbar.Brand className="" href="/"><Image src={ZooLogo} width={60} height={60} /> Sai Gon Zoo</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto pb-1">
    //         <Nav.Link as={Link} to={"/login"} >Login</Nav.Link>
    //         <Nav.Link as={Link} to={"/buyingticket"} >Tickets</Nav.Link>
    //         <Nav.Link as={Link} to={"/news"} >News</Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    // </Navbar>
    //   </Container> */}
    </>
  )
};

export default HomeNavbar;