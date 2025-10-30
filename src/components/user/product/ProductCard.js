import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { FaShoppingBag } from "react-icons/fa";

const ProductCard = ({ productTitle, productImage, productPrice, specification }) => {
    return (
        <Col className="mt-5" style={{ height: 400 }} lg={3} sm={12}>
            <Card className='border-0 shadow' style={{height:400}}>
                <Card.Img variant="top" src={productImage} />
                <Card.Body>
                    <h5 className="mt-2">{productTitle}</h5>
                    <p>{productPrice}
                    </p>
                    <hr className='mt-3' />
                    {
                        specification == true ?
                            <>
                                <h5 className="mt-2">Specification</h5>
                                <select className='form-control'>
                                    <option>Choose an option</option>
                                </select>
                            </>
                            :
                            null
                    }

                    <Button className='btn btn-primary mt-3' style={{ width: "100%" }}><FaShoppingBag style={{ marginRight: 10 }} />
                        ADD TO CART</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default ProductCard;