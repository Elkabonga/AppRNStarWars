import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Touchable } from 'react-native'
import Header from '../../components/Header'
import * as S from './styles'

export default function Home({ navigation }) {
  return (
    <S.View>
      <Header />
      <S.Container>
        <S.Text>Clique abaixo e que a força esteja com você!</S.Text>
      </S.Container>
      <S.Container>
        <TouchableOpacity onPress={() => navigation.navigate('Films')}>
          <S.Text>Filmes</S.Text>
        </TouchableOpacity>
      </S.Container>
      <S.Container>
        <TouchableOpacity onPress={() => navigation.navigate('People')}>
          <S.Text>Pessoas</S.Text>
        </TouchableOpacity>
      </S.Container>
    </S.View>
  );
}
