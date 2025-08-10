import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  product: any;
  constructor(private route: ActivatedRoute, private productService: ProductService, private cartService: CartService) {}
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        const productId = +id;

        const localProducts = JSON.parse(localStorage.getItem('products') || '[]');
        const localProduct = localProducts.find((p: any) => p.id === productId);

        if (localProduct) {
          this.product = localProduct;
        } else {
          this.productService.getProductById(id).subscribe(data => {
            this.product = data;
          });
        }
      }
    });
  }

  addToCart() {
    this.cartService.addToCart(this.product);
    alert('Məhsul səbətə əlavə olundu!');
  }
}
