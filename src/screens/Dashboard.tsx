import React, { useState } from 'react'

import { 
  Image, 
  View, 
  StyleSheet, 
  ScrollView, 
  Text, 
  TouchableOpacity 
} from 'react-native'

/*
import {
  Modal, 
  Portal,
  Button
} from 'react-native-paper'

import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
*/


import { Row, Grid } from "react-native-easy-grid"

//import { Paragraph } from '../components'
import { NavProps } from '../types'
import theme from '../style/theme'

import animals from '../../data/animals-data'

export default (props: NavProps) => {

  let setsOfThree = []
  let currentArray = undefined
  for (let i = 0; i < animals.length; i++) {
    if (i % 3 == 0) {
      currentArray = []
      setsOfThree.push(currentArray)
    }
    currentArray.push(animals[i])
  }

    // https://stackoverflow.com/questions/39548664/react-native-scroll-view-not-scrolling/39548939
  return (
    <ScrollView contentContainerStyle={s.scrollViewContainer} scrollEnabled={true}>
      <Grid style={s.grid}>
      {setsOfThree.map((three, i) => (
        <Row key={i} style={s.row}>
        {three.map((e, j) => (
          <ElementCard onPress={() => {console.log(e.name + " clicked!")}} element={e} style={s.elementCard} key={j}/>
        ))}
        </Row>
      ))}
      </Grid>
    </ScrollView>
  )
}

/*
    <Portal >



    <Modal visible={activeMovie != null} onDismiss={() => setActiveMovie(null)} contentContainerStyle={s.modalStyle}>
        {activeMovie && (
          <>
            <Image source={{uri: activeMovie.heroImg}} style={{width: 'auto', height: 150}}/>
            <Text style={s.detailTitle} >{activeMovie.name}</Text>
            <Text style={s.detailStatusOuter} ><Text style={s.detailStatusLabel} >Status: </Text>{activeMovie.trading ? 'Trading' : 'Funding'}</Text>
            <Paragraph style={s.description} >{activeMovie.shortDescription}</Paragraph>
            <View style={s.buttonsOuter}>
                <IconButton buttonStyle={s.detailButton} onPress={() => setActiveMovie(null)} icon={<FontAwesome name="info-circle" size={25} />} />
                <IconButton buttonStyle={s.detailButton} onPress={() => setActiveMovie(null)} icon={<Ionicons name="md-stats" size={25} />} />
                <IconButton buttonStyle={s.detailButton} onPress={() => setActiveMovie(null)} icon={<MaterialIcons name="favorite" size={25} />} />
              </View>
              <IconButton buttonStyle={s.tradeButton} textStyle={s.tradeText} onPress={() => setActiveMovie(null)} icon={<FontAwesome name="dollar" size={25} style={s.tradeIcon}/>} >Trade</IconButton>
            </>
          )}
        </Modal>
    </Portal>

    

const IconButton = ({icon, buttonStyle, onPress, children, textStyle}) =>  (
  <Button style={buttonStyle} onPress={onPress} >
    {icon}{children && <Text style={textStyle}>{children}</Text>}
  </Button>
)


*/



const ElementCard = ({element, onPress, style}) => (
  <TouchableOpacity onPress={onPress} style={style}>
    <Image source={element.thumb} style={{width: 100}} />
  </TouchableOpacity>
)


const s = StyleSheet.create({

  scrollViewContainer: {
    paddingTop: theme.spacing(3),
    flexGrow: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  grid: {
  },
  row: {
    height: 'auto',
    marginBottom: 5,
  },
  elementCard: {
    marginRight: 5
  },

  /*
  modalStyle: {
    top: 0,
    left: '10%',
    width: '80%',
    height: 425,
    backgroundColor: theme.colors.background,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#d6d7da',
    flexDirection: 'column', 
    justifyContent: 'flex-start', 
    paddingLeft: 16,
    paddingRight: 16,
  },

  detailTitle: {
    color: '#eee',
    paddingTop: 5,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  detailStatusOuter: {
    color: '#ddd',
    textAlign: 'center',
  },
  detailStatusLabel: {
    color: theme.colors.primary
  },

  description: {
    marginTop: 12,
    fontSize: 14,
    lineHeight: 16,
    color: '#ddd',
  },
  buttonsOuter : {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16
  },
  detailButton: {
    borderColor: theme.colors.primary,
    borderRadius: 20,
    borderWidth: 1,
    width: 70
  },
  icon: {
    position: 'relative',
    left: 15,
    padding: 0
  },
  tradeButton: {
    backgroundColor: theme.colors.primary,
    color: '#eee',
  },
  tradeText: {
    color: '#eee',
    textTransform: 'none'
  },
  tradeIcon: {
    color: '#eee',
    marginRight: 4,
    height: 15,
  }
  */
})

