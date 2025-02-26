import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.tittleContainer}>
        <Text style={styles.tittle}>Silvinha Health App</Text>
        </View>
        <View style={StyleSheet.formContent}>
        
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    paddingTop: 50,
  },
  tittleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  tittle: {
    color: "#ff0043",
    fontSize:28, 
    fontWeight: 'bold',
  }
});