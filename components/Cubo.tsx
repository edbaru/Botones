import React from 'react';
import { View, Text } from 'react-native';

interface CubeProps {
  contenido: number[];
  limiteFilas: number;
}

const Cubo = ({ contenido, limiteFilas }: CubeProps) => {
  const dividirEnFilas = (items: number[]) => {
    const filas: number[][] = [];
    let filaActual: number[] = [];

    items.forEach((item) => {
      filaActual.push(item);
      if (item % limiteFilas === 0) {
        filas.push(filaActual);
        filaActual = [];
      }
    });

    if (filaActual.length > 0) {
      filas.push(filaActual);
    }

    return filas;
  };

  const filas = dividirEnFilas(contenido);

  return (
    <View style={{ flex: 1, marginTop: 20, borderWidth: 1, padding: 10 }}>
      {contenido.length > 0 ? (
        filas.map((fila, i) => (
          <View key={i} style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 5 }}>
            {fila.map((item, j) => (
              <Text key={j} style={{ marginHorizontal: 5 }}>{item}</Text>
            ))}
          </View>
        ))
      ) : (
        <Text>El cubo está vacío</Text>
      )}
    </View>
  );
};

export default Cubo;