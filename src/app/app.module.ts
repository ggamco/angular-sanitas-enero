import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyButtonComponent } from './components/my-button/my-button.component';
import { MyListComponent } from './components/my-list/my-list.component';
import { GrettingViewComponent } from './view/gretting-view/gretting-view.component';
import { SaludoViewComponent } from './view/saludo-view/saludo-view.component';
import { UserFormComponent } from './view/user-form/user-form.component';
import { LoginViewComponent } from './view/login-view/login-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MyButtonComponent,
    MyListComponent,
    GrettingViewComponent,
    SaludoViewComponent,
    UserFormComponent,
    LoginViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // esto es para poder vincular los formularios con objetos en TypeScript
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
