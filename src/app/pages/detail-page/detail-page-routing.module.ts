import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DetailPageComponent} from './detail-page.component';
import {BlocksPageComponent} from '../blocks-page/blocks-page.component';

const routes: Routes = [
  {path: '', component: BlocksPageComponent},
  {path: ':id', component: DetailPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailPageRoutingModule {
}
