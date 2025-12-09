import React from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';
import compromissosOriginais from '../data/compSemana';

// mantém o arquivo original e adapta para SectionList
const sections = compromissosOriginais.map((item) => ({
  title: item.titulo,
  data: item.dados,
}));

export default function CompSemana() {
  return (
    <View style={styles.container}>
      <View style={styles.headerInfo}>
        <Text style={styles.nome}>Felipe Pucci Veloso</Text>
        <Text style={styles.turma}>Engenharia de Software</Text>
      </View>

      <SectionList
        sections={sections}
        keyExtractor={(item, index) => item + index}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item}</Text>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.header}>{section.title}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headerInfo: {
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  nome: {
    fontSize: 16,
    textAlign: 'center',
  },
  turma: {
    fontSize: 16,
    textAlign: 'center',
  },
  listContent: {
    paddingTop: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 5,
    textAlign: 'center',      // dia da semana centralizado
  },
  item: {
    fontSize: 16,
    marginBottom: 4,
    marginLeft: 10,           // puxa um pouco pra dentro
    textAlign: 'left',        // horários e descrições à esquerda
  },
});
