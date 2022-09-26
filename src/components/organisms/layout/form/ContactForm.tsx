import { Box, VStack } from "@chakra-ui/layout";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

import useMessage from "../../../../hooks/useMessage";
import FormTable from "./FormTable";
import PageTItle from "../../../atoms/title/PageTItle";

type ValueType = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactForm = () => {
  //defined hooks
  const form = useRef<HTMLFormElement>(null!);
  const { showMessage } = useMessage();
  const { handleSubmit } = useForm<ValueType>({
    defaultValues: { name: "", email: "", subject: "", message: "" },
    mode: "all",
    criteriaMode: "all",
  });

  //send Email
  const SendEmail = (data: ValueType) => {
    const userID = process.env.REACT_APP_PUBLIC_KEY;
    const serviceID = process.env.REACT_APP_SERVICE_ID;
    const templateID = process.env.REACT_APP_TEMPLATE_ID;

    emailjs
      .sendForm(serviceID!, templateID!, form.current, userID!)
      .then((res) => {
        if (res.status === 200) {
          showMessage({ title: "送信に成功しました", status: "success" });
          form.current.reset();
        } else {
          showMessage({ title: "送信に失敗しました", status: "error" });
        }
      });
  };

  return (
    <>
      <VStack>
        <PageTItle title="Contact Form" />
      </VStack>

      <Box as="section">
        <form ref={form} onSubmit={handleSubmit(SendEmail)}>
          <FormTable />
        </form>
      </Box>
    </>
  );
};

export default ContactForm;
