import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { AddProductComponent } from './add-product/add-product.component';

export const routes: Routes = [
    { path: '', component: ProductListComponent},
    { path: 'product/:id', component: ProductDetailComponent},
    { path: 'cart', component: CartComponent },
    { path: 'contact', component: ContactComponent},
    { path: 'add-product', component: AddProductComponent}
];
