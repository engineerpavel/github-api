import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DetailPageRoutingModule} from './detail-page-routing.module';
import {DetailPageComponent} from './detail-page.component';
import {AppCommonModule} from '../../app-common/app-common.module';


@NgModule({
  declarations: [
    DetailPageComponent
  ],
  imports: [
    CommonModule,
    DetailPageRoutingModule,
    AppCommonModule
  ]
})
export class DetailPageModule {
}
