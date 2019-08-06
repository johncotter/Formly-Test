import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
 selector: 'custom-list-editor',
 templateUrl: './custom-list-editor.html',
})
export class CustomListEditor extends FieldType {
  removeName(name: string) {
    this.formControl.setValue(this.formControl.value.filter((value, index, arr) =>
    value !== name
  ));
  }

  addName(name: string) {
    this.formControl.value.push(name);
    this.formControl.setValue(this.formControl.value);
  }
}
