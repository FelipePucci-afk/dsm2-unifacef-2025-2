import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function UserTasksScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.meText}>(Eu)</Text>
        <Text style={styles.name}>Felipe Pucci Veloso</Text>
        <Text style={styles.classText}>Engenharia de Software</Text>
      </View>

      <View style={styles.list}>
        <Text style={styles.item}>09h30: Reunião "Daily"</Text>
        <Text style={styles.item}>14h00: Reunião com cliente Carros & Carros</Text>
        <Text style={styles.item}>16h30: Prazo final Projeto X</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24 },
  header: { alignItems: "center", marginBottom: 24 },
  meText: { fontSize: 20, fontWeight: "bold" },
  name: { fontSize: 18 },
  classText: { fontSize: 14 },
  list: { marginTop: 20 },
  item: { fontSize: 16, marginBottom: 10 },
});