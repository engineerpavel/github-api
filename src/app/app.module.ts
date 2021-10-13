import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './app-common/components/header/header.component';
import {BlocksPageComponent} from './pages/blocks-page/blocks-page.component';
import {SearchComponent} from './app-common/components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlocksPageComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  exports: [BlocksPageComponent, SearchComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
