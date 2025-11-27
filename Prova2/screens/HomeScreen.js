import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agenda do dia</Text>

      <Text style={styles.name}>Felipe Pucci Veloso</Text>
      <Text style={styles.classText}>Engenharia de Software</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("UserTasks")}
      >
        <Text style={styles.buttonText}>Meus compromissos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("TeamTasks")}
      >
        <Text style={styles.buttonText}>Compromissos da equipe</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 24 },
  title: { fontSize: 28, marginBottom: 10 },
  name: { fontSize: 18 },
  classText: { fontSize: 15, marginBottom: 40 },
  button: {
    width: "70%",
    padding: 15,
    backgroundColor: "#d9d9d9",
    marginBottom: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: { fontSize: 16 },
});