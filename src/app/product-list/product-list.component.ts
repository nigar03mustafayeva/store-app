import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
  products: any;
  constructor(private productService:ProductService, private router: Router){}
  
  
  ngOnInit() {
    this.productService.getProducts().subscribe(apiProducts => {
      const localProducts = JSON.parse(localStorage.getItem('products') || '[]');
      this.products = [...localProducts, ...apiProducts];
    });
  }
  

  showDetails(product: any) {
    this.router.navigate(['/product', product.id]);
  }
}
