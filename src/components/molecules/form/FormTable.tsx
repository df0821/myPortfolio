import { Box } from "@chakra-ui/layout";
import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";

type ValueType = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const FormTable = () => {
  const {
    register,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm<ValueType>({
    mode: "all",
    criteriaMode: "all",
  });

  return (
    <Box as="section" w={{ base: "90%", md: "80%" }} m="auto">
      <FormControl isInvalid={errors.name ? true : false} borderColor="#899689">
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

      <FormControl
        isInvalid={errors.email ? true : false}
        borderColor="#899689"
      >
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

      <FormControl
        isInvalid={errors.subject ? true : false}
        borderColor="#899689"
      >
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

      <FormControl
        isInvalid={errors.message ? true : false}
        borderColor="#899689"
      >
        <Textarea
          mt={2}
          rows={6}
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
          bg="#D3E4CD"
          border="solid 1px #899689"
          type="submit"
          disabled={!isDirty || !isValid}
          isLoading={isSubmitting}
        >
          送信
        </Button>
      </Box>
    </Box>
  );
};

export default FormTable;
