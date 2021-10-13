import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablePageRoutingModule } from './table-page-routing.module';
import { TablePageComponent } from './table-page.component';
import {AppCommonModule} from '../../app-common/app-common.module';


@NgModule({
  declarations: [
    TablePageComponent
  ],
  imports: [
    CommonModule,
    TablePageRoutingModule,
    AppCommonModule
  ]
})
export class TablePageModule { }
