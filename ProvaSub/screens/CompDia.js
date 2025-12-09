import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import compromissos from '../data/compDia';

export default function CompDia() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.data}>11/11 (ter)</Text>
        <Text style={styles.nome}>Felipe Pucci Veloso</Text>
        <Text style={styles.turma}>Engenharia de Software</Text>
      </View>

      <FlatList
        data={compromissos}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.descr}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10
  },
  data: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'center'
  },
  nome: {
    fontSize: 16,
    textAlign: 'center'
  },
  turma: {
    fontSize: 16,
    textAlign: 'center'
  },
  listContent: {
    paddingTop: 10
  },
  item: {
    fontSize: 18,
    marginBottom: 8
  }
});
