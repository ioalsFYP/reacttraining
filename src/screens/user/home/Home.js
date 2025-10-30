import { React } from "react";
import { Button, Card, Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import MyNavbar from "../../../components/user/landing/MyNavbar/MyNavbar";
import ProductCard from "../../../components/user/product/ProductCard";

const Home = () => {
    return (
        <Container>
            <Row>
                <Col lg={12} sm={12}>
                    <MyNavbar />
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
                <ProductCard productTitle={"ZenithPro UltraBook"} productImage={"https://avada.website/ecommerce/wp-content/uploads/sites/188/2024/03/product-15-400x256.jpg"} productPrice={"$480 – $860"} specification={true} />
                <ProductCard productTitle={"ZenithPro UltraBook"} productImage={"https://avada.website/ecommerce/wp-content/uploads/sites/188/2024/03/product-11-400x256.jpg"} productPrice={"$480 – $860"} specification={true} />

                {/* <Col style={{ height: 400 }} lg={3} sm={12}>
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
                </Col> */}

            </Row>
        </Container>
    );
}

export default Home;