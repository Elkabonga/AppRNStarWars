import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Touchable } from 'react-native'
import Header from '../../components/Header'
import * as S from './styles'

export default function Films({navigation}) {
  return (
    <S.View>
      <Header />
      <S.Container>
          <S.Text>Filmes</S.Text>
      </S.Container>    
      <S.Container>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <S.Text>Voltar</S.Text>
        </TouchableOpacity>
      </S.Container>    
    </S.View >
  );
}
