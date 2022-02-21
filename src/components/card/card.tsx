import React from 'react';
import {Button, Card, Title, Paragraph} from 'react-native-paper';

import {StyleSheet} from 'react-native';

type ICardProps = {
  title: string;
  type: string;
  image: string;
  price: string;
  currency: string;
  date: string;
};
const PurchaseCard = (props: ICardProps) => {
  return (
    <Card style={styles.container}>
      <Card.Content>
        <Title>{props.title}</Title>
        <Paragraph>{props.type}</Paragraph>
      </Card.Content>
      <Card.Cover source={{uri: props.image}} />
      <Paragraph>Price : {props.price + ' ' + props.currency} </Paragraph>
      <Paragraph>Date : {props.date}</Paragraph>
      <Card.Actions>
        <Button>Details</Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 25,
    width: '100%',
    marginVertical: 10,
    elevation: 20,
    shadowColor: '#52006A',
  },
  cardImage: {
    width: '80%',
  },
});

export default PurchaseCard;
