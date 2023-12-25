import { Component } from '@angular/core';
import { ProductService } from '../auth/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  newarrivals!:any[];
  images: string[] = [
    'assets/img/sac.jfif',
    'assets/img/sac1.jfif',
    
  ];

  slidePosition = 0;

  nextSlide() {
    this.slidePosition -= 100;
    this.updateCarousel();
  }

  prevSlide() {
    this.slidePosition += 100;
    this.updateCarousel();
  }

  updateCarousel() {
    if (this.slidePosition > 0) {
      this.slidePosition = -((this.images.length - 1) * 100);
    } else if (this.slidePosition < -((this.images.length - 1) * 100)) {
      this.slidePosition = 0;
    }
  }

  newArrivals: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadNewArrivals();
  }

  loadNewArrivals() {
   
   this.newarrivals=this.productService.getallproduct()
    };
  }



