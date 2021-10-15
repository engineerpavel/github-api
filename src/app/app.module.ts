import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './app-common/components/header/header.component';
import {BlocksPageComponent} from './pages/blocks-page/blocks-page.component';
import {AppCommonModule} from './app-common/app-common.module';
import {GithubSearchService} from './app-common/services/github-search.service';
import {GithubSearchRepository} from './app-common/repositories/github-search.repository';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlocksPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppCommonModule,
    HttpClientModule
  ],
  providers: [GithubSearchService, GithubSearchRepository],
  exports: [BlocksPageComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
