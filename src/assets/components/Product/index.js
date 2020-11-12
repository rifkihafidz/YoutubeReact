import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import macbook from '../../images/macbook.png'

const Product = (props) => {
  return (
    <View style={styles.wrapper}>
      <Image source={macbook} style={styles.productImage} />
      <Text style={styles.productTitle}>New MacBook Pro 2019</Text>
      <Text style={styles.productPrice}>Rp. 25.000.000,-</Text>
      <Text style={styles.location}>Jakarta Barat</Text>
      <TouchableOpacity onPress={props.onButtonPress}>
        <View style={styles.buttonWrapper}>
          <Text style={styles.buttonText}>Beli</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Product

const styles = StyleSheet.create({
  wrapper: {
    padding: 12, backgroundColor: '#f2f2f2', width: 212, borderRadius: 8
  },
  productImage: {
    width: 188, height: 107, borderRadius: 8
  },
  productTitle: {
    fontSize: 14, fontWeight: 'bold', marginTop: 16
  },
  productPrice: {
    fontSize: 12, fontWeight: 'bold', marginTop: 16, color: '#F2994A'
  },
  location: {
    fontSize: 12, fontWeight: '300', marginTop: 12
  },
  buttonWrapper: {
    backgroundColor: '#6FCF97', paddingVertical: 6, borderRadius: 25, marginTop: 20
  },
  buttonText: {
    fontSize: 14, fontWeight: '600', color: 'white', borderRadius: 8, textAlign: 'center'
  }
})