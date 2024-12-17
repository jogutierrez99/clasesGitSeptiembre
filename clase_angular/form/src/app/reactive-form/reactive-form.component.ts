import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  isSubmitted: boolean = false;

  formBuilder: FormBuilder = inject(FormBuilder);

  productFormGroup = this.formBuilder.group({
    productName: ['', Validators.required],
    price: [0, Validators.required]
    })

  handleProductForm(){
    this.isSubmitted = true;

    if(this.productFormGroup.invalid){
      //alert("form no se lleno correctamente");
      return
    }

    //Se hace la llamada al servidor

  }

}
