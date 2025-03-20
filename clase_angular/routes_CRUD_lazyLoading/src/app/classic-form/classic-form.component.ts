import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-classic-form',
  standalone: true,
  imports: [FormsModule, ClassicFormComponent],
  templateUrl: './classic-form.component.html',
  styleUrl: './classic-form.component.css'
})
export class ClassicFormComponent {

private productService: ProductService = inject(ProductService);

 public productForm: any = {

    name: '',
    description: '',
    price: '',
    category: '',
    brand: '',
    quantity: '',
    imageUrl: "https://via.placeholder.com/150?text=Nombre+Producto",

  }

  handleForm(){
    const productFormValues = Object.values(this.productForm);
    if(productFormValues.includes('')){
      alert("faltan atributos por rellenar");
      return
    }


    this.productService.postProduct(this.productForm).subscribe((data) =>{
      //se ejecuta cuando la peticion se ha realizado corectamente
      this.productService.orderToUpdate.emit(true);

      this.productForm.name = '';
      this.productForm.description = ''
      this.productForm.price = 0;
      this.productForm.category = ''
      this.productForm.quantity = 0;

    }, (error) =>{
      //cuando hay un error se ejecuta esta parte
    })

  }



}
