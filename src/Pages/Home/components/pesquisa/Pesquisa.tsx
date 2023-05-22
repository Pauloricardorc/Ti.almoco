import { TextInputProps } from "react-native";
import { TextInputCustom } from "./styles";

export type CustomInputProps = TextInputProps;

export default function Pesquisa(props: TextInputProps) {
  return (
    <TextInputCustom
      placeholderTextColor={"#7D7D7D"}
      {...props}
    ></TextInputCustom>
  );
}
