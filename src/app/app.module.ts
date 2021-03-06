import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductService } from './service/product.service';
import { ProductComponent } from './components/product/product.component';
import { StoreModule} from '@ngrx/store';
import { Reducer } from './store';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NgrxComponent } from './components/ngrx/ngrx.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    NgrxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(Reducer) // alternative StoreModule.forRoot({ productList: ProductReducer }) but not working so created custom reducer
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

