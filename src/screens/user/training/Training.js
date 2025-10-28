import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const Training = () => {

    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(" ");






    return (
        <Container style={{ height: "100vh" }}>
            <Row>
                <Col style={{ height: "100vh" }} className="d-flex justify-content-center align-items-center" lg={12} sm={12}>
                    <div style={{ width: "50%" }}>
                        <h1>STUDENT LOGIN FORM</h1>
                        
                        <p>description from chatgptdescription from chatgptdescription from chatgptdescription from chatgptdescription from chatgptdescription from chatgpt</p>
                        <div className="form-group mt-3">
                            <label>ENTER YOUR FULLNAME</label>
                            <input value={fullname} onChange={(event) => {

                                setFullname(event.target.value);
                            }} className="form-control" type="text" />
                        </div>
                        <div className="form-group mt-3">
                            <label>ENTER YOUR EMAIL</label>
                            <input value={email} onChange={(event) => {
                                setEmail(event.target.value)
                            }} className="form-control" type="email" />
                        </div>
                        <div className="form-group mt-3">
                            <label>ENTER YOUR PASSWORD</label>
                            <input value={password} onChange={(event) => {
                                setPassword(event.target.value)
                            }} className="form-control" type="password" />
                        </div>
                        <div className="form-group mt-5">
                            <Button onClick={()=>{
                                console.log(fullname);
                                console.log(email);
                                console.log(password);
                                // alert(fullname);
                                // alert(email);
                                // alert(password);
                            }} style={{ width: "100%" }} variant="outline-success">LOGIN</Button>
                        </div>
                    </div>
                </Col>


                {/* <div className="bg-primary" style={{height:300}}></div>
        <div className="bg-danger" style={{position:"fixed", height:100,width:100,borderRadius:"100%",bottom:10,right:"10%"}}></div>
        <div className="bg-primary" style={{height:300}}></div>
        <div className="bg-primary" style={{height:300}}></div>
        <div className="bg-primary" style={{height:300}}></div> */}

                {/* <div style={{height:"100vh"}} className="d-flex justify-content-center align-items-center">
            <h1>HELLO WORLD</h1>
            <p>THIS IS PARAGRAPH</p>
        </div>
        <Row>
            <Col className="d-flex" lg={6} sm={12}>
                <h1>HELLO WORLD</h1>
                <p>THIS IS PARAGRAPH</p>
            </Col>
            <Col className="d-flex" lg={6} sm={12}>
                <h1>HELLO WORLD</h1>
                <p>THIS IS PARAGRAPH</p>
            </Col>

        </Row>
        <Row className="p-5" style={{ height: 400, backgroundColor: "red" }}>
            <Col lg={6} sm={12}>
                <h1>HEADING</h1>
            </Col>
            <Col lg={6} sm={12}>
                <p style={{height:400,overflow:"scroll"}}>this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.</p>
            </Col>

            <p>this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.</p>
        </Row> */}
            </Row>
        </Container>
    );
}

export default Training;