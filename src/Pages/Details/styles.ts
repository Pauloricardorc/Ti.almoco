import Constants from 'expo-constants';
import { Platform } from "react-native";
import styled from "styled-components/native";

const headerHeight = 48

export const StatusBarBackground = styled.View`
  flex: 1;
  gap: 24px;
  background: #141316;
  padding-top: ${Platform.OS === 'ios' ? Constants.statusBarHeight : 0}px;
  height: ${Platform.OS === 'ios' ? Constants.statusBarHeight + headerHeight : headerHeight}px;
`

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #F1F6F9;
  gap: 12px;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  padding: 24px;
  gap: 12px;
`

export const Title = styled.Text`
 font-size: 24px;
 font-weight: 500;
 align-self: center;
`

export const HeaderAvatar = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 12px 0;
  gap: 24px;
  overflow: hidden;
`
export const ContainerAvatar = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0;
  flex: 1;
`

export const Avatar = styled.View`
  align-items: center;
  width: auto;
  padding: 0;
  gap: 12px;
`

export const ContainerDescription = styled.View`
  gap: 12px;
  align-items: center;
`
export const TitleDescription = styled.Text`
  font-size: 18px;
  color: #212A3E;
  font-weight: 700;
`
export const Date = styled.Text`
   font-size: 12px;
  color: #526D82;
  font-weight: 300;
`
export const Price = styled.Text`
    font-size: 18px;
  color: #E74646;
  font-weight: 400;
`