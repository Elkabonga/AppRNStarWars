import React from 'react';
import Header from '../../components/Header'
import * as S from './styles'

export default function Home() {
  return (
      <S.View>
        <Header />
      <S.Container>
        <S.Title>People</S.Title>
      </S.Container>
    </S.View>
  );
}
