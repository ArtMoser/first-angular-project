import { Routes } from '@angular/router';

import { AboutUsComponent } from './../about-us/about-us/about-us.component';
import { ContactUsComponent } from './../contact-us/contact-us/contact-us.component';
import { HomeComponent } from './../home/home/home.component';

export const appRoutes: Routes = [
    { path: 'about-us', component: AboutUsComponent },
    { path: 'contact-us', component: ContactUsComponent },
    { path: '', component: HomeComponent },
    { path: '**', component: HomeComponent }
];
