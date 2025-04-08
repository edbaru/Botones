import React from 'react';
import { View } from 'react-native';
import Botones from './Botones';
import Cubo from './Cubo';
import { useItems } from '../context/contexto';

const PantallaCubo = () => {
  const { items, aumentar, reducir } = useItems();

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Botones aumentar={aumentar} reducir={reducir} />
      <Cubo contenido={items} limiteFilas={10} />
    </View>
  );
};

export default PantallaCubo;
