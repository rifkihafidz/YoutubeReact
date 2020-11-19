import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Illustration from '../../assets/images/illustration.svg'

const SampleSVG = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Sample SVG</Text>
      <Illustration width={244} height={125} />
    </View>
  )
}

export default SampleSVG

const styles = StyleSheet.create({
  container: { padding: 20 },
  textTitle: { textAlign: 'center' }
})
