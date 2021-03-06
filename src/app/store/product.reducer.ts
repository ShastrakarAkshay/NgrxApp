import { Action } from '@ngrx/store';
import { Product } from '../model/product.model';
import * as ProductAction from './product.action';

export interface ProductListState {
  products: Product[];
}

const initialState = {
  products: [
    new Product('Mobile', 15000),
    new Product('Laptop', 45999),
    new Product('Camera', 1200),
    new Product('Powerbank', 999),
  ],
};

export function ProductReducer(
  state = initialState,
  action: any
): ProductListState {
  switch (action.type) {
    case ProductAction.Actions.UPDATE_PRODUCTS:
      return updateProduct(state, action);

    case ProductAction.Actions.ADD_PRODUCTS:
      return getProducts(state, action);

    case ProductAction.Actions.DELETE_PRODUCTS:
      return deleteProduct(state, action);

    default:
      return state;
  }
}

function getProducts(state: any, action: any) {
  return {
    ...state,
    products: [...state.products, action.payload],
  };
}

function updateProduct(state: any, action: any) {
  const product = state.products[action.payload.index];
  const updatedProduct = {
    ...product,
    ...action.payload.product,
  };
  const productList = [...state.products];
  productList[action.payload.index] = updatedProduct;

  return {
    ...state,
    products: productList,
  };
}

function deleteProduct(state: any, action: any) {
  return {
    ...state,
    products: state.products.filter(
      (item: Product, index: number) => index != action.payload
    ),
  };
}
