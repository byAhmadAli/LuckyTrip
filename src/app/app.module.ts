import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { httpInterceptorProviders } from './core/interceptors';

import { AppComponent } from './app.component';

import { SkeletonBoxComponent } from './components/skeleton-box/skeleton-box.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

import { SkeletonDirective } from './directives/skeleton/skeleton.directive';

import { HomePage } from './pages/home/home.page';
import { SearchPage } from './pages/search/search.page';

@NgModule({
  declarations: [
    AppComponent,

    SkeletonBoxComponent,
    SkeletonDirective,
    HeaderComponent,
    SearchBarComponent,

    HomePage,
    SearchPage,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
