import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router: Router) {}

  goToCart() {
    this.router.navigate(['/cart']);
  }

  goHome(){
    this.router.navigate(['']);
  }

  goToContact(){
    this.router.navigate(['/contact']);
  }

  searchQuery = '';
  onSearch() {
    this.searchQuery = '';
  }

  goToAddProduct() {
    this.router.navigate(['/add-product']);
  }
  
}
