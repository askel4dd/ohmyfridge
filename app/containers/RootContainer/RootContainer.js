import React, { Component } from 'react';
import { Text } from 'react-native';
import { Content, Container, Footer, FooterTab, Button, Header } from 'native-base';
import ProductGroupsList from '../../components/ProductGroupsList';

class RootContainer extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <ProductGroupsList />
        </Content>

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

export default RootContainer;
