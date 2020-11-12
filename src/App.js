import React from 'react'
import { ScrollView, View } from 'react-native'
import SampleComponent from './pages/SampleComponent'
import SampleFlexBox from './pages/SampleFlexbox'
import SamplePosition from './pages/SamplePosition'
import SampleProps from './pages/SampleProps'
import SampleState from './pages/SampleState'
import SampleStyling from './pages/SampleStyling'
import Communication from './pages/Communication'

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent /> */}
        {/* <SampleFlexBox /> */}
        {/* <SamplePosition /> */}
        {/* <SampleProps /> */}
        {/* <SampleState /> */}
        {/* <SampleStyling /> */}
        <Communication />
      </ScrollView>
    </View>
  )
}

export default App
