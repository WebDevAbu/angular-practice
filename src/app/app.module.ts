import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InlineStyleComponent } from './inline-style/inline-style.component';
import { InlineTemplateComponent } from './inline-template/inline-template.component';
import { BothComponent } from './both/both.component';
import { UserListModule } from './user-list/user-list.module';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InlineStyleComponent,
    InlineTemplateComponent,
    BothComponent,
    HeaderComponent,
    ChildComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, UserListModule, FormsModule, NgbModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
