import { CaretLeft, DotsThreeVertical } from "phosphor-react-native";
import { Container, Title } from "./styles";

export default function Header(props: any) {
  return (
    <Container>
      <CaretLeft size={24} color="#F1F6F9" />
      <Title>{props.title}</Title>
      <DotsThreeVertical size={24} color="#F1F6F9" />
    </Container>
  );
}
