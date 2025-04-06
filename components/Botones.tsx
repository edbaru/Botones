import React from 'react';
import { View, Button } from 'react-native';

interface TiposBotones {
  aumentar: () => void;
  reducir: () => void;
}

const Botones = ({ aumentar, reducir }: TiposBotones) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Button title="Añadir" onPress={aumentar} />
      <View style={{ width: 10 }} />
      <Button title="Reducir" onPress={reducir} />
    </View>
  );
};

export default Botones;