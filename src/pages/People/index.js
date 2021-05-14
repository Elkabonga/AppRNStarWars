import React, { useEffect, useState } from 'react';
import { TouchableOpacity, ScrollView } from 'react-native'
import Header from '../../components/Header'
import api from '../../services/api'
import * as S from './styles'

export default function People({ navigation }) {

  const [peoples, setPeoples] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.get('/people').then((response) => {
      setPeoples(response.data.results);
      setLoading(false);
    })
  }, [])

  return (
    <S.View>
      <ScrollView>
        <Header />
        <S.Container>
          <S.Text>Lista de Personagens: </S.Text>
        </S.Container>

        {!!loading && (
          <S.Container>
            <S.Text>Carregando...</S.Text>
          </S.Container>
        )}

        {peoples.map((people, index) => {
          return (
            <S.Container key={index}>
              <S.Text>Nome: {people?.name}</S.Text>
              <S.Text>Altura: {people?.height}cm</S.Text>
              <S.Text>Peso: {people?.mass}kg</S.Text>
            </S.Container>
          )
        })}

        <S.Container>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <S.Text>Voltar</S.Text>
          </TouchableOpacity>
        </S.Container>
      </ScrollView>
    </S.View >
  );
}
