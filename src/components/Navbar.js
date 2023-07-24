import React from 'react'
// import {Link,useNavigate} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';


function Navigation() {
    return (
        <Container>
            <Nav variant="pills" className="me-auto">
                <Nav.Link href="/" >Home!</Nav.Link>
                <Nav.Link href="profile" >Profile!</Nav.Link>

            </Nav>

        </Container>

    );
}

export default Navigation;
