import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import Header from './src/components/header/header';
import {Divider} from 'react-native-paper';
import PurchaseList from './src/layouts/purchaseslist';

const App = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'rgba(138,200,239,0.67)'}}>
      <ScrollView>
        <Header title="Purchase List" />
        <Divider />
        <PurchaseList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
