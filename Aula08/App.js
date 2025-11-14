import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Button, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AVATAR_KEY = '@aula08_avatar_uri';

export default function App() {
  const [avatarUri, setAvatarUri] = useState(null);
  const [camPerm, requestCamPerm] = ImagePicker.useCameraPermissions();
  const [galPerm, requestGalPerm] = ImagePicker.useMediaLibraryPermissions();

  useEffect(() => {
    (async () => {
      const uri = await AsyncStorage.getItem(AVATAR_KEY);
      if (uri) setAvatarUri(uri);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (!camPerm?.granted) await requestCamPerm();
      if (!galPerm?.granted) await requestGalPerm();
    })();
  }, [camPerm?.granted, galPerm?.granted]);

  async function pickFromCamera() {
    const camOK = camPerm?.granted || (await requestCamPerm())?.granted;
    if (!camOK) return Alert.alert('Permissão', 'Autorize a câmera para continuar.');

    const result = await ImagePicker.launchCameraAsync({
      quality: 0.8,
      allowsEditing: true,
      aspect: [1, 1], 
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setAvatarUri(uri);
      await AsyncStorage.setItem(AVATAR_KEY, uri);
    }
  }

  async function pickFromGallery() {
    const galOK = galPerm?.granted || (await requestGalPerm())?.granted;
    if (!galOK) return Alert.alert('Permissão', 'Autorize a galeria para continuar.');

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.9,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setAvatarUri(uri);
      await AsyncStorage.setItem(AVATAR_KEY, uri);
    }
  }

  async function clearAvatar() {
    await AsyncStorage.removeItem(AVATAR_KEY);
    setAvatarUri(null);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.title}>Perfil do Usuário</Text>

      <View style={styles.avatarBox}>
        <Image
          source={
            avatarUri
              ? { uri: avatarUri }
              : require('./assets/avatar-placeholder.png') 
          }
          style={styles.avatar}
        />
      </View>

      <View style={styles.buttons}>
        <Button title="Tirar Foto" onPress={pickFromCamera} />
        <Button title="Escolher da Galeria" onPress={pickFromGallery} />
        <Button title="Remover Avatar" color="#b00020" onPress={clearAvatar} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', paddingTop: 40, paddingHorizontal: 16, backgroundColor: '#fafafa' },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 16 },
  avatarBox: { width: 180, height: 180, borderRadius: 90, overflow: 'hidden', backgroundColor: '#eee' },
  avatar: { width: 180, height: 180, borderRadius: 90 },
  buttons: { marginTop: 20, width: '100%', gap: 10 },
});
