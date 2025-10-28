import { React } from "react";
import { Button, Card, Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import { FaShoppingBag } from "react-icons/fa";

const Home = () => {
    return (
        <Container>
            <Row>
                <Col lg={12} sm={12}>
                    <Navbar expand="lg" className="bg-body-tertiary">
                        <Container>
                            <Navbar.Brand href="#home">
                                <img className='img-fluid' src="https://avada.com/wp-content/uploads/2021/07/avada-logo-svg.svg" />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="#home">Home</Nav.Link>
                                    <Nav.Link href="#link">Link</Nav.Link>
                                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">
                                            Separated link
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Col>
            </Row>
            <Row className='mt-5'>
                <Col style={{ height: 500 }} lg={6} sm={12}>
                    <Card className='border-0 shadow'>
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body>
                            <h1 className="mt-5" style={{ fontSize: 64 }}>The Ultimate<br />
                                Portfolio<br />
                                Website<br /> Builder</h1>
                            <p>Trusted by beginners, marketers & professionals; Built with usability and performance in mind.
                            </p>
                            <input className="btn btn-outline-dark" type="button" value="START DESIGNING ->" />
                        </Card.Body>
                    </Card>
                    {/* <div className="card shadow-lg">
            <div className="card-body">
              <h1 className="mt-5" style={{fontSize: 64}}>The Ultimate<br />
                Portfolio<br />
                Website<br /> Builder</h1>
              <p>Trusted by beginners, marketers & professionals; Built with usability and performance in mind.
              </p>
              <input className="btn btn-outline-dark" type="button" value="START DESIGNING ->" />
            </div>
          </div> */}
                </Col>
                <Col style={{ height: 500 }} lg={6} sm={12}>
                    <img className='img-fluid' src="https://elementor.com/cdn-cgi/image/f=auto,w=600,h=530/wp-content/uploads/2020/04/Homepage_Theme-Builder-1024x905-1.png" />
                </Col>
            </Row>
            <Row className='mt-5'>
                <Col style={{ height: 400 }} lg={3} sm={12}>
                    <Card className='border-0 shadow'>
                        <Card.Img variant="top" src="https://avada.website/ecommerce/wp-content/uploads/sites/188/2024/03/product-15-400x256.jpg" />
                        <Card.Body>
                            <h5 className="mt-2">ZenithPro UltraBook</h5>
                            <p>$480 – $860
                            </p>
                            <hr className='mt-3' />
                            <h5 className="mt-2">Specification</h5>
                            <select className='form-control'>
                                <option>Choose an option</option>
                            </select>
                            <Button className='btn btn-primary mt-3' style={{ width: "100%" }}><FaShoppingBag style={{ marginRight: 10 }} />
                                ADD TO CART</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col style={{ height: 400 }} lg={3} sm={12}>
                    <Card className='border-0 shadow'>
                        <Card.Img variant="top" src="https://avada.website/ecommerce/wp-content/uploads/sites/188/2024/03/product-11-400x256.jpg" />
                        <Card.Body>
                            <h5 className="mt-2">ZenithPro UltraBook</h5>
                            <p>$480 – $860
                            </p>
                            <hr className='mt-3' />
                            <h5 className="mt-2">Specification</h5>
                            <select className='form-control'>
                                <option>Choose an option</option>
                            </select>
                            <Button className='btn btn-primary mt-3' style={{ width: "100%" }}><FaShoppingBag style={{ marginRight: 10 }} />
                                ADD TO CART</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col style={{ height: 400 }} lg={3} sm={12}>
                    <Card className='border-0 shadow'>
                        <Card.Img variant="top" src="https://avada.website/ecommerce/wp-content/uploads/sites/188/2024/03/product-18-400x256.jpg" />
                        <Card.Body>
                            <h5 className="mt-2">ZenithPro UltraBook</h5>
                            <p>$480 – $860
                            </p>
                            <hr className='mt-3' />
                            <h5 className="mt-2">Specification</h5>
                            <select className='form-control'>
                                <option>Choose an option</option>
                            </select>
                            <Button className='btn btn-primary mt-3' style={{ width: "100%" }}><FaShoppingBag style={{ marginRight: 10 }} />
                                ADD TO CART</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col style={{ height: 400 }} lg={3} sm={12}>
                    <Card className='border-0 shadow'>
                        <Card.Img variant="top" src="https://avada.website/ecommerce/wp-content/uploads/sites/188/2024/03/product-21-400x256.jpg" />
                        <Card.Body>
                            <h5 className="mt-2">ZenithPro UltraBook</h5>
                            <p>$480 – $860
                            </p>
                            <hr className='mt-3' />
                            <h5 className="mt-2">Specification</h5>
                            <select className='form-control'>
                                <option>Choose an option</option>
                            </select>
                            <Button className='btn btn-primary mt-3' style={{ width: "100%" }}><FaShoppingBag style={{ marginRight: 10 }} />
                                ADD TO CART</Button>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </Container>
    );
}

export default Home;