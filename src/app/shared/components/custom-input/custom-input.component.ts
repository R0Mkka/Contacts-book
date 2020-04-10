import { Component, Input, forwardRef, ViewChild, ChangeDetectionStrategy, ElementRef, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl } from '@angular/forms';

import { ICustomField } from '../../../models/custom-field.models';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomInputComponent implements OnInit, ControlValueAccessor {
  @Input()
  public fieldInfo: ICustomField;

  @Input()
  public showErrors = false;

  public formControl: FormControl;

  public onChange = (value: string) => {};
  public onTouch = () => {};

  public ngOnInit(): void {
    this.initControl();
  }

  public get showInvalid(): boolean {
    return this.showErrors && this.formControl.invalid;
  }

  public writeValue(value: string): void {
    if (!value) {
      this.formControl.setValue(null);
      this.markFormAsTouched();
    }

    this.onChange(value);
  }

  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  private markFormAsTouched(): void {
    this.formControl.markAsTouched();
    this.formControl.markAsDirty();
  }

  private initControl(): void {
    this.formControl = new FormControl(
      this.fieldInfo.control.initialValue,
      this.fieldInfo.control.validators,
    );

    this.markFormAsTouched();
  }
}
