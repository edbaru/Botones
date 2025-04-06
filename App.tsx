import { useState } from 'react';
import { View } from 'react-native';
import Botones from './components/Botones';
import Cubo from './components/Cubo';

export default function App() {
  const [items, setItems] = useState<number[]>([]);

  const aumentar = () => setItems([...items, items.length + 1]);
  const reducir = () => setItems(items.slice(0, -1));

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Botones aumentar={aumentar} reducir={reducir} />
      <Cubo contenido={items} limiteFilas={10} />
    </View>
  );
};