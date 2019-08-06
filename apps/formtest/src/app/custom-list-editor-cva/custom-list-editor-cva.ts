import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
 selector: 'custom-list-editor-cva',
 templateUrl: './custom-list-editor-cva.html',
 providers: [{
   provide: NG_VALUE_ACCESSOR,
   useExisting: forwardRef(() => CustomListEditorCVA),
   multi: true
 }]
})
export class CustomListEditorCVA implements ControlValueAccessor {
  disabled: boolean;
  _value: string[];
  onChanged: any = () => {};
  onTouched: any = () => {};

  writeValue(value: any) {
    console.log('writeValue', value);
    if (value !== undefined) {
      this._value = value;
    }
  }
  registerOnChange(fn) {this.onChanged = fn;}
  registerOnTouched(fn) {this.onTouched = fn;}
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  removeName(name: string) {
    if(!this.disabled) {
    this._value = this._value.filter((value, index, arr) =>
      value !== name
    );
    this.onChanged(this._value);
    this.onTouched();
  }
}

  addName(name: string) {
    if(!this.disabled) {
      this._value.push(name);
      this.onChanged(this._value);
      this.onTouched();
    }
  }
}
