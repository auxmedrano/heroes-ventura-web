import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeroesListComponent } from './component/heroes-list/heroes-list.component';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './material/material.module';
import { HeroCardComponent } from './component/hero-card/hero-card.component';
import {ImagenPipe} from "./pipes/imagen.pipe";

@NgModule({
  declarations: [AppComponent, DashboardComponent, HeroesListComponent, HeroCardComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, MaterialModule, ImagenPipe,FlexLayoutModule],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
