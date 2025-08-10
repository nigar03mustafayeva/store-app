import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  productForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.productForm = this.fb.group({
      title: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      description: ['', Validators.required],
      image: ['', [Validators.required, Validators.pattern('(https?://.*)')]],
      category: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      const product = this.productForm.value;

      product.id = Date.now();
      
      const savedProducts = JSON.parse(localStorage.getItem('products') || '[]');
      savedProducts.push(product);
      localStorage.setItem('products', JSON.stringify(savedProducts));

      alert('Məhsul əlavə olundu!');
      this.router.navigate(['/']); 
    } else {
      alert('Zəhmət olmasa, formu yenidən doldurun.');
    }
  }
}
