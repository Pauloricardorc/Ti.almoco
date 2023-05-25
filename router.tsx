import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CreateNewRegister } from "./src/Pages/Create";
import Details from "./src/Pages/Details";
import Home from "./src/Pages/Home";

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Detail"
          component={Details}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Cadastro"
          component={CreateNewRegister}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
