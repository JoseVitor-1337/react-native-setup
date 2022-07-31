import { memo } from 'react'
import { StyleSheet, View, Text } from 'react-native'

function Home() {
  return (
    <View style={styles.container}>
      <Text>React native Setup</Text>
    </View>
  )
}

export default memo(Home)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
