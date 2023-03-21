import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { WindowComponent } from './components/window/window.component';
import { ButtonComponent } from './components/button/button.component';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { ControlPanelComponent } from './components/control-panel/control-panel.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WindowComponent,
    ButtonComponent,
    FormFieldComponent,
    ControlPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
