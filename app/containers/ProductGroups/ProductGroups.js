import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button } from 'native-base';
import ProductGroupsList from '../../components/ProductGroupsList';
import ProductGroupButton from '../../components/ProductGroupButton';
import renderIf from '../../lib/renderIf';
import productGroups from '../../constants/productGroups';

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
          <ProductGroupsList productGroups={this.props.productGroups} />
        </Content>

        {renderIf(true)(
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'flex-end'}}>
            <ScrollView horizontal={true}>
              {productGroups.map(this._renderProductGroupInput)}
            </ScrollView>
          </View>
        )}

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
