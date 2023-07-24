import React from 'react'
// import {Link,useNavigate} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

// import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
    return (
        <Container>
            <Nav variant="pills" className="me-auto">
                <Nav.Link href="/" >Home</Nav.Link>
                <Nav.Link href="profile" >Profile</Nav.Link>

            </Nav>

        </Container>

    );
}

export default Navigation;
// export default function Navbar() {
//     const navigate = useNavigate()
//     // const logoutFunc = ()=>{
//     //     props.handleLogout()
//     //     navigate("/login")
//     //   }
//       return (
//         <div>
//             <Link to ="/">Home</Link>
//             <Link to ="/Profile">Profile</Link>

//         </div>
//     )
// }