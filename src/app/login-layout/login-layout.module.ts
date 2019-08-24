import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {ButtonsModule, DropdownModule, MDBBootstrapModule, WavesModule} from "angular-bootstrap-md";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule
  ]
})

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        MDBBootstrapModule.forRoot(),
        FormsModule,
        ButtonsModule,
        DropdownModule,
        WavesModule,
        ReactiveFormsModule
    ],
    declarations: [
        LoginComponent,
    ],
    exports: [
        LoginComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA,
        CUSTOM_ELEMENTS_SCHEMA
    ],
    providers: []
})
export class LoginLayoutModule { }
