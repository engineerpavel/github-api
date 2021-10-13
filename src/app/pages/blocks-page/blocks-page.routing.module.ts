import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {BlocksPageComponent} from './blocks-page.component';

const routes: Routes = [{ path: '', component: BlocksPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlocksPageRoutingModule { }
