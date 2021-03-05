import React from "react";
import Button from "react-bootstrap/Button";
import { Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.scss";

const Home = ({ setUserName, setMeetingId }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>회의 정보 입력</Card.Title>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>참여자 이름</Form.Label>
            <Form.Control
              type="input"
              placeholder="이름을 입력하세요."
              onChange={(e) => setUserName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>회의 아이디</Form.Label>
            <Form.Control
              type="input"
              placeholder="회의 아이디를 입력하세요."
              onChange={(e) => setMeetingId(e.target.value)}
            />
          </Form.Group>
        </Form>
        <Link to="/Meeting">
          <Button variant="primary" style={{ width: "100%" }}>
            회의 입장
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Home;
