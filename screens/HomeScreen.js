import { Button, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen(props) {
  return (
      <View style={styles.container}>
        <Text>Home Screen</Text>

        <Button title="Click Me" onPress={() => {
            props.navigation.navigate('settings')
        }} />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
