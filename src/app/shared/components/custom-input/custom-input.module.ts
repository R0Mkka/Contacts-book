import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

import { CustomInputComponent } from './custom-input.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TextMaskModule,
  ],
  declarations: [
    CustomInputComponent,
  ],
  exports: [
    CustomInputComponent,
  ],
})
export class CustomInputModule {}
