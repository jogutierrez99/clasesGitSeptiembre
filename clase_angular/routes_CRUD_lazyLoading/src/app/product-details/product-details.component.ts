import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  private productService: ProductService = inject(ProductService);
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  public product: any = {};

  ngOnInit(){

    //Nos permite acceder a los datos de la ruta activa, en este caso lleva el id
    this.activatedRoute.params.subscribe((query) =>{

      this.productService.getProductById(query['id']).subscribe((data) =>{
        this.product = data;
      });

    })

    this.activatedRoute.params.subscribe((query) =>{

      console.log(query);
      this.productService.deleteProductById(query['id']).subscribe((data)=>{});

    })


  }



}
