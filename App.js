import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import AppMenu from './navigation/tabs';


export default function App() {
  return (
    <NavigationContainer independent={true}>
      <AppMenu />
    </NavigationContainer>
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
