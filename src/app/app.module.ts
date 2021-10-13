import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './app-common/components/header/header.component';
import {BlocksPageComponent} from './pages/blocks-page/blocks-page.component';
import {AppCommonModule} from './app-common/app-common.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlocksPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppCommonModule
  ],
  providers: [],
  exports: [BlocksPageComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
