import React, { useEffect, useState } from 'react';
import { TouchableOpacity, ScrollView } from 'react-native'
import Header from '../../components/Header'
import api from '../../services/api'
import * as S from './styles'

export default function Films({ navigation }) {

  const [films, setFilms] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.get('/films').then((response) => {
      setFilms(response.data.results);
      setLoading(false);
    })
  }, [])

  return (
    <S.View>
      <ScrollView>
        <Header />
        <S.Container>
          <S.Text>Lista de Filmes: </S.Text>
        </S.Container>

        {!!loading && (
          <S.Container>
            <S.Text>Carregando...</S.Text>
          </S.Container>
        )}

        {films.map((film, index) => {
          return (
            <S.Container key={index}>
              <S.Text>Titulo: {film?.title}</S.Text>
              <S.Text>Episódio: {film?.episode_id}</S.Text>
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
