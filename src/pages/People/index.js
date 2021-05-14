import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Button, View, Text } from 'react-native'
import Header from '../../components/Header'
import api from '../../services/api'
import * as S from './styles'

export default function People({ navigation }) {

  const [peoples, setPeoples] = useState([])

  useEffect(() => {
    api.get('/people').then((response) => {
      console.log(response.data.results);
      // console.log(peoples)
      setPeoples(response.data.results);
    })
  }, [])

  return (
    <S.View>
      <Header />
      <S.Container>
        <S.Text>Pessoa: {peoples[0]?.name}</S.Text>
      </S.Container>
      <S.Container>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <S.Text>Voltar</S.Text>
        </TouchableOpacity>
      </S.Container>
    </S.View>
  );
}
