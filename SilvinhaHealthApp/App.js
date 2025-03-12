import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, TextInput, Touchable, TouchableOpacity } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Silvinha Health App</Text>
        
     </View>
     <View style={styles.content}>
        <Text style={styles.subTitle}>Calculadora de IMC</Text>
     </View>
        
      <View>
        <Text Style={styles.label}>Altura</Text>
        <TextInput
          style={styles.input}
          placeholder='Ex. 1.70'
          keyboardType='numeric'>
        </TextInput>
      </View>

      <View style={{marginTop:25 }}>
        <Text Style={styles.label}>Peso</Text>
        <TextInput
          style={styles.input}
          placeholder='Ex. 80.650'
          keyboardType='numeric'>
        </TextInput>
        </View>

        <TouchableOpacity 
        style={styles.button}
        onPress={()=>alert("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")}
        >
          <Ionicons name="calculator-sharp" size={24} color="#edf2f4" />
          <Text style={styles.text}>Calcularr</Text>
        </TouchableOpacity>

     <StatusBar style='light'>
     </StatusBar>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',

  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 130,
    backgroundColor: '#D90429',
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25
  },
  title: {
    color: "#EDF2F4",
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  }, 
  content: {
    flex: 1,
    padding: 40,
    width: '100%',
    backgroundColor: '#EDF2F4'
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 24,
    color: "#D90429",
    fontWeight: 'bold',
    marginBottom: 40,
    
  },
  label:{
    color: '#000',
    fontSize: 18,
  },
  input:{
    height: 45,
    width: '100%',
    fontSize: 18,
    borderColor: '#D90429',
    borderBottomWidth: 1
  },
  button: {
    width: '100%',
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ef233c',
    borderRadius: 15,
    marginTop: 40,
    marginBottom: 10,
  },
  text:{
    color: '#edf3f4',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 5,
    
  },
});