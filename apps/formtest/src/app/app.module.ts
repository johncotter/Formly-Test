import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyMaterialModule} from '@ngx-formly/material';
import { AppComponent } from './app.component';
import { FormlyFieldInput } from './formly-field-input/formly-field-input';
import { CustomListEditor } from './custom-list-editor/custom-list-editor';
import { CustomListEditorCVA } from './custom-list-editor-cva/custom-list-editor-cva';
import { CustomListEditorFormlyField } from './custom-list-editor-cva/custom-list-editor-cva-formly-field';

@NgModule({
  declarations: [AppComponent, FormlyFieldInput, CustomListEditor, CustomListEditorCVA, CustomListEditorFormlyField],
  imports: [BrowserModule, BrowserAnimationsModule, MatButtonModule, MatCheckboxModule, ReactiveFormsModule, FormlyModule.forRoot({
    types: [
      { name: 'custom-input', component: FormlyFieldInput }, { name: 'custom-component', component: CustomListEditor }, { name: 'custom-component-cva', component: CustomListEditorFormlyField }
    ]
  }), FormlyMaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
