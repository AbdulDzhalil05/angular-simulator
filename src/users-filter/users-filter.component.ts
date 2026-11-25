import { Component, EventEmitter, inject, Output, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs';

@Component({
  selector: 'app-users-filter',
  imports: [ReactiveFormsModule],
  templateUrl: './users-filter.component.html',
  styleUrl: './users-filter.component.scss',
})
export class UsersFilterComponent {

  private fb: FormBuilder = inject(FormBuilder);

  filter: FormControl = this.fb.control('');

  @Output() filterDate: EventEmitter<string> = new EventEmitter();

  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.filter.valueChanges.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      tap(value => this.filterDate.emit(value.trim().toLowerCase())),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe();
  }
}
