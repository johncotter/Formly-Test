import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
 selector: 'custom-list-editor-cva-formly-field',
 template: `
   <custom-list-editor-cva [formControl]="formControl" [formlyAttributes]="field"></custom-list-editor-cva>
 `,
})
export class CustomListEditorFormlyField extends FieldType {}
