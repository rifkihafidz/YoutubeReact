import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, View, Image } from 'react-native'

const SampleAPI = () => {
  const [dataUser, setDataUser] = useState({
    avatar: '',
    email: '',
    first_name: '',
    last_name: '',
  })
  const [dataJob, setDataJob] = useState({
    name: '',
    job: '',
  })
  useEffect(() => {
    // Call API Method GET
    // fetch('https://reqres.in/api/users/2')
    //   .then(response => response.json())
    //   .then(json => console.log(json))

    // Call API Method POST
    // const dataForAPI = {
    //   name: "morpheus",
    //   job: "leader"
    // }

    // console.log('Data JSON : ', dataForAPI);
    // console.log('Data Stringify : ', JSON.stringify(dataForAPI));

    // // Body harus berbentuk string tidak boleh json
    // fetch('https://reqres.in/api/users', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(dataForAPI)
    // })
    //   .then(response => response.json())
    //   .then(json => {
    //     console.log('Post Response : ', json)
    //   })
  }, []);

  const getDATA = () => {
    fetch('https://reqres.in/api/users/2')
      .then(response => response.json())
      .then(json => {
        console.log(json)
        setDataUser(json.data)
      })
  }

  const postDATA = () => {
    const dataForAPI = {
      name: "morpheus",
      job: "leader"
    }

    // console.log('Data JSON : ', dataForAPI);
    // console.log('Data Stringify : ', JSON.stringify(dataForAPI));

    // Body harus berbentuk string tidak boleh json
    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataForAPI)
    })
      .then(response => response.json())
      .then(json => {
        console.log('Post Response : ', json)
        setDataJob(json)
      })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Sample API</Text>
      <Button title="GET DATA" onPress={getDATA} />
      <Text>Response GET DATA :</Text>
      <Image source={{ uri: dataUser.avatar }} style={styles.avatar} />
      <Text>{dataUser.first_name} {dataUser.last_name}</Text>
      <Text>{dataUser.email}</Text>
      <View style={styles.line} />
      <Button title="POST DATA" onPress={postDATA} />
      <Text>Response POST DATA :</Text>
      <Text>{dataJob.name}</Text>
      <Text>{dataJob.job}</Text>
    </View>
  )
}

export default SampleAPI

const styles = StyleSheet.create({
  container: { padding: 20 },
  textTitle: { textAlign: 'center' },
  line: { height: 2, backgroundColor: 'black', marginVertical: 20 },
  avatar: { width: 100, height: 100, borderRadius: 100 },
})
