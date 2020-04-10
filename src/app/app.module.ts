import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CustomInputModule } from './shared/components/custom-input/custom-input.module';
import { ToggleStarModule } from './shared/components/toggle-star/toggle-star.module';

import { AppComponent } from './app.component';
import { NewContactFormComponent } from './components/new-contact-form/new-contact-form.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatTableModule,
    FontAwesomeModule,
    CustomInputModule,
    ToggleStarModule,
  ],
  declarations: [
    AppComponent,
    NewContactFormComponent,
    ContactListComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
