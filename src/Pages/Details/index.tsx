import { StatusBar } from "expo-status-bar";
import { Image, Text } from "react-native";
import Header from "../../Layouts/Header";
import { FormatNewDate } from "../../hooks/formatDate";
import { FormatPrice } from "../../hooks/formatPrice";
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

export default function Details({ route, navigation }: any) {
  const { id, descricao, comprador, convidado, preco, data } = route.params;

  return (
    <StatusBarBackground>
      <StatusBar style="light" translucent />
      <Header navigation={navigation} title="Detalhes do almoço" />
      <Image source={require("../../Images/background.png")} />
      <Container key={id}>
        <Title>Detalhes</Title>
        <HeaderAvatar>
          <ContainerAvatar>
            <Avatar>
              <Image source={require("../../Images/user1.png")} />
              <Text>{comprador}</Text>
            </Avatar>
          </ContainerAvatar>
          <ContainerAvatar>
            <Avatar>
              <Image source={require("../../Images/user2.png")} />
              <Text>{convidado}</Text>
            </Avatar>
          </ContainerAvatar>
        </HeaderAvatar>
        <ContainerDescription>
          <Image
            style={{ width: 68, height: 68 }}
            source={require("../../Images/foodLarge.png")}
          />
          <TitleDescription>{descricao}</TitleDescription>
          <Date>{data}</Date>
          <Price>{FormatPrice(preco)}</Price>
        </ContainerDescription>
      </Container>
    </StatusBarBackground>
  );
}
