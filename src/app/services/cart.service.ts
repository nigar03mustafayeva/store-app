import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private storageKey = 'cartItems';

  constructor() { }

  addToCart(product: any) {
    const items = this.getItems();
    items.push(product);
    localStorage.setItem(this.storageKey, JSON.stringify(items));
  }

  getItems() {
    const items = localStorage.getItem(this.storageKey);
    return items ? JSON.parse(items) : [];
  }

  removeFromCart(productId: number) {
    let items = this.getItems();

    const index = items.findIndex((item: any) => item.id === productId);
    if (index !== -1) {
      items.splice(index, 1);   
  }
    localStorage.setItem(this.storageKey, JSON.stringify(items));
  }
  
  
  clearCart() {
    localStorage.removeItem(this.storageKey);
  }

  getTotalPrice() {
    const items = this.getItems();
    return items.reduce((total: number, item: any) => total + item.price, 0);
  }
}
