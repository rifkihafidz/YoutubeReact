import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const Story = (props) => {
  return (
    <View style={{ alignItems: 'center', marginRight: 30 }}>
      <Image
        source={{ uri: props.gambar }}
        style={{ width: 70, height: 70, borderRadius: 70 / 2 }}
      />
      <Text style={{ maxWidth: 50, textAlign: 'center' }}>{props.judul}</Text>
    </View>
  );
};

const SampleProps = () => {
  return (
    <ScrollView horizontal>
      <View style={{ flexDirection: 'row' }}>
        <Story
          judul="Youtube Channel"
          gambar="https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
        <Story
          judul="Kelas Online"
          gambar="https://images.pexels.com/photos/3270230/pexels-photo-3270230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
        <Story
          judul="Kabayan Coding"
          gambar="https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
        <Story
          judul="Shoot"
          gambar="https://images.pexels.com/photos/1627936/pexels-photo-1627936.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
        <Story
          judul="Food"
          gambar="https://images.pexels.com/photos/2859616/pexels-photo-2859616.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
        <Story
          judul="Tamiya"
          gambar="https://images.pexels.com/photos/2811087/pexels-photo-2811087.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
      </View>
    </ScrollView>
  );
};

export default SampleProps;
