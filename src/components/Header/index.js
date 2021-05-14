import React from 'react';
import { StatusBar } from 'react-native';

import * as S from './styles'

function Header({ children }) {
  return (
    <S.View>
      <S.Title>App Star Wars Wiki</S.Title>
      {children}
      <StatusBar barStyle="light-content" />
    </S.View>
  )
}

export default Header
