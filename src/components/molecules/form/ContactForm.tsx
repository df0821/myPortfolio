import { Box, Divider, Heading } from "@chakra-ui/layout";
import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

import useMessage from "../../../hooks/useMessage";

type ValueType = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactForm = () => {
  const form = useRef(null!);
  const { showMessage } = useMessage();

  const {
    reset,
    register,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm<ValueType>({
    mode: "all",
    criteriaMode: "all",
  });

  const SendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userID = process.env.REACT_APP_PUBLIC_KEY;
    const serviceID = process.env.REACT_APP_SERVICE_ID;
    const templateID = process.env.REACT_APP_TEMPLATE_ID;

    emailjs.sendForm(serviceID!, templateID!, form.current, userID!).then(
      (res) => {
        if (res.status === 200) {
          showMessage({ title: "送信に成功しました", status: "success" });
          reset();
        } else {
          showMessage({ title: "送信に失敗しました", status: "error" });
        }
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <>
      <Box>
        <Heading as="h1" textAlign="center">
          Contact Form
        </Heading>
        <Divider />
      </Box>

      <form ref={form} onSubmit={SendEmail}>
        <Box w="90%" m="auto">
          <FormControl isInvalid={errors.name ? true : false}>
            <Input
              placeholder="お名前(必須)"
              {...register("name", {
                required: "必須項目です。",
              })}
              mt={2}
            />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.email ? true : false}>
            <Input
              mt={2}
              type="email"
              placeholder="メールアドレス(必須)"
              {...register("email", {
                required: "必須項目です。",
                pattern: {
                  value:
                    /^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
                  message: "メールアドレス形式で入力してください。",
                },
              })}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.subject ? true : false}>
            <Input
              mt={2}
              placeholder="件名(必須)"
              {...register("subject", {
                required: "必須項目です。",
              })}
            />
            <FormErrorMessage>
              {errors.subject && errors.subject.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.message ? true : false}>
            <Textarea
              mt={2}
              placeholder="お問い合わせ内容(必須)"
              {...register("message", {
                required: "必須項目です。",
                minLength: {
                  value: 10,
                  message: "10文字以上入力してください。",
                },
              })}
            />
            <FormErrorMessage>
              {errors.message && errors.message.message}
            </FormErrorMessage>
          </FormControl>

          <Box>
            <Button
              mt={2}
              colorScheme="teal"
              type="submit"
              disabled={!isDirty || !isValid}
              isLoading={isSubmitting}
            >
              送信
            </Button>
          </Box>
        </Box>
      </form>
    </>
  );
};

export default ContactForm;
