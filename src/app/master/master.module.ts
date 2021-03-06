import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MenuComponent,
    FooterComponent
  ],
  declarations: [
    MenuComponent,
    FooterComponent
  ]
})
export class MasterModule { }
