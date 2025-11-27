import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TeamTasksScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.meText}>(Eu)</Text>
        <Text style={styles.name}>Felipe Pucci Veloso</Text>
        <Text style={styles.classText}>Engenharia de Software</Text>
      </View>

      <View style={styles.list}>
        {/* Compromissos do próprio aluno */}
        <Text style={styles.item}>09h30: Reunião "Daily"</Text>
        <Text style={styles.item}>14h00: Reunião com cliente Carros & Carros</Text>
        <Text style={styles.item}>16h30: Prazo final Projeto X</Text>

        {/* Jurema (chefe) */}
        <Text style={styles.personTitle}>Jurema (chefe)</Text>
        <Text style={styles.item}>09h30: Reunião "Daily"</Text>
        <Text style={styles.item}>12h00: Almoço com a diretoria</Text>
        <Text style={styles.item}>15h00: Saída viagem</Text>

        {/* Aderbal */}
        <Text style={styles.personTitle}>Aderbal</Text>
        <Text style={styles.item}>09h30: Reunião "Daily"</Text>
        <Text style={styles.item}>13h00: Visita técnica Uni-FACEF</Text>
        <Text style={styles.item}>16h30: Prazo final Projeto X</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24 },
  header: { alignItems: "center", marginBottom: 10 },
  meText: { fontSize: 20, fontWeight: "bold" },
  name: { fontSize: 18 },
  classText: { fontSize: 14, marginBottom: 20 },

  list: {},
  item: { fontSize: 16, marginBottom: 6 },

  personTitle: {
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 15,
    marginBottom: 5,
  },
});