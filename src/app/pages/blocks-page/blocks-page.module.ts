import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlocksPageRoutingModule } from './blocks-page-routing.module';
import { BlocksPageComponent } from './blocks-page.component';


@NgModule({
  declarations: [
    BlocksPageComponent
  ],
  imports: [
    CommonModule,
    BlocksPageRoutingModule
  ]
})
export class BlocksPageModule { }
