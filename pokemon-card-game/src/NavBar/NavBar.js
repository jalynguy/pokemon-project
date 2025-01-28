// Bootstrap Imports
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

// CSS imports
import './NavBar.css';

export const NavBar = ({handleViewDeck, handleViewList}) => {
    return (
        <> 
            <Navbar expand="lg" className="bg-body-tertiary justify-content-between">
                <Container>
                    <Navbar.Brand onClick={handleViewList} href="#"> Pokepedia Lite </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse>
                        <Nav>
                            <Button onClick={handleViewDeck}> Deck </Button>
                        </Nav>
                    </Navbar.Collapse>
                    <Form inline='true'>
                        <Row>
                        <Col xs="auto">
                            <Form.Control
                            id='Search'
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
                </Container>
            </Navbar>
        </>
    )
}