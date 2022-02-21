import React from 'react';
import {sampleGarmentData} from '../../assets/data';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import PurchaseCard from '../components/card/card';
import {Button, Text, TextInput} from 'react-native-paper';
import DatePicker from 'react-native-date-picker';

const PurchaseList = () => {
  const [datasource, setDatasource] = React.useState(sampleGarmentData);
  const [selectedType, setSelectedType] = React.useState('');
  const [selectedBrand, setSelectedBrand] = React.useState('');
  const [minPrice, setMinPrice] = React.useState('0');
  const [maxPrice, setMaxPrice] = React.useState('0');
  const [openDateModal, setOpenDateModal] = React.useState(false);

  // get brands from sampleGermentData
  const brand = () => {
    const brands: string[] = [];
    sampleGarmentData.map(item => {
      if (!brands.includes(item.brand)) {
        brands.push(item.brand);
      }
    });
    return brands;
  };
  const brands = brand();

  // filter sampleGarmenData by price between min and max
  const filterByPrice = (min: number, max: number) => {
    const filteredData = sampleGarmentData.filter(item => {
      return (
        parseInt(item.price_of_purchase, 10) >= min &&
        parseInt(item.price_of_purchase, 10) <= max
      );
    });
    setDatasource(filteredData);
  };

  // filter sampleGarmenData by type or brand
  const handleData = (type: string, itemValue: string) => {
    switch (type) {
      case 'type':
        setSelectedType(itemValue);
        setDatasource(
          sampleGarmentData.filter(item => item.garment_type === itemValue),
        );
        break;
      case 'brand':
        setSelectedBrand(itemValue);
        setDatasource(
          sampleGarmentData.filter(item => item.brand === itemValue),
        );
        break;
      default:
        break;
    }
  };

  // filter sampleGarmenData by date "from date to today"
  const filterByDate = (date: any) => {
    console.log(date);
    const filteredData = sampleGarmentData.filter(item => {
      return (
        new Date(item.purchase_date).getTime() >= new Date(date).getTime() &&
        new Date(item.purchase_date).getTime() <= new Date().getTime()
      );
    });
    setDatasource(filteredData);
  };

  return (
    // Filter menu by date, category, price, etc.
    <>
      <View>
        <Text style={styles.text}>Filter purchases by type : </Text>
        <Picker
          style={styles.filterPicker}
          selectedValue={selectedType}
          onValueChange={itemValue => handleData('type', itemValue)}>
          <Picker.Item label="Choose a type" value="" />
          {sampleGarmentData.map((item, index) => (
            <Picker.Item
              label={item.garment_type}
              value={item.garment_type}
              key={index}
            />
          ))}
        </Picker>
        <Text style={styles.text}>Filter purchases by brand : </Text>
        <Picker
          style={styles.filterPicker}
          selectedValue={selectedBrand}
          onValueChange={itemValue => handleData('brand', itemValue)}>
          <Picker.Item label="Choose a brand" value="" />
          {brands.map((brandName, index) => (
            <Picker.Item label={brandName} value={brandName} key={index} />
          ))}
        </Picker>
        <Text style={styles.text}>Filter purchases by price : </Text>
        <View style={styles.priceFilter}>
          <TextInput
            style={styles.priceInput}
            label="Min"
            value={minPrice}
            onChangeText={text => setMinPrice(text)}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.priceInput}
            label="Max"
            value={maxPrice}
            onChangeText={text => setMaxPrice(text)}
            keyboardType="numeric"
          />
        </View>
        <Button
          style={styles.filterButton}
          mode="contained"
          onPress={() =>
            filterByPrice(parseInt(minPrice, 10), parseInt(maxPrice, 10))
          }>
          Filter by price
        </Button>
        <Button
          style={styles.filterButton}
          mode="contained"
          onPress={() => setOpenDateModal(true)}>
          Filter by date
        </Button>
        <DatePicker
          modal
          open={openDateModal}
          date={new Date()}
          mode="date"
          onConfirm={date => {
            setOpenDateModal(false);
            filterByDate(date);
          }}
          onCancel={() => {
            setOpenDateModal(false);
          }}
        />
      </View>
      <ScrollView style={styles.container}>
        {datasource.map((data, index) => {
          return (
            <View key={index}>
              <PurchaseCard
                title={data.name}
                type={data.garment_type}
                image={data.image}
                price={data.price_of_purchase}
                currency={data.currency}
                date={data.purchase_date}
              />
            </View>
          );
        })}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
  },
  priceFilter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  priceInput: {
    backgroundColor: 'rgba(138,200,239,0.67)',
    width: '50%',
  },
  filterPicker: {
    backgroundColor: 'rgba(138,200,239,0.67)',
  },
  filterButton: {
    backgroundColor: 'rgb(0,153,252)',
    width: '50%',
    marginTop: 10,
    alignSelf: 'center',
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    margin: 10,
  },
});
export default PurchaseList;
