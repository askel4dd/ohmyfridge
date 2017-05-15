import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button } from 'native-base';
import ProductGroupsList from '../../components/ProductGroupsList';
import ProductGroupButton from '../../components/ProductGroupButton';

const predefinedGroups = [
  { name: 'Meat', key: 1 },
  { name: 'Milk', key: 2 },
  { name: 'Candies', key: 3 },
  { name: 'Chicken', key: 4 },
  { name: 'Chicken', key: 5 },
  { name: 'Chicken', key: 6 },
  { name: 'Chicken', key: 7 },
  { name: 'Chicken', key: 8 },
];

class ProductGroups extends Component {
  _renderProductGroupInput(item, index) {
    return (
      <ProductGroupButton key={item.key} num={index} count={item.items} name={item.name}/>
    )
  }

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <ProductGroupsList />
        </Content>

        <View style={{flex: 1, flexDirection: 'row', alignItems: 'flex-end'}}>
          <ScrollView horizontal={true}>
            {predefinedGroups.map(this._renderProductGroupInput)}
          </ScrollView>
        </View>

        <Footer>
          <FooterTab>
            <Button>
              <Text>Add</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}

export default ProductGroups;
