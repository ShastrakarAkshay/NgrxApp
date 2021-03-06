import { ActionReducerMap } from "@ngrx/store";
import { ProductListState, ProductReducer } from "./product.reducer";


export const ROOT_REDUCER = {};

export interface AppState {
    productList: ProductListState
}

export const Reducer: ActionReducerMap<AppState, any> = {
    productList: ProductReducer
}