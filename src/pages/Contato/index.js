// Package Contato
import React from 'react';
import { View, Text } from 'react-native';

export default function Sobre({ route }) {
  return (
    <View>
      <Text> Gerente: {route.params.nome} </Text>
      <Text> Endereço: {route.params.end} </Text>
      <Text> Telefone: {route.params.tel} </Text>
    </View>
  );
}