import React from 'react';
import { StyleSheet, View, Text, Image } from "react-native";

type IHeaderProps = {
  title: string;
};
const Header = (props: IHeaderProps) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/img/img.png')} />
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    boxShadow: '5px 4px 5px #000',
    borderBottomColor: '#c4c4c4',
    borderBottomWidth: 2,
  },
  title: {
    marginLeft: '10%',
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Header;
