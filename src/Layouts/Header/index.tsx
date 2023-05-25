import { CaretLeft, DotsThreeVertical } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import { Container, Title } from "./styles";

type IPropsHeader = {
  title: string;
  navigation: any;
};

export default function Header({ navigation, title }: IPropsHeader) {
  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <CaretLeft size={24} color="#F1F6F9" />
      </TouchableOpacity>
      <Title>{title}</Title>
      <DotsThreeVertical size={24} color="#F1F6F9" />
    </Container>
  );
}
