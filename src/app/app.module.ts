import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedHomeComponent } from './shared/home/home.component';
import { SharedAboutComponent } from './shared/about/about.component';
import { SharedContactComponent } from './shared/contact/contact.component';
import { SharedHeaderComponent } from './shared/header/header.component';
import { SharedFooterComponent } from './shared/footer/footer.component';
import { SharedLayoutComponent } from './shared/layout/layout.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { UserComponent } from './admin/user/user.component';
import { FlowComponent } from './admin/flow/flow.component';
import { LoginComponent } from './login/login.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    SharedHomeComponent,
    SharedAboutComponent,
    SharedContactComponent,
    SharedHeaderComponent,
    SharedFooterComponent,
    SharedLayoutComponent,
    LayoutComponent,
    UserComponent,
    FlowComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
