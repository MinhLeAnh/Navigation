import * as React from 'react';
import { Button, View, Text,StyleSheet,TextInput,Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function SignInScreen({ navigation }) {
  const [inputValue, setInputValue] = useState('');

  const handlePress = () => {
    const isNumber = /^[0-9]{10}$/.test(inputValue);
    if (isNumber) {
      Alert.alert('Thông báo', 'Thành công');
      navigation.navigate("Home");
    } else {
      Alert.alert('Thông báo', 'Hãy nhập lại');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setInputValue}
        value={inputValue}
        placeholder="Nhập số điện thoại"

      />
      <Button title="Kiểm tra" onPress={handlePress} />
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.homepage}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  homepage:{
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
});

export default App;
