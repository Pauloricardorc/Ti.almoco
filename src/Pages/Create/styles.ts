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
  padding: 42px 24px;
`

export const Title = styled.Text`
 font-size: 24px;
 font-weight: 500;
 align-self: center;
`
export const ButtonCustom = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: #333;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  border-radius: 12px;
`
export const TextCustom = styled.Text`
  font-size: 18px;
  color: #F0F0F0;
`

export const DateAndroid = styled.TouchableOpacity`
  width: 100%;
  height: auto;
  background: #202020;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding: 14px 0;
`
    
export const DateLabel = styled.Text`
  color: #F0F0F0;
  font-size: 16px;
  text-transform: capitalize;
`