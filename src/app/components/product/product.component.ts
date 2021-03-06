import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProduct } from 'src/app/interface/product.interface';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productForm: FormGroup;
  productList: IProduct[] = [];
  isEdit: boolean = false;
  selectedIndex: number = -1;

  constructor(private _fromBuilder: FormBuilder, private _productService: ProductService) {
    this.productForm = this._fromBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required]
    })
   }

  ngOnInit(): void {
    this._productService.getAllProducts().subscribe(res => {
      this.productList = res;
    })
  }

  editProduct(product: IProduct, index: number) {
    this.productForm.setValue(product);
    this.selectedIndex = index;
    this.isEdit = true;
  }

  
  updateProduct() {
    this._productService.updateProduct(this.productForm.value, this.selectedIndex)
    this.reset();
  }

  addProduct() {
    this._productService.addProduct(this.productForm.value);
    this.reset();
  }

  deleteProduct() {
    this._productService.deleteProduct(this.selectedIndex);
    this.reset();
  }

  reset() {
    this.productForm.reset();
    this.selectedIndex = -1;
    this.isEdit = false;
  }

}
