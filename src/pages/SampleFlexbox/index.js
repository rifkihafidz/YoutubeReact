import React, { Component, useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';

const SampleFlexBox = () => {
  const [subscriber, setSubscriber] = useState(200);
  useEffect(() => {
    console.log('Did Mount');
    setTimeout(() => {
      setSubscriber(400);
    }, 2000);
    return () => {
      console.log('Did Update');
    };
  }, [subscriber]);
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#C8D6E5',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{ backgroundColor: '#EE5253', width: 50, height: 50 }} />
        <View style={{ backgroundColor: '#FECA57', width: 50, height: 50 }} />
        <View style={{ backgroundColor: '#1DD1A1', width: 50, height: 50 }} />
        <View style={{ backgroundColor: '#5F27CD', width: 50, height: 50 }} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 20,
        }}>
        <Image
          source={{
            uri:
              'https://lh3.googleusercontent.com/a-/AOh14GjtSfzCRS8osZluIyQB05feqoD80yInasUR-1CIYg=s88-c-k-c0x00ffffff-no-rj-mo',
          }}
          style={{ height: 100, width: 100, borderRadius: 50 }}
        />
        <View style={{ marginLeft: 12 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
            Muhammad Rifki Hafidz
          </Text>
          <Text>{subscriber}K Subscribers</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text>Beranda</Text>
        <Text>Video</Text>
        <Text>Playlist</Text>
        <Text>Komunitas</Text>
        <Text>Channel</Text>
        <Text>Tentang</Text>
      </View>
    </View>
  );
};

// class SampleFlexBox extends Component {
//   constructor(props) {
//     super(props);
//     console.log('===> Constructor');
//     this.state = {
//       subscriber: 200,
//     }
//   }

//   componentDidMount() {
//     console.log('===> ComponentDidMount');
//     setTimeout(() => {
//       this.setState({
//         subscriber: 400,
//       })
//     }, 2000)
//   }

//   componentDidUpdate() {
//     console.log('===> ComponentDidUpdate');
//   }

//   componentWillUnmount() {
//     console.log('===> ComponentWillUnmount');
//   }

//   render() {
//     console.log('===> Render');
//     return (
//       <View>
//         <View style={{ flexDirection: 'row', backgroundColor: '#C8D6E5', alignItems: 'center', justifyContent: 'space-between' }}>
//           <View style={{ backgroundColor: '#EE5253', width: 50, height: 50 }}></View>
//           <View style={{ backgroundColor: '#FECA57', width: 50, height: 50 }}></View>
//           <View style={{ backgroundColor: '#1DD1A1', width: 50, height: 50 }}></View>
//           <View style={{ backgroundColor: '#5F27CD', width: 50, height: 50 }}></View>
//         </View>
//         <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
//           <Image source={{ uri: 'https://lh3.googleusercontent.com/a-/AOh14GjtSfzCRS8osZluIyQB05feqoD80yInasUR-1CIYg=s88-c-k-c0x00ffffff-no-rj-mo' }} style={{ height: 100, width: 100, borderRadius: 50 }} />
//           <View style={{ marginLeft: 12 }}>
//             <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Muhammad Rifki Hafidz</Text>
//             <Text>{this.state.subscriber}K Subscribers</Text>
//           </View>
//         </View>
//         <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//           <Text>Beranda</Text>
//           <Text>Video</Text>
//           <Text>Playlist</Text>
//           <Text>Komunitas</Text>
//           <Text>Channel</Text>
//           <Text>Tentang</Text>
//         </View>
//       </View >
//     );
//   }
// }

export default SampleFlexBox;
