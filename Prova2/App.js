import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import UserTasksScreen from "./screens/UserTasksScreen";
import TeamTasksScreen from "./screens/TeamTasksScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Agenda do dia" }}
        />
        <Stack.Screen
          name="UserTasks"
          component={UserTasksScreen}
          options={{ title: "Meus compromissos" }}
        />
        <Stack.Screen
          name="TeamTasks"
          component={TeamTasksScreen}
          options={{ title: "Compromissos da equipe" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}