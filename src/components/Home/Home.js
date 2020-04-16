import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Form from "../Form/Form";

export default function Home() {
  const formFields = {
    required: {
      name: true,
      email: true,
      gender: false,
      age: true,
    },
    min: {
      age: 15,
    },
    max: {
      age: 100,
    },
  };

  let users = [];
  useEffect(() => {
    users.push(...JSON.parse(window.localStorage.getItem("users")));
  });

  return (
    <Container style={{ textAlign: "center" }}>
      <Row>
        <Col>
          <Form options={formFields} users={users} />
        </Col>
      </Row>
    </Container>
  );
}
