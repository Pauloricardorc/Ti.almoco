import { TextInput } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  gap: 12px;
  margin-top: 12px;
`
export const Label = styled.Text`
  font-size: 14px;
`

export const InputCustom = styled(TextInput)`
  color: #5A5A5A;
  border: 1px solid #3355;
  border-radius: 4px;
  font-size: 16px;
  height: 48px;
  padding: 4px 8px;
`