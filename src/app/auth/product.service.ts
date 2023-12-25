import { Injectable } from '@angular/core';
import { Productlist } from './productlist';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products!:Productlist[];

  constructor() { 
    this.products=[
      {name:'Casual Crossbody Lock Button Tote',description:'This chic, genuine leather tote features a lock button for security and a trendy one-shoulder design.',price:59.56,rate:4,imageUrl:'assets/img/bag1.jpg'},
      {name:'Casual Crossbody Lock Button Tote',description:'This chic, genuine leather tote features a lock button for security and a trendy one-shoulder design.',price:59.56,rate:4,imageUrl:'assets/img/bag2.jpg'},
      {name:'Casual Crossbody Lock Button Tote',description:'This chic, genuine leather tote features a lock button for security and a trendy one-shoulder design.',price:59.56,rate:4,imageUrl:'assets/img/bag3.jpg'},
      {name:'Casual Crossbody Lock Button Tote',description:'This chic, genuine leather tote features a lock button for security and a trendy one-shoulder design.',price:59.56,rate:4,imageUrl:'assets/img/bag4.jpg'}
    ]
  }
  getallproduct(){
    return this.products;
  }
}
