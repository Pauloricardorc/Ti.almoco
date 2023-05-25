import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { StatusBar } from "expo-status-bar";
import { PencilSimpleLine, Plus, Trash } from "phosphor-react-native";
import { useEffect, useState } from "react";
import { Image, TouchableOpacity } from "react-native";
import { FormatNewDate } from "../../hooks/formatDate";
import { FormatPrice } from "../../hooks/formatPrice";
import { Register } from "../Api/Register/axios";
import Pesquisa from "./components/pesquisa/Pesquisa";
import {
  CardActions,
  CardGastos,
  CardItem,
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
  StatusBarBackground,
  SubTitleCardGastos,
  SubTitleItem,
  TextContainer,
  Title,
  TitleCardGastos,
  TitleItem,
} from "./styles";

type IRegister = {
  id: string;
  comprador: string;
  convidado: string;
  data: string;
  descricao: string;
  preco: number;
};

export default function Home({ navigation }: any) {
  const [pesquisa, setPesquisa] = useState("");
  const [actionActive, setActionActive] = useState(false);
  const [ITEMS, setItems] = useState<IRegister[]>([]);
  const newDate = new Date();

  useEffect(() => {
    async function getAllRegister() {
      await Register.get("listagem").then((e) => setItems(e.data));
    }
    getAllRegister();
  }, []);

  return (
    <StatusBarBackground>
      <StatusBar style="light" translucent />
      <Title style={{ textTransform: "capitalize" }}>
        {format(new Date(newDate), "dd, MMM, yyyy", { locale: ptBR })}
      </Title>
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
        <Pesquisa
          placeholder="Pesquisar por registro"
          onChangeText={(value) => setPesquisa(value)}
        />
        <SearchIcon size={24} color="#7D7D7D" />
      </ContainerPesquisa>
      <ContainerItems>
        <Header>
          <HeaderTitle>Lista de almoço</HeaderTitle>
          <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
            <Plus size={24} color="#212A3E" weight="bold" />
          </TouchableOpacity>
        </Header>
        <Items>
          {ITEMS
            ? ITEMS.filter((desc) => desc.descricao.includes(pesquisa)).map(
                (item: IRegister) => (
                  <CardItem
                    key={item.id}
                    onPress={() =>
                      navigation.navigate("Detail", {
                        id: item.id,
                        descricao: item.descricao,
                        comprador: item.comprador,
                        convidado: item.convidado,
                        preco: item.preco,
                        data: item.data,
                      })
                    }
                    onLongPress={() => setActionActive(!actionActive)}
                  >
                    <GroupLeftItem>
                      <Image source={require("../../Images/foodIcon.png")} />
                      <ContainerItem>
                        <TitleItem>{item.descricao}</TitleItem>
                        <SubTitleItem>
                          {item.data ?? FormatNewDate(item.data)}
                        </SubTitleItem>
                      </ContainerItem>
                    </GroupLeftItem>
                    <PriceItem>{FormatPrice(item.preco)}</PriceItem>
                    <CardActions
                      style={{ display: actionActive ? "flex" : "none" }}
                    >
                      <Delete>
                        <Trash color="#F1F6F9" />
                      </Delete>
                      <Edit>
                        <PencilSimpleLine color="#F1F6F9" />
                      </Edit>
                    </CardActions>
                  </CardItem>
                )
              )
            : ""}
        </Items>
      </ContainerItems>
    </StatusBarBackground>
  );
}
