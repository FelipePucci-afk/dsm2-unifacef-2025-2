import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Memo evita re-render quando prop não muda
function ProductRow({ product, isWide }) {
  const styles = makeStyles(isWide);
  return (
    <View style={styles.card}>
      <View style={{ flex: 1 }}>
        <Text style={styles.name} numberOfLines={1}>{product.name}</Text>
        <Text style={styles.category}>{product.category}</Text>
      </View>
      <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>
    </View>
  );
}

function makeStyles(isWide) {
  return StyleSheet.create({
    card: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      paddingVertical: isWide ? 14 : 10,
      paddingHorizontal: isWide ? 14 : 10,
      marginTop: 8,
      borderWidth: 1,
      borderColor: '#e6e6e6',
      backgroundColor: '#fff',
      borderRadius: 12,
      // sombrazinha leve (iOS/Android)
      shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 3, shadowOffset: { width: 0, height: 2 },
      elevation: 2,
    },
    name: { fontSize: isWide ? 16 : 15, fontWeight: '600' },
    category: { color: '#777', marginTop: 2 },
    price: { fontWeight: '700', color: '#0a7', fontSize: isWide ? 16 : 15 },
  });
}

export default React.memo(ProductRow);
