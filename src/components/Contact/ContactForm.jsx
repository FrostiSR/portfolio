import { useRef, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./Contact.css";
import Swal from "sweetalert2";

export default function ContactForm() {
  const ref = useRef();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const checkSpecialChar = (e) => {
    if (/[^\w\s]/gi.test(e.key)) {
      e.preventDefault();
    }
  };

  const checkSpecialCharXSS = (e) => {
    if (/[^.,@a-zA-Z0-9 ]/g.test(e.key)) {
      e.preventDefault();
    }
  };

  const handleUpload = (e) => {
    e.preventDefault();
    axios
      .post("https://portfolio-server-nine-ruddy.vercel.app/newContact", {
        name,
        email,
        message,
      })
      .then((result) => {
        Swal.fire({
          title: "Thank you!",
          icon: "success",
        });
      })
      .catch((err) => {
        Swal.fire({
          title: "You have already submitted!",
          icon: "error",
        });
      });
    e.target.reset();
  };

  const handleClick = () => {
    ref.current.value = "";
  };
  return (
    <>
      <Form className="text-center" onSubmit={handleUpload}>
        <Row className="mb-3 gap-2">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Control
              type="text"
              name="name"
              ref={ref}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={checkSpecialChar}
              className="bg-dark text-white border-0"
              placeholder="Name"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Control
              type="email"
              name="email"
              ref={ref}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-dark text-white border-0"
              placeholder="Email"
              pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}"
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            placeholder="Your Message..."
            name="description"
            ref={ref}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={checkSpecialCharXSS}
            as="textarea"
            className="bg-dark text-white border-0"
            rows={3}
          />
        </Form.Group>

        <Button
          id="btn-fill"
          className="border-0"
          type="submit"
          onClick={handleClick}
        >
          Send Message
        </Button>
      </Form>
    </>
  );
}
