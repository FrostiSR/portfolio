import { useRef, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./Contact.css";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const ref = useRef();
  const form = useRef();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [pending, setPending] = useState(false);

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

  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      setPending(true);
      await axios.post(
        "https://portfolio-server-nine-ruddy.vercel.app/newContact",
        {
          name,
          email,
          message,
        }
      );
      emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC,
        }
      );
      Swal.fire({
        title: "Thank you!",
        icon: "success",
      });
      // .then((result) => {
      //   Swal.fire({
      //     title: "Thank you!",
      //     icon: "success",
      //   });
      // });
    } catch (error) {
      setPending(false);
      Swal.fire({
        title: "You have already submitted!",
        icon: "error",
      });
    }
    setPending(false);
    e.target.reset();
  };

  const handleClick = () => {
    ref.current.value = "";
  };
  return (
    <>
      <Form ref={form} className="text-center" onSubmit={handleUpload}>
        <Row className="mb-3 gap-2">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Control
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              onKeyDown={checkSpecialChar}
              className="bg-dark text-white border-0"
              placeholder="Name"
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Control
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="bg-dark text-white border-0"
              placeholder="Email"
              pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}"
              required
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            name="message"
            placeholder="Message"
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={checkSpecialCharXSS}
            as="textarea"
            className="bg-dark text-white border-0"
            rows={3}
            required
          />
        </Form.Group>
        {/* <textarea name="message" /> */}

        <Button
          id="btn-fill"
          className="border-0"
          type="submit"
          value="Send"
          onClick={handleClick}
          disabled={pending ? true : false}
        >
          {pending ? "Submitting" : " Send Message"}
        </Button>
      </Form>
    </>
  );
}
