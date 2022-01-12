import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyButtonComponent } from './components/my-button/my-button.component';
import { MyListComponent } from './components/my-list/my-list.component';
import { GrettingViewComponent } from './view/gretting-view/gretting-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MyButtonComponent,
    MyListComponent,
    GrettingViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
