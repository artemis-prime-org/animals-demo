

import React from 'react'
import { StatusBar, Image } from 'react-native'

import { Provider as PaperProvider } from 'react-native-paper'
import { Asset } from 'expo-asset'
import { AppLoading } from 'expo'

import Router from './src/screens/Routes'
import theme from './src/style/theme'

export default class App extends React.Component {

  state = {
    isReady: false,
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      )
    }

    return ( 
      <PaperProvider theme={theme}>
        <StatusBar translucent='true' barStyle="light-content" />
        <Router /> 
      </PaperProvider>
    )
  }

  async _cacheResourcesAsync() {
    let images = [
      require('./assets/animals-splash.png')
    ]
    
    const imagesCached = cacheImages(images)
    await Promise.all(imagesCached)
  }
}

const cacheImages = (images) => {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image)
    } 
      return Asset.fromModule(image).downloadAsync()
  })
}

