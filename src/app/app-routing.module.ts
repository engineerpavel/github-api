import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BlocksPageComponent} from './pages/blocks-page/blocks-page.component';

const routes: Routes = [
  {
    path: 'blocks',
    component: BlocksPageComponent
  },
  { path: 'detail', loadChildren: () => import('./pages/detail-page/detail-page.module').then(m => m.DetailPageModule) },
  { path: 'table', loadChildren: () => import('./pages/table-page/table-page.module').then(m => m.TablePageModule) },
  {
    path: "**",
    redirectTo: 'blocks'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
