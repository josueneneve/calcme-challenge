import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormService } from './form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})

export class FormComponent implements OnInit {
  checkoutForm = this.formBuilder.group({
    name: '',
    email: '',
    telephone: '',
  });

  constructor(
    private formBuilder: FormBuilder,
    private formService: FormService
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (
      !this.checkoutForm.value.name ||
      !this.checkoutForm.value.email ||
      !this.checkoutForm.value.telephone
    ) {
      this.formService.showMessage('Precisa preencher todos os campos!');
      return;
    } else {
      this.formService.createUser(this.checkoutForm.value).subscribe(() => {
        this.formService.showMessage('Usuario criado!');
      });
    }
  }
}
