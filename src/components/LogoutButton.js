import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <>
    <Container className="fixed-top mt-2">
    <Button    
    variant="outline-light" 
    onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </Button>
   </Container>
    </>
  );
};

export default LogoutButton;
