import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, View, Image } from 'react-native'

const CallAPIAxios = () => {
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
    // Vanilla JS
    // fetch('https://reqres.in/api/users/2')
    //   .then(response => response.json())
    //   .then(json => {
    //     console.log(json)
    //     setDataUser(json.data)
    //   })

    // Axios
    Axios.get('https://reqres.in/api/users/3')
      .then(result => {
        setDataUser(result.data.data);
      })
      .catch(err => console.log('err: ', err));
  }

  const postDATA = () => {
    const dataForAPI = {
      name: "morpheus",
      job: "leader"
    }

    // console.log('Data JSON : ', dataForAPI);
    // console.log('Data Stringify : ', JSON.stringify(dataForAPI));

    // Vanilla JS
    // Body harus berbentuk string tidak boleh json
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
    //     setDataJob(json)
    //   })

    // Axios
    // Tidak perlu dijadikan string (stringify)
    Axios.post('https://reqres.in/api/users', dataForAPI)
      .then(result => {
        setDataJob(result.data);
      })
      .catch(err => console.log('Error: ', err))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Call API Axios</Text>
      <Button title="GET DATA" onPress={getDATA} />
      <Text>Response GET DATA :</Text>
      {dataUser.avatar.length > 0 && (
        <Image source={{ uri: dataUser.avatar }} style={styles.photo} />
      )}
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

export default CallAPIAxios

const styles = StyleSheet.create({
  container: { padding: 20 },
  textTitle: { textAlign: 'center' },
  line: { height: 2, backgroundColor: 'black', marginVertical: 20 },
  photo: { width: 100, height: 100, borderRadius: 100 },
})
