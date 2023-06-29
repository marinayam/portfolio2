import React, { useRef, useState } from "react";
import {Container, Row, Col} from 'react-bootstrap';
import emailjs from "@emailjs/browser";
import './contact.css';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Marina",
          from_email: form.email,
          to_email: "marina5197216@gmail.com",
          message: form.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("お問い合わせありがとうございます。");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("エラーが発生いたしました。再度お問い合わせください");
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <Row>
          <Col lg>
            <div className="contact__container">
              <div className="contact__title">
                <p>お問い合わせ</p>
                <h3>Contact</h3>
                <span className="red">※全て必須項目となります</span>
              </div>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className='contact__form'
              >
                <label className='contact__form-item'>
                  <span className='contact__form-title'>Name</span>
                  <input
                    type='text'
                    name='name'
                    value={form.name}
                    onChange={handleChange}
                    placeholder="山田花子"
                    className='contact__form-inputBox'
                  />
                </label>
                <label className='contact__form-item'>
                  <span className='contact__form-title'>Your email</span>
                  <input
                    type='email'
                    name='email'
                    value={form.email}
                    onChange={handleChange}
                    placeholder="sample@sample.com"
                    className='contact__form-inputBox'
                  />
                </label>
                <label className='contact__form-item'>
                  <span className='contact__form-title'>Your Message</span>
                  <textarea
                    rows={7}
                    name='message'
                    value={form.message}
                    onChange={handleChange}
                    placeholder='お問い合わせ内容'
                    className='contact__form-inputBox'
                  />
                </label>

                <button
                  type='submit'
                >
                  {loading ? "Sending..." : "Send"}
                </button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;