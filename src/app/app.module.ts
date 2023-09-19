// moduli di angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// componenti creati
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ListComponent } from './components/list/list.component';
import { CardComponent } from './components/card/card.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { TimestampToDatePipe } from './pipes/timestamp-to-date.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    CardComponent,
    FavouritesComponent,
    TimestampToDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  //componente con cui inizia
  bootstrap: [AppComponent]
})
export class AppModule { }