import React from "react";
import { TextInputProps } from "react-native";
import { Container, InputCustom, Label } from "./styles";

interface PropsInputCustom extends TextInputProps {
  text?: string;
  data?: boolean;
}

export function Input({ text, data = false, ...props }: PropsInputCustom) {
  return (
    <Container>
      <Label>{text}</Label>
      <InputCustom {...props} />
    </Container>
  );
}
