import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Inicio({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agenda</Text>
      <Text style={styles.sub}>Felipe Pucci Veloso</Text>
      <Text style={styles.sub}>Engenharia de Software</Text>

      <View style={styles.buttons}>
        <Button
          title="COMPROMISSOS DO DIA"
          onPress={() => navigation.navigate('CompDia')}
        />
      </View>

      <View style={styles.buttons}>
        <Button
          title="COMPROMISSOS DA SEMANA"
          onPress={() => navigation.navigate('CompSemana')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 10 },
  sub: { fontSize: 16 },
  buttons: { marginTop: 20, width: '80%' }
});
