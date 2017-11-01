import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MasterModule } from './master/master.module';
import { HomeModule } from './home/home.module';
import { ContactUsModule } from './contact-us/contact-us.module';
import { AboutUsModule } from './about-us/about-us.module';
import { AppComponent } from './app.component';
import { appRoutes } from './route/route.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MasterModule,
    HomeModule,
    ContactUsModule,
    AboutUsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
