import { Box } from "@chakra-ui/layout";
import { Button, Input, Textarea } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import ControlForm from "../../../molecules/form/ControlForm";

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
    defaultValues: { name: "", email: "", subject: "", message: "" },
    mode: "all",
    criteriaMode: "all",
  });

  return (
    <Box as="section" w={{ base: "90%", md: "80%" }} m="auto">
      <ControlForm
        isInvalid={errors.name ? true : false}
        message={errors.name && errors.name.message}
      >
        <Input
          placeholder="お名前(必須)"
          {...register("name", {
            required: "必須項目です。",
          })}
          mt={2}
        />
      </ControlForm>

      <ControlForm
        isInvalid={errors.email ? true : false}
        message={errors.email && errors.email.message}
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
      </ControlForm>

      <ControlForm
        isInvalid={errors.subject ? true : false}
        message={errors.subject && errors.subject.message}
      >
        <Input
          mt={2}
          placeholder="件名(必須)"
          {...register("subject", {
            required: "必須項目です。",
          })}
        />
      </ControlForm>

      <ControlForm
        isInvalid={errors.message ? true : false}
        message={errors.message && errors.message.message}
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
      </ControlForm>

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
