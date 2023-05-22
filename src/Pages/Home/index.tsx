import { PencilSimpleLine, Plus, Trash } from "phosphor-react-native";
import { useState } from "react";
import { Image, TouchableOpacity } from "react-native";
import Pesquisa from "./components/pesquisa/Pesquisa";
import {
  CardActions,
  CardGastos,
  CardItem,
  Container,
  ContainerItem,
  ContainerItems,
  ContainerLine,
  ContainerPesquisa,
  Delete,
  DollarIcon,
  Edit,
  GroupLeftItem,
  Header,
  HeaderTitle,
  Items,
  Line1,
  Line2,
  Line3,
  PriceItem,
  SearchIcon,
  SubTitleCardGastos,
  SubTitleItem,
  TextContainer,
  Title,
  TitleCardGastos,
  TitleItem,
} from "./styles";

export default function Home({ navigation }: any) {
  const [actionActive, setActionActive] = useState(false);
  const ITEMS = [
    {
      id: 1,
      title: "Marmitex",
      subTitle: "21 - Maio - 2023",
      price: "12,25",
    },
    {
      id: 2,
      title: "Churrasco",
      subTitle: "22 - Maio - 2023",
      price: "24,00",
    },
    {
      id: 3,
      title: "Marmitex",
      subTitle: "23 - Maio - 2023",
      price: "8,00",
    },
    {
      id: 4,
      title: "Marmitex",
      subTitle: "23 - Maio - 2023",
      price: "8,00",
    },
    {
      id: 5,
      title: "Marmitex",
      subTitle: "23 - Maio - 2023",
      price: "8,00",
    },
    {
      id: 6,
      title: "Marmitex",
      subTitle: "23 - Maio - 2023",
      price: "8,00",
    },
    {
      id: 7,
      title: "Marmitex",
      subTitle: "23 - Maio - 2023",
      price: "8,00",
    },
    {
      id: 8,
      title: "Marmitex",
      subTitle: "23 - Maio - 2023",
      price: "8,00",
    },
  ];

  return (
    <Container>
      <Title>21, Maio, 2023</Title>
      <CardGastos>
        <DollarIcon size={42} color="#537188" />
        <TextContainer>
          <TitleCardGastos>Total gasto</TitleCardGastos>
          <SubTitleCardGastos>R$ 77,00</SubTitleCardGastos>
        </TextContainer>
        <ContainerLine>
          <Line1 source={require("../../Images/line1.png")} />
          <Line2 source={require("../../Images/line2.png")} />
          <Line3 source={require("../../Images/line3.png")} />
        </ContainerLine>
      </CardGastos>
      <ContainerPesquisa>
        <Pesquisa placeholder="Pesquisar por registro" />
        <SearchIcon size={24} color="#7D7D7D" />
      </ContainerPesquisa>
      <ContainerItems>
        <Header>
          <HeaderTitle>Lista de almoço</HeaderTitle>
          <TouchableOpacity>
            <Plus size={24} color="#212A3E" weight="bold" />
          </TouchableOpacity>
        </Header>
        <Items>
          {ITEMS.map((item) => (
            <CardItem
              key={item.id}
              onPress={() => navigation.navigate("Detail")}
              onLongPress={() => setActionActive(!actionActive)}
            >
              <GroupLeftItem>
                <Image source={require("../../Images/foodIcon.png")} />
                <ContainerItem>
                  <TitleItem>{item.title}</TitleItem>
                  <SubTitleItem>{item.subTitle}</SubTitleItem>
                </ContainerItem>
              </GroupLeftItem>
              <PriceItem>R$ {item.price}</PriceItem>
              <CardActions style={{ display: actionActive ? "flex" : "none" }}>
                <Delete>
                  <Trash color="#F1F6F9" />
                </Delete>
                <Edit>
                  <PencilSimpleLine color="#F1F6F9" />
                </Edit>
              </CardActions>
            </CardItem>
          ))}
        </Items>
      </ContainerItems>
    </Container>
  );
}
