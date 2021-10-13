import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BlocksPageComponent} from './blocks-page.component';
import {BlocksPageRoutingModule} from './blocks-page.routing.module';
import {AppCommonModule} from '../../app-common/app-common.module';

@NgModule({
  declarations: [
    BlocksPageComponent,
  ],
  imports: [
    CommonModule,
    BlocksPageRoutingModule,
    AppCommonModule
  ]
})
export class BlocksPageModule { }
