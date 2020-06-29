import React, { useState, useMemo } from 'react';

import { useNavigation } from '@react-navigation/native';

import FeatherIcon from 'react-native-vector-icons/Feather';
import {
  Container,
  CartPricing,
  CartButton,
  CartButtonText,
  CartTotalPrice,
} from './styles';

import formatValue from '../../utils/formatValue';

import { useCart } from '../../hooks/cart';

// Calculo do total
// Navegação no clique do TouchableHighlight

const FloatingCart: React.FC = () => {
  const { products } = useCart();

  const navigation = useNavigation();

  const cartTotal = useMemo(() => {
    // RETURN THE SUM OF THE PRICE FROM ALL ITEMS IN THE CART
    let total = 0;
    let quantity = 0;
    let price = 0;

    if (!products) return 0;

    products.map(productSpecific => {
      quantity = Number(productSpecific.quantity);
      price = Number(productSpecific.price);
      total += price * quantity;
      return null;
    });

    return formatValue(total);
  }, [products]);

  const totalItensInCart = useMemo(() => {
    // RETURN THE SUM OF THE QUANTITY OF THE PRODUCTS IN THE CART

    let total = 0;
    let quantity = 0;

    products.map(productSpecific => {
      quantity = Number(productSpecific.quantity);
      total += quantity;
      return null;
    });

    return total;
  }, [products]);

  return (
    <Container>
      <CartButton
        testID="navigate-to-cart-button"
        onPress={() => navigation.navigate('Cart')}
      >
        <FeatherIcon name="shopping-cart" size={24} color="#fff" />
        <CartButtonText>{`${totalItensInCart} itens`}</CartButtonText>
      </CartButton>

      <CartPricing>
        <CartTotalPrice>{cartTotal}</CartTotalPrice>
      </CartPricing>
    </Container>
  );
};

export default FloatingCart;
