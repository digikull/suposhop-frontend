import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

function Register({ handleClose, show }) {
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Registration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Mobile Number"
                required
              />

              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Full Name" />

              <Form.Label>Business Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Business Name" />

              <Form.Label>Business Address</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Business Address"
              />

              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter Passworrd" />

              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Passworrd" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default Register;
