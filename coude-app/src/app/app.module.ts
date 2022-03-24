import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ContactComponent } from './contact/contact.component';
=======
import { FooterComponent } from './footer/footer.component';
>>>>>>> f18d8bcbc2721f08d7c29a00ed58c204387e0067

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ContactComponent
=======
    FooterComponent
>>>>>>> f18d8bcbc2721f08d7c29a00ed58c204387e0067
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
