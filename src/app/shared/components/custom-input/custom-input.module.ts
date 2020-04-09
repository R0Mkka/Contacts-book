import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

import { CustomInputComponent } from './custom-input.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxMaskModule.forChild(),
  ],
  declarations: [
    CustomInputComponent,
  ],
  exports: [
    CustomInputComponent,
  ],
})
export class CustomInputModule {}
