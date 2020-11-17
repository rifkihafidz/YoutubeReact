import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BasicJavascript = () => {
  const namaOrang = ['Muhammad', 'Rifki', 'Hafidz'];

  const hewanPeliharaan = {
    nama: 'Miaw',
    usia: 2,
    jenis: 'Kucing',
  }

  const sapaHewan = objectHewan => {
    // let hasilSapa = '';
    // if (objectHewan.nama === 'Miaw') {
    //   hasilSapa = 'Hallo Miaw';
    // } else {
    //   hasilSapa = 'Ini hewan siapa?';
    // }
    // return hasilSapa;

    // Ternary Operator
    return objectHewan.nama === 'Miaw' ? 'Hallo Miaw' : 'Ini hewan siapa?';
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Hello World</Text>
      <Text>{sapaHewan(hewanPeliharaan)}</Text>
      <Text>{namaOrang[0]}</Text>
      <Text>{namaOrang[1]}</Text>
      <Text>{namaOrang[2]}</Text>
      {/* Looping */}
      {namaOrang.map((orang) => <Text>{orang}</Text>)}
    </View>
  )
}

export default BasicJavascript

const styles = StyleSheet.create({
  container: { padding: 20 },
  textTitle: { textAlign: 'center' }
})
