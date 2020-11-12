import React, { Component, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

// Functional Component
const SampleState = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.textTitle}>Dinamic Component with State</Text>
      <Counter />
      <CounterClass />
    </View>
  );
};

// Functional Component
const Counter = () => {
  const [number, setNumber] = useState(0);
  return (
    <View>
      <Text style={styles.textTitle}>{number}</Text>
      <Button title="Tambah" onPress={() => setNumber(number + 1)} />
    </View>
  );
};

// Class Component
class CounterClass extends Component {
  state = {
    number: 0,
  };
  render() {
    return (
      <View>
        <Text style={styles.textTitle}>{this.state.number}</Text>
        <Button
          title="Tambah"
          onPress={() => this.setState({ number: this.state.number + 1 })}
        />
      </View>
    );
  }
}

export default SampleState;

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
  textTitle: {
    textAlign: 'center',
    marginBottom: 20,
  },
});
