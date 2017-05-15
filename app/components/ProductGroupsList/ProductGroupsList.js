import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Icon } from 'native-base';

class ProductGroupsList extends Component {
  render() {
    return (
      <View>
        <Button>
          <Icon name="pizza" />
        </Button>
      </View>
    )
  }
}

export default ProductGroupsList;
