import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FormService } from './form.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgbDropdownModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent implements OnInit {
  form!: FormGroup;

  loading = false;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly formService: FormService
  ) {}

  ngOnInit(): void {
    this.formInit();
  }

  private formInit() {
    this.form = this.formBuilder.group({
      full_name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      company_name: ['', [Validators.required]],
      marketing: ['', [Validators.required]],
      program: ['', [Validators.required]],
      business: ['', [Validators.required]],
      investment: ['', [Validators.required]],
    });
  }

  onSelectItem(value: string, control: string) {
    this.form.get(control)?.setValue(value);
  }

  onPostForm() {
    if (this.form.invalid) return;
    const {
      email,
      full_name,
      phone,
      company_name,
      program,
      investment,
      business,
      marketing,
    } = this.form.value;
    const date = new Date();
    const body = {
      Fecha: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
      'Nombres Completos': full_name,
      Celular: phone,
      'Correo Electrónico': email,
      'Nombre de la Empresa': company_name,
      '¿Tienes Página Web o Tienda Online?': program,
      'Inversión en Publicidad': investment,
      '¿Qué tipo de negocio Tienes?': business,
      '¿Trabaja o Trabajó con una agencia?': marketing,
    };
    this.loading = true;
    this.formService.postForm(body).subscribe({
      next: () => {
        this.loading = false;
        this.form.reset();
      },
      error: () => {
        this.loading = false;
        this.form.markAllAsTouched();
      },
    });
  }
}
