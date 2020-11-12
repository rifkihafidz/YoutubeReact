import React, { Component } from 'react';
import { Image, Text, TextInput, View } from 'react-native';

const SampleComponent = () => {
  return (
    <View>
      <View style={{ width: 80, height: 80, backgroundColor: '#0abde3' }} />
      <Text>Muhammad</Text>
      <Text>Rifki</Text>
      <Text>Hafidz</Text>
      <Test />
      <Photo />
      <TextInput style={{ borderWidth: 1 }} />
      <GreenBox />
      <Profile />
    </View>
  );
};

// Functional Component
const Test = () => {
  return <Text>Testing</Text>;
};

// Functional Component
const Photo = () => {
  return (
    <Image
      source={{ uri: 'https://placeimg.com/100/100/tech' }}
      style={{ width: 100, height: 100 }}
    />
  );
};

// Class Component
class GreenBox extends Component {
  render() {
    return <Text>Green Box</Text>;
  }
}

// Class Component
class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{ uri: 'https://placeimg.com/100/100/people' }}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
        <Text style={{ color: 'blue', fontSize: 24 }}>Ini Orang</Text>
      </View>
    );
  }
}

export default SampleComponent;
