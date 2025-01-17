import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import macbook from '../../assets/images/macbook.png';

const SampleStyling = () => {
  return (
    <View>
      <View>
        <Text style={styles.text}>Styling Component</Text>
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: '#0abde3',
            borderWidth: 2,
            borderColor: '#5f27cd',
            marginTop: 20,
            marginLeft: 20,
          }}
        />
      </View>
      <View
        style={{
          padding: 12,
          backgroundColor: '#f2f2f2',
          width: 212,
          borderRadius: 8,
        }}>
        <Image
          source={macbook}
          style={{ width: 188, height: 107, borderRadius: 8 }}
        />
        <Text style={{ fontSize: 14, fontWeight: 'bold', marginTop: 16 }}>
          New MacBook Pro 2019
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            marginTop: 16,
            color: '#F2994A',
          }}>
          Rp. 25.000.000,-
        </Text>
        <Text style={{ fontSize: 12, fontWeight: '300', marginTop: 12 }}>
          Jakarta Barat
        </Text>
        <View
          style={{
            backgroundColor: '#6FCF97',
            paddingVertical: 6,
            borderRadius: 25,
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: 'white',
              borderRadius: 8,
              textAlign: 'center',
            }}>
            Beli
          </Text>
        </View>
      </View>
    </View>
  );
};

// StyleSheet (Mirip CSS)
const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#10ac84',
    marginLeft: 20,
    marginTop: 40,
  },
});

export default SampleStyling;