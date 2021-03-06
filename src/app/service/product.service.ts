import { Injectable } from '@angular/core';
import { of, from, Observable } from 'rxjs';
import { IProduct } from '../interface/product.interface';

@Injectable()
export class ProductService {

    products: IProduct[] = [];

    constructor() {
        this.products = [{ name: 'Mobile', price: 15000 }, { name: 'Camera', price: 5000 }, { name: 'Laptop', price: 45999 }, { name: 'Powerbank', price: 999 }];
    }

    getAllProducts(): Observable<IProduct[]> {
        return of(this.products);
    }

    addProduct(product: IProduct) {
        this.products.push(product);
    }

    updateProduct(product: IProduct, index: number) {
        this.products[index] = product;
    }

    deleteProduct(index: number) {
        this.products.splice(index);
    }

}