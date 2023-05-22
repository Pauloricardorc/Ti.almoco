import { CurrencyCircleDollar, MagnifyingGlass } from "phosphor-react-native";

import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #141316;
  gap: 24px;
`
export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #F1F6F9;
  align-self: center;
  margin-top: 24px;
`

export const CardGastos = styled.View`
  width: 366px;
  height: 80px;
  background-color: #0CF79E;
  padding: 0 25px;
  border-radius: 28px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  overflow: hidden;
  position: relative;
  margin: 0 16px;
`

export const TextContainer = styled.View`
  align-items: center;
  justify-content: center;  
  gap: 12px;
`

export const DollarIcon = styled(CurrencyCircleDollar)`
  position: absolute;
  left: 24px;
`

export const TitleCardGastos = styled.Text`
  font-size: 14px;
  color: #423B43;
`
export const SubTitleCardGastos = styled.Text`
  font-size: 24px;
  color: #423B43;
  font-weight: 600;
`

export const ContainerLine = styled.View`
  flex-direction: row;
  position: absolute;
  right: 0px;
  top: 0px;
`
export const Line1 = styled.Image`
  flex-direction: row;
`
export const Line2 = styled.Image`
  flex-direction: row;
  position: absolute;
  right: 0px;
`
export const Line3 = styled.Image`
  flex-direction: row;
  position: absolute;
  right: 10px;
`

export const ContainerPesquisa = styled.View`
  position: relative;
  align-items: center;
  flex-direction: row;
  margin: 0 16px;

`
export const SearchIcon = styled(MagnifyingGlass)`
  position: absolute;
  right: 24px;
`

export const ContainerItems = styled.View`
  flex: 1;
  background-color: #F1F6F9;
  gap: 12px;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  padding: 12px 0;
`

export const Header = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 12px 24px;
`

export const HeaderTitle = styled.Text`
  color: #212A3E;
  font-size: 18px;
  font-weight: 600;
`

export const Items = styled.ScrollView`
  flex: 1;
  gap: 8px;
`
export const CardItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 12px;
  height: 68px;
  width: 100%;
`
export const GroupLeftItem = styled.View`
  flex-direction: row;
  gap: 12px;
`
export const ContainerItem = styled.View`
  height: 100%;
  justify-content: space-around;
`
export const TitleItem = styled.Text`
  font-size: 14px;
  color: #212A3E;
`
export const SubTitleItem = styled.Text`
  font-size: 12px;
  color: #526D82;
`
export const PriceItem = styled.Text`
  font-size: 14px;
  color: #E74646;
`

export const CardActions = styled.View`
  flex-direction: row;
  gap: 12px;
  transition: all 0.8s ease;
`
export const Delete = styled.TouchableOpacity`
  flex-direction: row;
  width: 34px;
  height: 34px;
  background-color: #E74646;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`
export const Edit = styled.TouchableOpacity`
  flex-direction: row;
  width: 34px;
  height: 34px;
  background-color: #F79327;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`