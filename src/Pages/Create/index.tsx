import React from "react";
import { Controller, useForm } from "react-hook-form";
import Header from "../../Layouts/Header";
import { Input } from "../../components/TextField";

import {
  DateTimePickerAndroid,
  default as RNDateTimePicker,
} from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Platform, Text, View } from "react-native";

import { DateAndroid, DateLabel } from "./styles";

import { FormatNewDate } from "../../hooks/formatDate";
import { Register } from "../Api/Register/axios";
import {
  ButtonCustom,
  Container,
  StatusBarBackground,
  TextCustom,
  Title,
} from "./styles";

interface IRegister {
  descricao: string;
  comprador: string;
  convidado: string;
  preco: number;
  data: string;
}

export function CreateNewRegister({ navigation }: any) {
  const { control, handleSubmit } = useForm<IRegister>();
  const [date, setDate] = useState<any>(new Date());

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode: any) => {
    if (Platform.OS === "android") {
      DateTimePickerAndroid.open({
        value: date,
        onChange,
        mode: currentMode,
      });
    }
  };

  const showDatepicker = () => {
    showMode("date");
  };

  async function handleForm(data: IRegister) {
    const { descricao, comprador, convidado, preco } = data;
    console.log({
      descricao,
      comprador: "Paulo",
      convidado,
      preco,
      data: new Date(date).toISOString(),
    });
    await Register.post("criar", {
      descricao,
      comprador: "Paulo",
      convidado,
      preco: Number(preco),
      data: new Date(date).toISOString(),
    }).then(() => alert("Adicionado"));
  }

  return (
    <StatusBarBackground>
      <Header navigation={navigation} title="Criar um Registro" />
      <Container>
        <Title>Detalhes</Title>
        <Controller
          control={control}
          name="descricao"
          render={({ field: { onChange } }) => (
            <Input text="Titulo" placeholder="Titulo" onChangeText={onChange} />
          )}
        />
        <Controller
          control={control}
          name="convidado"
          render={({ field: { onChange } }) => (
            <Input
              text="Nome do convidado"
              placeholder="Convidado"
              onChangeText={onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="preco"
          render={({ field: { onChange } }) => (
            <Input
              text="Preço"
              placeholder="Preço"
              keyboardType="numeric"
              onChangeText={onChange}
            />
          )}
        />
        <View style={{ gap: 12, marginTop: 24 }}>
          <Text style={{ fontSize: 14 }}>Data</Text>
          {Platform.OS === "android" ? (
            <DateAndroid onPress={showDatepicker}>
              <DateLabel>
                {date ? FormatNewDate(date) : "Selecione a data"}
              </DateLabel>
            </DateAndroid>
          ) : (
            <RNDateTimePicker
              display="calendar"
              locale="pt-BR"
              value={new Date(date)}
              onChange={(event, selectedDate) => setDate(selectedDate)}
              style={{ flex: 1 }}
            />
          )}
        </View>
        <ButtonCustom onPress={handleSubmit(handleForm)}>
          <TextCustom>Salvar</TextCustom>
        </ButtonCustom>
      </Container>
    </StatusBarBackground>
  );
}
