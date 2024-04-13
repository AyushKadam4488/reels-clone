import React from 'react';
import { View } from 'react-native';
import ReelsScreen from './component/ReelsScreen';

const App = () => {
  return (
    <View style={{ flex: 1 , backgroundColor:'black', width:'100%' }}>
      <ReelsScreen />
    </View>
  );
};

export default App; 
