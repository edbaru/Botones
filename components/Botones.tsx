import React from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/Navegacion';

interface TiposBotones {
  aumentar: () => void;
  reducir: () => void;
}

const Botones = ({ aumentar, reducir }: TiposBotones) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={{ flexDirection: 'row' }}>
      <Button title="Añadir" onPress={aumentar} />
      <View style={{ width: 20 }} />
      <Button title="Reducir" onPress={reducir} />
      <View style={{ width: 20 }} />
      <Button title="Navegacion" onPress={() => navigation.navigate('OtroCubo')} />
    </View>
  );
};

export default Botones;