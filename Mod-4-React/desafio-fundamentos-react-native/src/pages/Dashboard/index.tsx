import React, { useState, useEffect } from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';

import { View, Image } from 'react-native';

import formatValue from '../../utils/formatValue';
import { useCart } from '../../hooks/cart';
import api from '../../services/api';

import FloatingCart from '../../components/FloatingCart';

import {
  Container,
  ProductContainer,
  ProductImage,
  ProductList,
  Product,
  ProductTitle,
  PriceContainer,
  ProductPrice,
  ProductButton,
} from './styles';

interface Product {
  id: string;
  title: string;
  image_url: string;
  price: number;
}

const Dashboard: React.FC = () => {
  const { addToCart } = useCart();

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      // Server unreachable -> IP loopback em outra sub-rede
      await api
        .get('/products')
        .then(response => {
          setProducts(response.data);
        })
        .catch(err => {
          console.log(`err: ${err}`);
          return setProducts([
            {
              id: '123',
              title: 'Nome do produto 01',
              image_url:
                'https://storage.googleapis.com/golden-wind/bootcamp-gostack/camiseta-ecommerce.jpg',
              price: 50,
            },
            {
              id: '1234',
              title: 'Nome do produto 02',
              image_url:
                'https://storage.googleapis.com/golden-wind/bootcamp-gostack/camiseta-ecommerce.jpg',
              price: 60,
            },
            {
              id: '12345',
              title: 'Nome do produto 03',
              image_url:
                'https://storage.googleapis.com/golden-wind/bootcamp-gostack/camiseta-ecommerce.jpg',
              price: 70,
            },
            {
              id: '123456',
              title: 'Nome do produto 04',
              image_url:
                'https://storage.googleapis.com/golden-wind/bootcamp-gostack/camiseta-ecommerce.jpg',
              price: 80,
            },
          ]);
        });
    }

    loadProducts();
  }, []);

  function handleAddToCart(item: Product): void {
    addToCart(item);
  }

  return (
    <Container>
      <ProductContainer>
        <ProductList
          data={products}
          keyExtractor={item => item.id}
          ListFooterComponent={<View />}
          ListFooterComponentStyle={{
            height: 80,
          }}
          renderItem={({ item }) => (
            <Product>
              <ProductImage source={{ uri: item.image_url }} />
              <ProductTitle>{item.title}</ProductTitle>
              <PriceContainer>
                <ProductPrice>{formatValue(item.price)}</ProductPrice>
                <ProductButton
                  testID={`add-to-cart-${item.id}`}
                  onPress={() => handleAddToCart(item)}
                >
                  <FeatherIcon size={20} name="plus" color="#C4C4C4" />
                </ProductButton>
              </PriceContainer>
            </Product>
          )}
        />
      </ProductContainer>
      <FloatingCart />
    </Container>
  );
};

export default Dashboard;
