import React, { useMemo, useState, useCallback } from 'react';
import { View, Text, TextInput, SectionList, StyleSheet, useWindowDimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import PRODUCTS from './data/products';
import ProductRow from './components/ProductRow';

// util simples: agrupa por categoria
function groupByCategory(list) {
  const map = new Map();
  for (const p of list) {
    const key = p.category || 'Outros';
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(p);
  }
  return Array.from(map.entries())
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([title, data]) => ({ title, data }));
}

export default function App() {
  const [query, setQuery] = useState('');
  const { width } = useWindowDimensions();

  // responsividade simples
  const isWide = width >= 480;
  const styles = useMemo(() => makeStyles(isWide), [isWide]);

  // filtro por nome (case-insensitive)
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return PRODUCTS;
    return PRODUCTS.filter(p => p.name.toLowerCase().includes(q));
  }, [query]);

  // agrupa por categoria (SectionList)
  const sections = useMemo(() => groupByCategory(filtered), [filtered]);

  // item renderizado (memo + useCallback para evitar re-render)
  const renderItem = useCallback(({ item }) => (
    <ProductRow product={item} isWide={isWide} />
  ), [isWide]);

  const keyExtractor = useCallback(item => String(item.id), []);

  const renderSectionHeader = useCallback(({ section }) => (
    <View style={styles.headerBox}>
      <Text style={styles.headerText}>{section.title}</Text>
    </View>
  ), [styles.headerBox, styles.headerText]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Catálogo Interativo</Text>

      <TextInput
        placeholder="Buscar por nome..."
        value={query}
        onChangeText={setQuery}
        style={styles.input}
      />

      <SectionList
        sections={sections}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        stickySectionHeadersEnabled
        initialNumToRender={12}
        windowSize={10}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={<Text style={styles.empty}>Nenhum produto encontrado.</Text>}
      />
    </View>
  );
}

function makeStyles(isWide) {
  return StyleSheet.create({
    container: { flex: 1, paddingHorizontal: isWide ? 20 : 12, paddingTop: 30, gap: 10, backgroundColor: '#fafafa' },
    title: { fontSize: isWide ? 24 : 20, fontWeight: 'bold' },
    input: {
      borderWidth: 1, borderColor: '#ddd', backgroundColor: '#fff',
      paddingHorizontal: 12, paddingVertical: 10, borderRadius: 10, fontSize: 16
    },
    listContent: { paddingBottom: 20 },
    headerBox: { backgroundColor: '#eee', paddingVertical: 6, paddingHorizontal: 10, borderRadius: 8, marginTop: 12 },
    headerText: { fontSize: isWide ? 18 : 16, fontWeight: '600' },
    empty: { textAlign: 'center', marginTop: 30, color: '#777' },
  });
}
