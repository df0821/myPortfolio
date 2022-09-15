import { Box, Divider, Flex, Heading } from "@chakra-ui/layout";
import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { init } from "emailjs-com";
import React from "react";
import { Resolver, useForm } from "react-hook-form";

import emailjs from "@emailjs/browser";

type formValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const resolver: Resolver<formValues> = async (values) => {
  return {
    values: !values.name ? {} : values,
    errors: !values.name
      ? {
          name: {
            type: "required",
            message: "必須項目です",
          },
        }
      : {},
  };
};

const ContactForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<formValues>({
    resolver: resolver,
  });

  const sendEmail = (e: any) => {
    const serviceID = process.env.REACT_APP_SERVICE_ID;
    const templateID = process.env.REACT_APP_TEMPLATE_ID;
    const userID = process.env.REACT_APP_PUBLIC_KEY;

    if (userID && serviceID && templateID) {
      init(userID);
    }

    emailjs.sendForm(serviceID!, templateID!, e.target, userID!).then(
      (res) => {
        console.log("SUCCESS", res.text);
      },
      (error) => {
        console.log("FAILED", error.text);
      }
    );
    e.target.rest();
  };

  return (
    <form id="contact-form" onSubmit={handleSubmit(sendEmail)}>
      <Flex>
        <Box>
          <Heading as="h1">Contact Form</Heading>
          <Divider />
          <FormControl isInvalid={Boolean(errors.name)}>
            <Input
              placeholder="お名前(必須)"
              {...register("name", {
                required: "必須項目です",
              })}
            />
            <FormErrorMessage>
              {errors?.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl>
            <Input
              id="email"
              placeholder="メールアドレス(必須)"
              {...register("email", {
                required: "必須項目です",
              })}
            />
          </FormControl>
          <FormControl>
            <Input
              id="subject"
              placeholder="件名(必須)"
              {...register("subject", {
                required: "必須項目です",
              })}
            />
          </FormControl>
          <FormControl>
            <Textarea
              id="message"
              placeholder="お問い合わせ内容(必須)"
              {...register("message", {
                required: "必須項目です",
              })}
            />
          </FormControl>
          <Button
            colorScheme="teal"
            isLoading={isSubmitting}
            type="submit"
            ml={4}
          >
            送信
          </Button>
        </Box>
      </Flex>
    </form>
  );
};

export default ContactForm;
