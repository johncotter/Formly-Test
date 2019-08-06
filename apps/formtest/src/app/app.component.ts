import { Component } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'formtest-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'formtest';
  form = new FormGroup({});
  model = { email: 'email@gmail.com', customComponentExtends: ['Abe2', 'Gabe2', 'Dave2'], customComponent: ['Abe', 'Gabe', 'Dave'],  customInput: 'me me me'};
  fields: FormlyFieldConfig[] = [{
    key: 'email',
    type: 'input',
    templateOptions: {
      label: 'Email address',
      placeholder: 'Enter email',
      required: true,
    }
  },{
    key: 'customInput',
    type: 'custom-input',
    templateOptions: {
      label: 'Custom Input',
      placeholder: 'Formly is terrific!',
    },
  },{
    key: 'customComponent',
    type: 'custom-component',
    templateOptions: {
      label: 'Custom Componet'
    },
  },{
    key: 'customComponentExtends',
    type: 'custom-component-cva',
    templateOptions: {
      label: 'Custom Componet Extended'
    },
  }];

  submit(model) {
    console.log(model);
  }
}
