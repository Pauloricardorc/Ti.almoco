import { StatusBar } from "expo-status-bar";
import { Image, Text } from "react-native";
import Header from "../../Layouts/Header";
import {
  Avatar,
  Container,
  ContainerAvatar,
  ContainerDescription,
  Date,
  HeaderAvatar,
  Price,
  StatusBarBackground,
  Title,
  TitleDescription,
} from "./styles";

export default function Details() {
  return (
    <StatusBarBackground>
      <StatusBar style="light" backgroundColor="#141316" />
      <Header title="Detalhes do almoço   " />
      <Image source={require("../../Images/background.png")} />
      <Container>
        <Title>Detalhes</Title>
        <HeaderAvatar>
          <ContainerAvatar>
            <Avatar>
              <Image source={require("../../Images/user1.png")} />
              <Text>Carol</Text>
            </Avatar>
          </ContainerAvatar>
          <ContainerAvatar>
            <Avatar>
              <Image source={require("../../Images/user2.png")} />
              <Text>Carol</Text>
            </Avatar>
          </ContainerAvatar>
        </HeaderAvatar>
        <ContainerDescription>
          <Image
            style={{ width: 68, height: 68 }}
            source={require("../../Images/foodLarge.png")}
          />
          <TitleDescription>Marmitex</TitleDescription>
          <Date>21 - Maio - 2023</Date>
          <Price>R$ 12,25</Price>
        </ContainerDescription>
      </Container>
    </StatusBarBackground>
  );
}
