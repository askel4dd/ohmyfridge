import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Button, Icon, Badge } from 'native-base';
import styles from './styles';

class ProductGroupButton extends Component {
  render() {
    return (
      <Button style={StyleSheet.flatten(styles.button)} large>
        <Icon name="pizza" style={StyleSheet.flatten(styles.icon)} />
        <Text>{this.props.num}</Text>
        {/*<Badge><Text>51</Text></Badge>*/}
      </Button>
    )
  }
}

export default ProductGroupButton;
