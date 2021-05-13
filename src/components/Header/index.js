import React from 'react';
import { StyleSheet, Text, View } from 'react-native'

import * as S from './styles'

function Header({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>App Star Wars</Text>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {    
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#312e38',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff',
  }
})

export default Header
