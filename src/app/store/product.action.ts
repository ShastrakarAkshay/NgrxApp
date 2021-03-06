import { Action } from '@ngrx/store';
import { Product } from '../model/product.model';

export const Actions = {
    ADD_PRODUCTS: 'ADD_PRODUCTS',
    UPDATE_PRODUCTS: 'UPDATE_PRODUCTS',
    DELETE_PRODUCTS: 'DELETE_PRODUCTS'
}

export class AddProductAction implements Action {
    readonly type = Actions.ADD_PRODUCTS;
    constructor(public payload: Product) {}
}

export class UpdateProductAction implements Action {
    readonly type = Actions.UPDATE_PRODUCTS;
    constructor(public payload: { product: Product, index: number }) {}
}

export class DeleteProductAction implements Action {
    readonly type = Actions.DELETE_PRODUCTS;
    constructor(public payload: number) {}
}

export type ProductActions = AddProductAction | UpdateProductAction | DeleteProductAction;