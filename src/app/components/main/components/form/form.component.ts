import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgbDropdownModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent implements OnInit {
  form!: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {}

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
}
