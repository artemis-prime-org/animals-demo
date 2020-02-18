import React from 'react'
import {
  StyleSheet,
  View
} from 'react-native'

import { Button } from '../components'
import { NavProps } from '../types'
import theme from '../style/theme'

export default ({ navigation }: NavProps) => (
  <View style={s.inner} >
    <View>
      <Button mode="contained" onPress={() => navigation.navigate('LoginScreen')}>
        Login
      </Button>
      <Button mode="outlined" color={theme.colors.secondary} style={s.button} onPress={() => navigation.navigate('RegisterScreen')}>
        Sign Up
      </Button>
    </View>
  </View>
)

const s = StyleSheet.create({
  
  background: {
    flex: 1,
    width: '100%',
    paddingBottom: theme.spacing(4)
  },

  inner: {
    flex: 1,
    justifyContent: 'space-between',
    padding: theme.spacing(1),
    paddingTop: theme.spacing(4)
  },

  button: {
    borderColor: theme.colors.secondary
  }

})

