import React, { useEffect, useState } from 'react';
import { TouchableOpacity, FlatList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import api from '../../services/api'
import { acSetPage } from '../../store/actions/pagination';
import * as S from './styles'

export default function People({ navigation }) {

  const pagination = useSelector(state => state.pagination)
  const [people, setPeople] = useState({ loading: true, peopleData: [] })
  const dispatch = useDispatch()

  useEffect(() => {
    getPeople()
  }, [])

  const getPeople = async () => {
    try {
      const response = await api.get(`/people/?page=${pagination.page}`);
      const currentData = [...people.peopleData]
      currentData.push(...response.data.results)
      setPeople({
        ...people,
        peopleData: currentData,
        loading: false,
      });
    } catch (error) {
      return error;
    }
  };

  function Loading() {
    return (
      <S.Container>
        <S.Text>Carregando...</S.Text>
      </S.Container>
    )
  }

  function renderItem({ item, index }) {
    return (
      <S.Container key={index}>
        <S.Text>Nome: {item?.name}</S.Text>
        <S.Text>Altura: {item?.height}cm</S.Text>
        <S.Text>Peso: {item?.mass}kg</S.Text>
      </S.Container>
    )
  }

  function moreResults() {
    dispatch(
      acSetPage(++pagination.page)
    )
    getPeople()
  }

  if (people.loading) {
    return <Loading />
  }

  return (
    <S.View>
      <S.ContainerBack>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <S.Text>Voltar</S.Text>
        </TouchableOpacity>
      </S.ContainerBack>

      <FlatList
        data={people.peopleData}
        keyExtractor={(item, index) => item.name + index}
        renderItem={renderItem}
        onEndReachedThreshold={0.01}
        onEndReached={moreResults}
      />
    </S.View >
  );
}
