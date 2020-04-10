import { Component, ChangeDetectionStrategy, Input, forwardRef, HostBinding } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { faStar as faSolidStar, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-toggle-star',
  templateUrl: './toggle-star.component.html',
  styleUrls: ['./toggle-star.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToggleStarComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToggleStarComponent implements ControlValueAccessor {
  @Input()
  public set isMarked(value: boolean) {
    this._isMarked = value;
    this.isMarkedClass = value;
  }

  public get isMarked(): boolean {
    return this._isMarked;
  }

  @Input()
  public useTitle = true;

  @HostBinding('class.marked')
  public isMarkedClass = false;

  @HostBinding('attr.title')
  public get title(): string {
    if (!this.useTitle) {
      return '';
    }

    return this.isMarked
      ? 'Убрать из избранного'
      : 'Добавить в избранное';
  }

  private _isMarked: boolean;

  public onChange = (value: boolean) => {};
  public onTouch = () => {};

  public get starIcon(): IconDefinition {
    return this.isMarked ? faSolidStar : faRegularStar;
  }

  public writeValue(value: boolean): void {
    this.onChange(value);
  }

  public registerOnChange(fn: (value: boolean) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }
}
