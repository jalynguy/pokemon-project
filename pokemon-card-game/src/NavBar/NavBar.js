import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './NavBar.css';

export const NavBar = () => {
    return (
        <> 
            <Navbar expand="lg" className="bg-body-tertiary justify-content-between">
                <Navbar.Brand> Pokepedia Lite </Navbar.Brand>
                <Form inline>
                    <Row>
                    <Col xs="auto">
                        <Form.Control
                        type="text"
                        placeholder="Search"
                        className=" mr-sm-2"
                        />
                    </Col>
                    <Col xs="auto">
                        <Button type="submit">Submit</Button>
                    </Col>
                    </Row>
                </Form>
            </Navbar>
        </>
    )
}