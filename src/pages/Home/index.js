import React, { useState } from 'react';
import { Text, TouchableOpacity, SafeAreaView, Image, Animated } from 'react-native'
import Header from '../../components/Header'
import * as S from './styles'

export default function Home({ navigation }) {

  const [altura, setAltura] = useState(new Animated.Value(0))

  Animated.timing(
    altura,
    {
      toValue: 100,
      duration: 2000,
      useNativeDriver: false
    }).start();

  return (
    <S.View>
      <Header />
      <SafeAreaView>
        <Animated.View
          style={{
            backgroundColor: 'yellow',
            margin: 20,
            height: altura,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <S.TextAnimado>Clique abaixo e que a força esteja com você!</S.TextAnimado>
        </Animated.View>
      </SafeAreaView>
      <S.Container>
        <TouchableOpacity onPress={() => navigation.navigate('People')}>
          <S.Text>Personagens</S.Text>
        </TouchableOpacity>
      </S.Container>
      <S.Container>
        <TouchableOpacity onPress={() => navigation.navigate('Films')}>
          <S.Text>Filmes</S.Text>
        </TouchableOpacity>
      </S.Container>
    </S.View>
  );
}
