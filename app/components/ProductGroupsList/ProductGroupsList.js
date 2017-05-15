import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import styles from './styles';
import ProductGroupButton from '../ProductGroupButton';

const GROUPS_PER_ROW = 3;
const groups = [
  { name: 'Meat', key: 1, items: 1 },
  { name: 'Milk', key: 2, items: 0 },
  { name: 'Candies', key: 3, items: 5 },
  { name: 'Chicken', key: 4, items: 3 },
];

class ProductGroupsList extends Component {

  _renderProductGroup({ item, index }) {
    return (
      <ProductGroupButton key={item.key} num={index} count={item.items} name={item.name}/>
    )
  }

  render() {
    return (
      <View>
        <FlatList
          data={groups}
          renderItem={this._renderProductGroup}
          numColumns={GROUPS_PER_ROW}
          columnWrapperStyle={styles.row}
        />
      </View>
    )
  }
}

export default ProductGroupsList;
