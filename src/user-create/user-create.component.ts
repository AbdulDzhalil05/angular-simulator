import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators, NonNullableFormBuilder } from '@angular/forms';
import { IUser } from '../interfaces/IUser';
import { FormControls } from '../types/form-controls.type';

@Component({
  selector: 'app-user-create',
  imports: [ReactiveFormsModule],
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.scss',
})
export class UserCreateComponent {

  @Output() closeRequested: EventEmitter<void> = new EventEmitter<void>();
  @Output() createRequested: EventEmitter<IUser> = new EventEmitter<IUser>();

  private fb: NonNullableFormBuilder = inject(NonNullableFormBuilder);

  createForm: FormGroup<FormControls<Omit<IUser, 'id'>>> = this.fb.group({
    name: ['', [Validators.required]],
    username: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    address: this.fb.group({
      street: [''],
      suite: [''],
      city: [''],
      zipcode: [''],
      geo: this.fb.group({
        lat: [''],
        lng: ['']
      }),
    }),
    phone: [''],
    website: [''],
    company: this.fb.group({
      name: [''],
      catchPhrase: [''],
      bs: ['']
    })
  });

  closeModal(): void {
    document.body.style.overflow = "auto";
    this.closeRequested.emit();
  }

  createUser(): void {
    this.createRequested.emit({
      id: Date.now(),
      ...this.createForm.getRawValue()
    });
    document.body.style.overflow = "auto";
    this.closeRequested.emit();
  }

}
