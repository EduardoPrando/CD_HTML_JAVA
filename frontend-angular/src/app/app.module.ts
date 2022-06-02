import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserInformationInputsComponent } from './components/user-information-inputs/user-information-inputs.component';
import { HttpClientModule } from '@angular/common/http';
import { UserInformationTableComponent } from './components/user-information-table/user-information-table.component';


@NgModule({
  declarations: [
    AppComponent,
    UserInformationInputsComponent,
    UserInformationTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
