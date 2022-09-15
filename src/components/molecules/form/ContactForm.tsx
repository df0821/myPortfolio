import { Box, Divider, Heading } from "@chakra-ui/layout";
import { Button, Input, Textarea } from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

const ContactForm = () => {
  const userID = process.env.REACT_APP_PUBLIC_KEY;
  const serviceID = process.env.REACT_APP_SERVICE_ID;
  const templateID = process.env.REACT_APP_TEMPLATE_ID;

  const form = useRef(null!);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm(serviceID!, templateID!, form.current, userID!).then(
      (res) => {
        console.log(res.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <>
      <Box>
        <Heading as="h1">Contact Form</Heading>
        <Divider />
      </Box>

      <form ref={form} onSubmit={sendEmail}>
        <Box>
          <Box>
            <Input name="name" placeholder="お名前(必須)" />
          </Box>
          <Box>
            <Input name="email" placeholder="メールアドレス(必須)" />
          </Box>
          <Box>
            <Input name="subject" placeholder="件名(必須)" />
          </Box>
          <Box>
            <Textarea name="message" placeholder="お問い合わせ内容(必須)" />
          </Box>
          <Box>
            <Button colorScheme="teal" type="submit">
              送信
            </Button>
          </Box>
        </Box>
      </form>
    </>
  );
};

export default ContactForm;
